import React from 'react'
import demo from "@/public/demopic.jpg";
import { useTheme } from '../common/ThemeProvider';
import BlogCard from '../core/blog/card';

function Blogs() {
  const {isDarkMode} = useTheme();
  const text = [1, 2, 3, 4, 5]
  return (
    <div>
    <h1 className={`px-4 font-inter font-bold text-5xl ${isDarkMode ? "text-white" : "text-black"}`}>Blog</h1>
    <div className={`w-full h-[35rem] mt-3 px-2 py-4 flex flex-wrap gap-4 overflow-scroll`}>
      {text.map(() => (
      <BlogCard 
      title={"Title of blog"}
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dicta."}
      author={"Adarsh Pandit"}
      date={"2021-07-01"}
      />
      ))}
    </div>
    </div>
  )
}

export default Blogs