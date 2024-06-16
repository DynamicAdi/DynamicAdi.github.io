import Image from 'next/image'
import React from 'react'
import demoImage from "@/public/demopic.jpg";
import { RxEyeOpen, RxGithubLogo } from 'react-icons/rx';

function ProjectCard() {
  return (
    <div className='relative w-64 h-60 bg-gray-200 dark:bg-foreground-dark rounded-xl overflow-hidden hover:overflow-visible group transition-none'>
        {/* Image */}
        <div className="absolute left-[2.30rem] bg-red-200 w-44 h-32 rounded-lg transition-all duration-300 ease-bounce group-hover:-translate-y-12">
        <Image
          src={demoImage}
          alt={"image"}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
              <div className='absolute inset-7 flex gap-3 group-hover:opacity-100 opacity-0 transition-opacity'>
      <a href="" className='bg-white/30 hover:scale-110 transition-all backdrop-blur-sm p-3 h-max rounded-lg flex justify-center items-center'>
        <RxGithubLogo className='text-3xl text-white' />
      </a>
      <a href="" className='bg-white/30 hover:scale-110 transition-all backdrop-blur-sm p-3 h-max rounded-lg flex justify-center items-center'>
        <RxEyeOpen className='text-3xl text-white font-black' />
      </a>
      </div>
        </div>

        {/* content */}

        <div className={`flex flex-col justify-start items-start gap-1 mt-24 h-36 w-full p-2 py-0 group-hover:translate-y-0 transition-all translate-y-12 overflow-scroll`}>  
            
        <div className={`flex gap-1 justify-start items-center flex-wrap`}>
        <div className={`h-4 w-auto rounded-md dark:bg-sky-300/20 bg-sky-300/40 p-2.5 flex justify-center items-center`}><p className={`text-sm dark:text-sky-300 text-sky-500 font-local`}>redux</p></div></div>
          <h1 className={`dark:text-white text-black text-2xl font-local font-bold tracking-tight`}>Project Title</h1>
          <p className={`text-gray-400 text-sm font-local`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae inventore iste delectus aperiam vero sequi! Quisquam aliquam blanditiis quis. </p>
        </div>
    </div>
  )
}

export default ProjectCard