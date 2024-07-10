import React from "react";
import { useTheme } from "../../common/ThemeProvider";
export default function About() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex lg:w-[55%] w-full lg:h-full h-1/2 rounded-2xl ${
        isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-200"
      } relative lg:overflow-hidden overflow-auto p-3 pb-6 lg:pb-3`}
    >

      <div
        className={`${isDarkMode ? "text-white" : "text-black"} relative z-20 text-left font-inter font-normal leading-tight text-xl `}
      >
      <h1 className={`text-2xl`}>
        Welcome to my creative space!
        <br />
        Hello, I&apos;m <span className="font-extrabold text-orange-600">Adarsh Pandit</span> from India, West Bengal.
      </h1>
          <br />
        <h2 className="text-lg font-local font-normal">
        A passionate
            <span className={`text-orange-600`}> Techie</span> dedicated to crafting unique experiences
            through my versatile skills. With immersion of<span className={`text-orange-600`}> 5 years </span>
            in Tech, I bring a dynamic blend of creativity and vizulization into
            reality.
            <br />
             Beyond the pixels and code, I&apos;m a Writer that
            enrich my creativity and perspective. I&apos;m always looking for
            new challenges and opportunities to <span className={`text-orange-600`}>learn</span> and <span className={`text-orange-600`}>grow</span>, and
            I&apos;m excited about the possibility of growth of my productivity.
        </h2>
      </div>
    </div>
  );
}
