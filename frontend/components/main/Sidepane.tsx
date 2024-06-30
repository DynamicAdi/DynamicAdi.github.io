import React, { useState } from 'react'
import { useTheme } from '../common/ThemeProvider';
import image from "@/public/me.jpg";

function Sidepane({opened, setOpen, color, setColor, tabs}: {
  opened: string,
    setOpen: React.Dispatch<React.SetStateAction<string>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    tabs: {name: string, color: string, icon: any}[]
}) { 
    const {isDarkMode} = useTheme();

    return (
    <div className={`lg:w-1/4 w-full h-[25rem] lg:h-[87%] ${isDarkMode ? "dark:bg-upper-dark" : "bg-white"} rounded-3xl relative items-center justify-end flex flex-col`}>
        <div className="w-3/4 lg:h-[40%] h-[60%] md:w-1/2 lg:w-4/5 overflow-hidden absolute  -top-5 lg:-top-20 rounded-2xl">
          <img src={image.src} alt={"This is me!"} className='w-full h-full object-cover rounded-2xl bg-top' />
        </div>
      {/* <div className="w-full h-[28%]"></div> */}
    <div className="px-4">
      <h1 className={`font-source font-extrabold leading-none text-[2rem] ${isDarkMode ? "dark:text-white" : "text-black"}`}>Dev Adarsh Pandit</h1>
      <p className={`font-inter text-gray-500 text-base leading-none`}>The Boundary Fire was a 2017 wildfire in Arizona that burned 17,788 acres</p>
    </div>
    <div className="h-1/5 w-full lg:h-[55%] flex lg:flex-col justify-center lg:items-start items-end gap-2 lg:py-0 py-4 px-4 mt-3">
    {
      tabs.map((tab, index) => (
        <div key={index} onClick={() => {setOpen(tab.name), setColor(tab.color)}} className={`relative lg:hover:ml-4 cursor-pointer ${opened === tab.name && `bg-${color}/25`} ${isDarkMode ? "text-white": "text-black"} transition-all ease-in-out duration-300 lg:py-1 lg:px-4 p-3 rounded-lg lg:w-4/5 w-1/5 lg:text-left text-center lg:text-2xl`}><h3 className={`text-2xl flex lg:justify-start justify-center items-center lg:gap-2 ${opened===tab.name && `text-${color}`}`}><tab.icon className={`lg:text-2xl text-3xl`}/><span className='hidden lg:inline'>{tab.name}</span></h3></div>
      ))
    }
   </div>
    </div>
  )
}

export default Sidepane