'use client';

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
