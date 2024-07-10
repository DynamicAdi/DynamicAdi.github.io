import { useTheme } from '@/components/common/ThemeProvider'
import React from 'react'

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
        <div className={`w-[9.5rem] h-28 ${isDarkMode ? "bg-foreground-dark text-white": "bg-gray-200/50"} rounded-2xl flex flex-col justify-center items-center gap-2`}><img src={imgLink} alt='tech' className='w-1/2 h-1/2 bg-center object-contain'/> <h2 className='font-local font-medium text-xl'>{name}</h2></div>
      </div>
    </>
  )
}


export {SkillsCard};