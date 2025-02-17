import { useEffect, useRef, useState, useCallback } from 'react';

const WS_URL = 'ws://ec2-13-51-171-195.eu-north-1.compute.amazonaws.com:3001';

interface WebSocketMessage {
  type: 'viewerCount';
  count?: number;
  status?: string;
}

export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldAttemptReconnect = useRef(true);

  const cleanup = useCallback(() => {
    shouldAttemptReconnect.current = false;
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
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
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data: WebSocketMessage = JSON.parse(event.data);
          
          if (data.type === 'viewerCount' && typeof data.count === 'number') {
            setViewerCount(data.count);
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
        console.log('WebSocket disconnected:', event.reason);
        
        if (shouldAttemptReconnect.current) {
          reconnectTimeoutRef.current = setTimeout(() => {
            console.log('Attempting to reconnect...');
            connect();
          }, 5000);
        }
      };
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      if (shouldAttemptReconnect.current) {
        reconnectTimeoutRef.current = setTimeout(connect, 5000);
      }
    }
  }, []);

  useEffect(() => {
    shouldAttemptReconnect.current = true;
    connect();
    
    return () => {
      cleanup();
    };
  }, [connect, cleanup]);

  return { isConnected, viewerCount };
};
