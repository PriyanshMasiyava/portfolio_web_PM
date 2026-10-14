import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../lib/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg border border-slate-700/60 text-slate-400 hover:text-violet-400
                 hover:border-violet-500/50 transition-all duration-200 focus:outline-none
                 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-navy-950"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
