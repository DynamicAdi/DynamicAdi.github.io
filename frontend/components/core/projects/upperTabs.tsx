import React from "react";
import { RxExternalLink } from "react-icons/rx";

function Tabs({
  tabs,
  opened,
  handleChange,
  isDarkMode,
}: {
  tabs: any;
  opened: string;
  handleChange: (name: string) => void;
  isDarkMode: boolean;
}) {
  return (
    <>
      <div className="w-full lg:h-12 h-auto flex lg:justify-between lg:items-center justify-start items-start px-8 py-1.5 pl-4">
        <div
          className={`bg-blue-500/30 backdrop-blur-sm z-10 ${
            isDarkMode ? "text-blue-400" : "text-blue-500"
          } w-max h-auto hover:scale-90 ease-bounce transition-all rounded-lg text-center p-2 py-1.5 cursor-pointer`}
        >
          <a
            href=""
            className="font-local font-medium flex justify-center items-center gap-1.5"
          >
            View more on behance <RxExternalLink />
          </a>
        </div>

        <div className="w-max h-auto flex lg:gap-3 gap-2 lg:justify-center lg:items-center justify-start items-start flex-wrap">
          {tabs.map((tabs: any, index: number) => (
            <div
              onClick={() => handleChange(tabs.name)}
              className={`${
                tabs.name === opened
                  ? isDarkMode
                    ? `${tabs.text} ${tabs.colorDark}`
                    : `${tabs.text} ${tabs.colorDark}`
                  : isDarkMode
                  ? "bg-foreground-dark text-white"
                  : "bg-gray-200"
              } w-max h-auto hover:scale-90 ease-bounce transition-all rounded-lg text-center p-2 py-1.5 cursor-pointer`}
              key={index}
            >
              <p
                className={`font-local ${
                  tabs.name === opened ? "font-medium" : "font-normal"
                }`}
              >
                {tabs.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tabs;
