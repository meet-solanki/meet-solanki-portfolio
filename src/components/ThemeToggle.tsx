
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out flex items-center justify-center touch-manipulation focus:outline-none focus:ring-2 focus:ring-portfolio-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <span className="text-xl transition-all duration-300 ease-in-out transform">
        {theme === 'light' ? '🌞' : '🌙'}
      </span>
    </button>
  );
}
