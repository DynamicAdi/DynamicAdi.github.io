import React, { useState } from 'react'
import { useTheme } from '../common/ThemeProvider'
import {SkillsCard} from '../core/skills/card';
import demo from "@/public/react.png";
import Tabs from '../core/projects/upperTabs';



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
       <Tabs tabs={tabs} opened={opened} handleChange={handleChange} isDarkMode={isDarkMode}/>

    {/* Lower content */}
    <div className="w-full h-[90%]">
      <SkillsCard title='Techinical Skills' name='React.js' imgLink={demo.src}/>
      <SkillsCard title='Dev Tools' name='React.js' imgLink={demo.src}/>

    </div>
    </div>
  )
}

export default Skills