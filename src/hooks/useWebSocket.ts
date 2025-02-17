import { useEffect, useRef, useState, useCallback } from 'react';

const WS_URL = 'ws://ec2-13-51-171-195.eu-north-1.compute.amazonaws.com:3001';

interface WebSocketMessage {
  type: 'viewerCount' | 'ping' | 'pong';
  count?: number;
  status?: string;
}

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldAttemptReconnect = useRef(true);

  const cleanup = useCallback(() => {
    shouldAttemptReconnect.current = false;
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    if (pingIntervalRef.current) {
      clearInterval(pingIntervalRef.current);
      pingIntervalRef.current = null;
    }
    if (pingTimeoutRef.current) {
      clearTimeout(pingTimeoutRef.current);
      pingTimeoutRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  }, []);

  const heartbeat = useCallback(() => {
    if (pingTimeoutRef.current) {
      clearTimeout(pingTimeoutRef.current);
    }
    
    pingTimeoutRef.current = setTimeout(() => {
      console.log('Ping timeout - connection dead');
      if (wsRef.current) {
        wsRef.current.close();
      }
    }, 30000);
  }, []);

  const connect = useCallback(() => {
    if (!shouldAttemptReconnect.current) return;
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    console.log('Connecting to WebSocket:', WS_URL);
    
    try {
      wsRef.current = new WebSocket(WS_URL);

      wsRef.current.onopen = () => {
        setIsConnected(true);
        console.log('WebSocket connected');
        
        if (pingIntervalRef.current) {
          clearInterval(pingIntervalRef.current);
        }
        
        pingIntervalRef.current = setInterval(() => {
          if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({ type: 'ping' }));
          }
        }, 15000);
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data: WebSocketMessage = JSON.parse(event.data);
          
          switch (data.type) {
            case 'pong':
              heartbeat();
              break;
            case 'viewerCount':
              if (typeof data.count === 'number') {
                setViewerCount(data.count);
              }
              break;
          }
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      wsRef.current.onclose = (event) => {
        setIsConnected(false);
        if (pingIntervalRef.current) {
          clearInterval(pingIntervalRef.current);
          pingIntervalRef.current = null;
        }
        console.log(`WebSocket closed with code: ${event.code}, reason: ${event.reason || 'No reason provided'}`);
        
        if (shouldAttemptReconnect.current) {
          reconnectTimeoutRef.current = setTimeout(() => {
            console.log('Attempting to reconnect...');
            connect();
          }, 3000);
        }
      };
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setIsConnected(false);
    }
  }, [heartbeat]);

  useEffect(() => {
    shouldAttemptReconnect.current = true;
    connect();
    
    return () => {
      cleanup();
    };
  }, [connect, cleanup]);

  return { isConnected, viewerCount };
};
