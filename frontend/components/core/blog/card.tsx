
import React from "react";
import Image from "next/image";
import demoImage from "@/public/demopic.jpg";
import { IoCalendarOutline, IoIdCardOutline } from "react-icons/io5";


const BlogCard = ({
  title,
  description,
  author,
  date,
}: {
  title: string;
  description: string;
  author: string;
  date: string;
}) => {
  return (
    <div className="bg-gray-200 w-[17rem] h-72 dark:bg-foreground-dark rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-105 relative">
      <div className="relative h-1/2 m-2">
        <Image
          src={demoImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute p-1.5 py-0 top-[40%] left-3.5 rounded-lg w-[90%] h-[55%] bg-white dark:bg-fore-upper backdrop-blur-lg">
 <h2 className="text-[1.6rem] font-local font-semibold text-black dark:text-white w-full overflow-hidden">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-tight">{description}</p>
        <div className="flex items-center mt-4">
          <div className=" flex flex-col justify-start items-start">
            <p className="text-sm font-medium text-gray-800 dark:text-white flex justify-center items-center gap-1">
            <IoIdCardOutline />  {author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-mono flex justify-center items-center gap-1"><IoCalendarOutline /> {date} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;