import React, { useState } from 'react'
import Tabs from '../core/projects/upperTabs'
import { useTheme } from '../common/ThemeProvider';
import { RxExternalLink } from "react-icons/rx";
import { ProjectsCard } from '../core/projects/card';


function Projects() {
    const {isDarkMode} = useTheme();
    const tabs = [
        {name: 'Development', colorDark: "bg-purple-300", color: 'bg-purple-300'},
        {name: 'UI/UX', colorDark: "bg-blue-300", color: 'bg-blue-200'},
        {name: '3D Models', colorDark: "bg-yellow-300", color: 'bg-yellow-200'},
        {name: 'Animations', colorDark: "bg-orange-300", color: 'bg-orange-200'},
        {name: 'Graphic Design', colorDark: "bg-green-300", color: 'bg-green-200'},
      ]
      const [opened, setOpened] = useState(tabs[0].name);

    const handleChange = (name:string) => {
        setOpened(name)
    }

    const test = [1,2,3,4, 5, 6]
  return (
    <>
    
    <Tabs tabs={tabs} opened={opened} handleChange={handleChange} isDarkMode={isDarkMode}/>
    <div className={`w-full h-[36rem] mt-3 px-8 overflow-auto flex gap-12 gap-y-10 flex-wrap relative`}>
    <div className={`fixed bottom-4 left-[50%] w-max h-8 rounded-full ${isDarkMode ? "bg-white/30" : "bg-black/50"} backdrop-blur-sm z-10 text-white cursor-pointer px-4 py-1 hover:scale-110 ease-bounce transition-all`}><a href='' className='font-local font-normal flex justify-center items-center gap-1.5'>View more on behance <RxExternalLink /></a></div>
    
    <ProjectsCard />
    </div>
    </>
  )
}

export default Projects