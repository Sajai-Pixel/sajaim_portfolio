import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      <span className="text-lg leading-none">
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  )
}

export default ThemeToggle
