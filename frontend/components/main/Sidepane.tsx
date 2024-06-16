import React, { useState } from 'react'
import { useTheme } from '../common/ThemeProvider';
import image from "@/public/me.jpg";
import { PiCoffeeLight, PiDatabaseLight, PiBookLight, PiPhoneLight, PiHashLight} from 'react-icons/pi';

function Sidepane() {
    const {isDarkMode} = useTheme();
  const tabs = [
    {name: "Home", color: "orange-400", icon: PiCoffeeLight},
    {name: "Projects", color: "purple-600", icon: PiDatabaseLight},
    {name: "Skills", color: "sky-500", icon: PiHashLight},
    {name: "Blogs", color: "yellow-300", icon: PiBookLight},
    {name: "Contact", color: "teal-500", icon: PiPhoneLight},
  ]
  const[opened, setOpen] = useState(tabs[0].name);
    return (
    <div className={`lg:w-1/4 w-full md:h-1/3 h-3/5 lg:h-[87%] ${isDarkMode ? "dark:bg-upper-dark" : "bg-white"} rounded-3xl relative items-center justify-end flex flex-col`}>
        <div className="md:w-2/5 md:h-3/4 w-3/4 lg:h-2/5 h-[55%] lg:w-4/5 overflow-hidden absolute md:-top-16 -top-5 lg:-top-20 rounded-2xl bg-cover">
          <img src={image.src} alt={"This is me!"} className='w-full h-full rounded-2xl object-cover bg-center' />
        </div>
      <div className="w-full h-[28%]"></div>
    <div className="px-4">
      <h1 className={`font-source font-extrabold leading-none text-[2rem] ${isDarkMode ? "dark:text-white" : "text-black"}`}>Dev Adarsh Pandit</h1>
      <p className={`font-inter text-gray-500 text-base leading-none`}>The Boundary Fire was a 2017 wildfire in Arizona that burned 17,788 acres</p>
    </div>
    <div className="h-1/5 w-full lg:h-[55%] flex lg:flex-col justify-center lg:items-start items-end gap-2 lg:py-0 py-4 px-4 mt-3">
    {
      tabs.map((tab, index) => (
        <div key={index} onClick={() => setOpen(tab.name)} className={`relative lg:hover:ml-4 cursor-pointer ${opened === tab.name && `bg-${tab.color}/25 text-${tab.color} `} ${isDarkMode && "text-white"} transition-all ease-in-out duration-300 lg:py-1 lg:px-4 p-3 rounded-lg lg:w-4/5 w-1/5 lg:text-left text-center lg:text-2xl flex lg:justify-start justify-center items-center lg:gap-2`}><tab.icon className={`lg:text-2xl text-3xl`}/><h3 className={`text-2xl`}><span className='hidden lg:inline'>{tab.name}</span></h3></div>
      ))
    }
   </div>
    </div>
  )
}

export default Sidepane