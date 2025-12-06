// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved === 'dark' : prefersDark;
    
    setIsDark(initial);
    if (initial) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}