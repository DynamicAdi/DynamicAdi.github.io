import { useTheme } from '@/components/common/ThemeProvider'
import React from 'react'
import pic from '@/public/demopic.jpg';
import {RxGithubLogo, RxEyeOpen} from "react-icons/rx";

function SkillsCard({title, imgLink, name}: {
    title: string,
    imgLink: string,
    name: string,
}) {

    const {isDarkMode} = useTheme();
  return (
    <>
    <h1 className={`font-local font-semibold text-4xl lg:px-4 ${isDarkMode && "text-white"} mt-4 lg:mt-0 px-2`}>{title}</h1>
      <div className={`h-2/5 w-full p-3 lg:px-4 px-2 flex justify-start items-start gap-3 flex-wrap`}>
        <div className={`w-[9.5rem] h-28 ${isDarkMode ? "bg-foreground-dark text-white": "bg-gray-200"} rounded-2xl flex flex-col justify-center items-center gap-2`}><img src={imgLink} alt='tech' className='w-1/2 h-1/2 bg-center object-contain'/> <h2 className='font-local font-medium text-xl'>{name}</h2></div>
      </div>
    </>
  )
}


function ProjectsCard() {
  const {isDarkMode} = useTheme();

  return (
    <>
        <div className={`w-60 h-80 overflow-hidden group cursor-pointer`}>
      <div className="image w-full relative">
        <img src={pic.src} alt='pic' className='rounded-lg h-36 object-fill w-full'/>
      </div>
    <div className={`flex flex-col justify-start items-start gap-1 mt-2`}>  
        <div className={`flex gap-1 justify-start items-center flex-wrap`}>
        <div className={`h-4 w-auto rounded-md ${isDarkMode ? "bg-sky-300/20" : "bg-sky-300/40"} p-2.5 flex justify-center items-center`}><p className={`text-sm ${isDarkMode ? "text-sky-300" : "text-sky-500"} font-local`}>redux</p></div></div>
          <h1 className={`${isDarkMode ? "text-white" : "text-black"} text-3xl font-local font-bold tracking-tight`}>Project Title</h1>
          <p className={`text-gray-400 text-base font-inter leading-tight text-justify`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae inventore iste delectus aperiam vero sequi! Quisquam aliquam blanditiis quis. </p>
        </div>
        </div>

    </>
  )
}
export {SkillsCard, ProjectsCard};