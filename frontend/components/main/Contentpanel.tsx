import React from 'react'
import { useTheme } from '../common/ThemeProvider'
import Home from '@/components/pages/Home';

function Contentpanel() {
  const {isDarkMode} = useTheme();
  return (
    <div className={`rounded-3xl w-full h-full ${isDarkMode ? "dark:bg-upper-dark" : "bg-upper-light"} p-2`}>
      <Home />
    </div>
  )
}

export default Contentpanel