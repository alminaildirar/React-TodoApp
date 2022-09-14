import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeSwitchButton = () => {
    const {theme, setTheme} = useTheme()
  return (
    <div><button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Switch Theme</button></div>
  )
}

export default ThemeSwitchButton;