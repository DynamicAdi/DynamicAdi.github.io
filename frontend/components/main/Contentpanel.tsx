import React from 'react'
import { useTheme } from '../common/ThemeProvider'
import Projects from '../pages/Projects';
import Blogs from '../pages/Blogs';

function Contentpanel() {
  const {isDarkMode} = useTheme();
  return (
    <div className={`rounded-3xl w-full h-full ${isDarkMode ? "dark:bg-upper-dark" : "bg-upper-light"} p-2`}>
      {/* <Home /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Blogs />
    </div>
  )
}

export default Contentpanel