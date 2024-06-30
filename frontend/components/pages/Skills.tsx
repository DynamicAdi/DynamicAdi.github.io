import React, { useState } from 'react'
import { useTheme } from '../common/ThemeProvider'
import {SkillsCard} from '../core/skills/card';
import demo from "@/public/react.png";
import Tabs from '../core/projects/upperTabs';



function Skills() {
  const {isDarkMode} = useTheme();
  const tabs = [
    {name: 'Development', colorDark: "bg-purple-400/30", text: "text-purple-500"},
    {name: 'UI/UX', colorDark: "bg-blue-400/30", text: "text-blue-500"},
    {name: '3D Models', colorDark: "bg-yellow-400/30", text: "text-yellow-500"},
    {name: 'Animations', colorDark: "bg-orange-400/30", text: "text-orange-500"},
    {name: 'Graphic Design', colorDark: "bg-green-400/30", text: "text-green-500"},
  ]
  const [opened, setOpened] = useState(tabs[0].name);

  const handleChange = (name:string) => {
    setOpened(name)
  }
  return (
    <div className={`w-full h-full p-2`}>
        {/* Upper Tabs */}
       <Tabs tabs={tabs} opened={opened} handleChange={handleChange} isDarkMode={isDarkMode}/>

    {/* Lower content */}
    <div className="w-full h-[90%]">
      <SkillsCard title='Techinical Skills' name='React.js' imgLink={demo.src}/>

    </div>
    </div>
  )
}

export default Skills