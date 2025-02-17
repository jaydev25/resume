'use client';

import { FaEye } from 'react-icons/fa';
import { useWebSocket } from '@/hooks/useWebSocket';

export default function ViewerCount() {
  const { isConnected, viewerCount } = useWebSocket();

  return (
    <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-2 rounded-full">
      <FaEye />
      <span>{viewerCount} viewing</span>
      {!isConnected && <span className="w-2 h-2 rounded-full bg-red-500" title="Disconnected" />}
    </div>
  );
}
