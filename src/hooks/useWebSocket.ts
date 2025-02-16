import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const WS_URL = process.env.NODE_ENV === 'production'
  ? 'wss://your-websocket-server.com' // You'll need to update this with your WebSocket server URL
  : 'ws://localhost:3001';

interface WebSocketMessage {
  type: 'message' | 'connection' | 'ping' | 'pong';
  data?: string;
  status?: string;
}

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
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
            case 'message':
              if (data.data && typeof data.data === 'string') {
                setMessages((prev) => [...prev, data.data as string]);
              }
              break;
            case 'connection':
              console.log('Connection status:', data.status);
              break;
          }
        } catch (error) {
          console.error('Error parsing message:', error);
          if (typeof event.data === 'string') {
            setMessages((prev) => [...prev, event.data]);
          }
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

  const sendMessage = useCallback((message: string) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'message', data: message }));
    } else {
      console.warn('WebSocket is not connected');
    }
  }, []);

  useEffect(() => {
    shouldAttemptReconnect.current = true;
    connect();
    
    return () => {
      cleanup();
    };
  }, [connect, cleanup]);

  return { isConnected, messages, sendMessage };
};
