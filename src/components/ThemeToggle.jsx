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
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
