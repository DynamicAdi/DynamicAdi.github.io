import React from "react";

export default function Boxes() {

  return (
    <>
      <div
        className={`flex lg:w-[45%] w-full h-1/2 lg:h-full flex-wrap lg:gap-3 gap-2 justify-center items-center `}
      >
        <div
          className={`flex rounded-xl flex-col justify-center items-center p-3 w-[48%] h-[48%] bg-gradient-to-br from-orange-500 from-20% to-black/90 to-95% `}
        >
          <h1 className={`font-inter font-extrabold text-4xl lg:text-5xl text-white`}>
            5 Years
          </h1>
          <h3 className={`font-source font-medium text-gray-100 px-1 lg:text-left text-center text-2xl`}>
            Experience
          </h3>
        </div>
        <div
          className={`flex rounded-xl w-[48%] h-[48%] 
            flex-col justify-center items-center bg-gradient-to-br from-purple-700 from-20% to-black/90 to-95%
             `}
        >
          <h1 className={`font-inter font-extrabold text-4xl lg:text-5xl text-white`}>
            100+
          </h1>
          <h3 className={`font-source font-medium text-gray-100 px-1 lg:text-left text-center text-2xl`}>
            Development Projects
          </h3>
        </div>
        <div
          className={`flex rounded-xl w-[48%] h-[48%] flex-col justify-center items-center bg-gradient-to-br from-green-500 from-20% to-black/90 to-95%`}
        >
          <h1 className={`font-inter font-extrabold text-4xl lg:text-5xl text-white`}>
            10+
          </h1>
          <h3 className={`font-source font-medium text-gray-100 px-1 lg:text-left text-center text-2xl`}>
            Design Projects
          </h3>
        </div>
        <div
          className={`flex rounded-xl w-[48%] h-[48%] flex-col justify-center items-center bg-gradient-to-br from-yellow-500 from-20% to-black/90 to-95% `}
        >
          <h1 className={`font-inter font-extrabold text-4xl lg:text-5xl text-white`}>
            30+
          </h1>
          <h3 className={`font-source font-medium text-gray-100 px-1 lg:text-left text-center text-2xl`}>
            3D Models, Animations
          </h3>
        </div>
      </div>
    </>
  );
}
