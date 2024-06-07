import React, { useState } from 'react'
import { useTheme } from '../common/ThemeProvider'
import Card from '../core/projects/card';
import demo from "@/public/react.png";



function Skills() {
  const {isDarkMode} = useTheme();
  const tabs = [
    {name: 'Development', colorDark: "bg-purple-300", color: 'bg-purple-300'},
    {name: 'Design', colorDark: "bg-blue-300", color: 'bg-blue-200'},
    {name: '3D Models', colorDark: "bg-green-300", color: 'bg-green-200'},
    {name: 'Animations', colorDark: "bg-orange-300", color: 'bg-orange-200'},
    {name: 'communication', colorDark: "bg-yellow-300", color: 'bg-yellow-200'},
  ]
  const [opened, setOpened] = useState(tabs[0].name);

  const handleChange = (name:string) => {
    setOpened(name)
  }
  return (
    <div className={`w-full h-full p-2`}>
        {/* Upper Tabs */}
        <div className="w-full lg:h-12 h-auto flex lg:justify-end lg:items-end justify-start items-start">
            <div className='w-max h-auto flex lg:gap-3 gap-2 lg:justify-center lg:items-center justify-start items-start lg:pr-8 flex-wrap'>
              {tabs.map((tabs, index) => (
                <div onClick={() => handleChange(tabs.name)} className={`${tabs.name===opened ? isDarkMode ? tabs.colorDark : tabs.color : isDarkMode ? "bg-foreground-dark text-white" : "bg-gray-200"} w-max h-auto  rounded-lg text-center p-3 py-1.5 cursor-pointer`} key={index}><p className='font-local font-normal'>{tabs.name}</p></div>
              ))}
            </div>
        </div>

    {/* Lower content */}
    <div className="w-full h-[90%]">
      <Card title='Techinical Skills' name='React.js' imgLink={demo.src}/>
      <Card title='Dev Tools' name='React.js' imgLink={demo.src}/>

    </div>
    </div>
  )
}

export default Skills