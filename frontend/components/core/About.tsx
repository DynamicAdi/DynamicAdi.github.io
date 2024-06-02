import React from 'react'
import { useTheme } from '../common/ThemeProvider'
export default function About() {
    const {isDarkMode} = useTheme();
    
  return (
    <div
    className={`flex lg:w-[55%] w-full lg:h-full h-1/2 rounded-2xl ${
      isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-300"
    } relative overflow-hidden p-3`}
  >
    <div className="absolute w-full h-full inset-0 -top-80 -left-52">

            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={`${isDarkMode ? "#ffffff" : "#0101010"}`}
          d="M48.5,-60.7C60.6,-47.7,66.5,-30.2,69.4,-12.4C72.4,5.4,72.4,23.6,61.5,28.8C50.5,34,28.6,26.2,14.1,26C-0.5,25.8,-7.6,33.3,-14.8,33.7C-21.9,34.1,-29.1,27.5,-35.3,19.2C-41.6,10.9,-47,0.8,-49.6,-13.1C-52.3,-26.9,-52.3,-44.6,-43.6,-58.3C-34.9,-71.9,-17.4,-81.4,0.4,-81.9C18.2,-82.4,36.4,-73.8,48.5,-60.7Z"
          transform="translate(100 100) rotate(180)"
        />
      </svg>
    </div>
    <div className="absolute w-full h-full inset-0 top-6 left-64">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={`${isDarkMode ? "#e0e0e0" : "#0101010"}`}
          d="M48.5,-60.7C60.6,-47.7,66.5,-30.2,69.4,-12.4C72.4,5.4,72.4,23.6,61.5,28.8C50.5,34,28.6,26.2,14.1,26C-0.5,25.8,-7.6,33.3,-14.8,33.7C-21.9,34.1,-29.1,27.5,-35.3,19.2C-41.6,10.9,-47,0.8,-49.6,-13.1C-52.3,-26.9,-52.3,-44.6,-43.6,-58.3C-34.9,-71.9,-17.4,-81.4,0.4,-81.9C18.2,-82.4,36.4,-73.8,48.5,-60.7Z"
          transform="translate(100 100) rotate(180)"
        />
      </svg>
    </div>

    <h2 className={`text-gray-100 relative z-20 text-justify font-local font-bold leading-6 text-xl mix-blend-difference`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
  </div>
  )
}
