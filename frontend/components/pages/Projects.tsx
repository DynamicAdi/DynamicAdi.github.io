import React, { useState } from 'react'
import Tabs from '../core/projects/upperTabs'
import { useTheme } from '../common/ThemeProvider';
import ProjectCard from '../core/projects/ProjectCard';


function Projects() {
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

    const test = [1,2,3,4, 5, 6]
  return (
    <>
    
    <Tabs tabs={tabs} opened={opened} handleChange={handleChange} isDarkMode={isDarkMode}/>
    
    <div className='relative'>
   <div className={`w-full h-[35rem] mt-3 px-2 pt-12 pb-2 flex flex-wrap gap-10 gap-y-16 overflow-scroll`}>
      <ProjectCard />
      <ProjectCard />
      
    </div>
    </div>
    </>
  )
}

export default Projects