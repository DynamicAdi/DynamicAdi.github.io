import React from "react";
import { useTheme } from "../common/ThemeProvider";
import { PiDownloadLight } from "react-icons/pi";
import Boxes from "../core/Home/boxes";
import About from "../core/Home/About";
import Testmonials from "../core/Home/Testmonials";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Quotes } from "../core/Home/quotes";
import SocialMedia from "../core/Home/SocialMedia";
import Loader from "../common/Loader";


function Home() {
  const { isDarkMode } = useTheme();
  const {quote, author, loading} = Quotes();
  return (
    <div className="w-full h-full rounded-2xl flex flex-col lg:justify-between justify-normal py-2 px-2 gap-3">
      <div
        className={`flex w-full h-[55%] gap-3 justify-start items-start lg:flex-row flex-col`}
      >
        <Boxes />
        <About />
      </div>
      <div className={`flex w-full lg:h-[45%] gap-3 lg:flex-row flex-col-reverse`}>
        <Testmonials />
        <div className={`lg:w-2/3 w-full flex flex-col gap-3 `}>
        <div className={`w-full lg:h-1/2 h-[5rem]`}>
          <SocialMedia />
        </div>
        <div className={`w-full lg:h-[12rem] h-full flex gap-3 lg:justify-normal justify-between  flex-col lg:flex-row`}>
          <div className={`lg:w-3/4 w-full lg:h-full`}>
          <div
                className={`w-full lg:h-full h- ${
                  isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-300"
                } rounded-2xl relative overflow-hidden px-3 p-8 pb-2`}
              >
                <div
                  className={`absolute left-0 top-0 z-10 bg-black dark:bg-white dark:text-black dark:font-medium text-white cursor-default px-3 text-base font-inter font-normal flex justify-center items-center gap-1 rounded-br-xl`}
                >
                  <h2>Random Quotes</h2>
                </div>
                {loading ? (
                  <h1 className="font-inter font-bold text-center text-3xl"><Loader /></h1>
                  
                  ) : (<>
                <div
                  className={`flex gap-1 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <RiDoubleQuotesL />
                  <h2
                    className={`w-full h-full text-lg dark:font-light leading-tight font-medium`}
                    >
                    {quote}
                  </h2>
                </div>
                <h1 className={`mt-10 font-medium font-source ${isDarkMode ? 'text-white' : 'text-black'}`}>- By {author}</h1>
                  </>)}
              </div>
          </div>
          <div className={`lg:w-1/4 w-full lg:h-full h-[8rem] cursor-pointer hover:text-white active:scale-75 transition-all hover:bg-green-500 rounded-xl flex flex-col justify-center items-center ${
                isDarkMode
                  ? "text-white bg-foreground-dark"
                  : "text-black bg-gray-300"
              }`}>
              <PiDownloadLight className={`text-4xl`} />
              <h2 className={`font-source font-medium text-2xl `}>
                Download CV
              </h2>
          </div>

        </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
