import { useEffect, useState } from 'react';

function useDarkMode() {
  // Default to light mode
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    // Retrieve stored theme from local storage if available
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
    setTheme(storedTheme || 'light'); // Default to light if not found

    const root = window.document.documentElement;
    root.classList.add(storedTheme || 'light');

    return () => {
      root.classList.remove(storedTheme || 'light');
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return [theme, toggleTheme];
}

export default useDarkMode;
