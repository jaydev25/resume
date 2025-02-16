'use client';

import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function ViewerCount() {
  const [count, setCount] = useState(0);
  const [ws, setWs] = useState<WebSocket | null>(null);

  const connectWebSocket = () => {
    const websocket = new WebSocket('wss://1059e5df-53ab-4c40-a32f-5a643a21095a-dev.e1-eu-north-azure.choreoapis.dev/default/resume-server/v1.0');

    websocket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'viewerCount') {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    websocket.onclose = () => {
      console.log('Disconnected from WebSocket server. Reconnecting in 5 seconds...');
      setTimeout(connectWebSocket, 5000);
    };

    setWs(websocket);
  };

  useEffect(() => {
    try {
      connectWebSocket();
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
    }

    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  return (
    <div className="fixed left-4 flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-2 rounded-full">
      <FaEye />
      <span>{count} viewing</span>
    </div>
  );
}
