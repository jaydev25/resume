'use client';

import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

export default function ViewerCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // For demo purposes, we'll use a random number between 10-50
    const randomCount = Math.floor(Math.random() * 41) + 10;
    setCount(randomCount);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-2 rounded-full">
      <FaEye />
      <span>{count} viewing</span>
    </div>
  );
}
