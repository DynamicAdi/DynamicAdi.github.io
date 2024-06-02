import React from "react";
import { useTheme } from "../common/ThemeProvider";
import { PiDownloadLight, PiEyesLight } from "react-icons/pi";
import Boxes from "../core/boxes";
import About from "../core/About";
import Testmonials from "../core/Testmonials";

function Home() {
  const { isDarkMode } = useTheme();
  return (
    <div className="w-full h-full rounded-2xl flex flex-col justify-between py-2 px-2 gap-3">
      <div
        className={`flex w-full h-[55%] gap-3 justify-start items-start lg:flex-row flex-col`}
      >
      <Boxes />
      <About />
      </div>
      <div className={`flex w-full h-[45%] gap-3 lg:flex-row flex-col-reverse`}>
        <Testmonials />
        <div className={`flex lg:w-1/2 w-full h-full gap-3`}>
          <div
            className={`sideway lg:w-4/5 flex-col flex justify-start items-center gap-3 w-full`}
          >
            <div
              className={`flex w-full h-1/2 lg:h-[60%] ${
                isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-300"
              }  rounded-2xl`}
            ></div>
            <div
              className={`flex w-full h-1/2 lg:h-[40%] ${
                isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-300"
              }  rounded-2xl`}
            ></div>
          </div>
          <div
            className={`flex w-1/2 h-full rounded-2xl flex-col justify-between items-center gap-3`}
          >
            <div
              className={`cursor-pointer hover:text-white hover:bg-purple-600  w-full h-1/2 rounded-xl flex flex-col justify-center items-center ${
                isDarkMode
                  ? "text-white bg-foreground-dark"
                  : "text-black bg-gray-300"
              }`}
            >
              <PiEyesLight className={`text-3xl`} />
              <h2 className={`font-source font-medium text-2xl `}>View CV</h2>
            </div>
            <div
              className={`cursor-pointer hover:text-white hover:bg-green-500 w-full h-1/2 rounded-xl flex flex-col justify-center items-center ${
                isDarkMode
                  ? "text-white bg-foreground-dark"
                  : "text-black bg-gray-300"
              }`}
            >
              <PiDownloadLight className={`text-3xl`} />
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
