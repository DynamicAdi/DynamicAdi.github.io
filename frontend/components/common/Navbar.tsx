"use client"
import React from "react";
import { useTheme } from "./ThemeProvider";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="w-full flex justify-between items-center p-0 lg:px-10">
      <h2 className="font-local font-normal text-4xl">LOGO</h2>
      <div className={`w-20 h-10 ${isDarkMode ? "bg-blue-950/90" : "bg-sky-600/85"} rounded-3xl relative p-3 cursor-pointer`} onClick={toggleTheme}>
        <div className={`absolute transition-all ease-bounce duration-300 inset-0 w-8 h-8 top-1 flex justify-center items-center ${isDarkMode ? `left-1` : 'left-11'} bg-white rounded-full`}>
          {isDarkMode ? <IoMoon className="text-gray-500 text-2xl" /> : <IoSunny className="text-yellow-500 text-2xl" />}
        </div>
      </div>
    </div>
  );
}
