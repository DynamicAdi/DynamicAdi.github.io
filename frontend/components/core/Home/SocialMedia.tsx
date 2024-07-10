import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/common/ThemeProvider";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiGithubFill,
  RiMailLine,
  RiDribbbleLine,
} from "react-icons/ri";

function SocialMedia() {
  const { isDarkMode } = useTheme();
  const social = [
    {
      id: "Twitter",
      color: "bg-black",
      link: "https://x.com/Modern_Coder",
      Icon: RiTwitterXLine,
    },
    {
      id: "Linkedin",
      color: "bg-blue-600",
      link: "https://linkedin.com/in/DevAdarsh",
      Icon: RiLinkedinFill,
    },
    {
      id: "Github",
      color: "bg-orange-700",
      link: "https://github.com/DynamicAdi",
      Icon: RiGithubFill,
    },
    {
      id: "Whatsapp",
      color: "bg-green-500",
      link: "https://wa.me/+919484025507",
      Icon: RiWhatsappLine,
    },
    {
      id: "Instagram",
      color: "bg-pink-500",
      link: "https://instagram.com/Tech_versatile",
      Icon: RiInstagramLine,
    },
    {
      id: "Gmail",
      color: "bg-red-500",
      link: "mailto:adarshpanditdev@gmail.com",
      Icon: RiMailLine,
    },
    {
      id: "Dribbble",
      color: "bg-pink-600",
      link: "",
      Icon: RiDribbbleLine,
    }
  ];
  return (
    <div className={`w-full lg:h-full h-auto`}>
      <ul className={`list-none flex lg:flex-nowrap lg:gap-2 lg:h-full h-[4rem] w-full flex-wrap gap-3`}>
        {social.map((tab, index: number) => (
          <a
            key={index}
            href={`${tab.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-full w-1/6 rounded-2xl ${
              isDarkMode ? "bg-foreground-dark" : "bg-gray-200"
            } flex justify-center items-center active:scale-50 
            
            hover:${
                  tab.id === "Twitter" ? "bg-black"
                : tab.id === "Linkedin" ? "bg-blue-600"
                : tab.id === "Github" ? "bg-orange-700" 
                : tab.id === "Whatsapp" ? "bg-green-500"
                : tab.id === "Instagram" ? "bg-pink-600"
                : tab.id === "Gmail" ? "bg-red-500"
                : tab.id === "Dribbble" ? "bg-pink-400" 
                : 
                "Select tab"
            } transition-all ease-bounce group`}
          >
            <li>
              <tab.Icon
                className={`text-3xl lg:text-5xl ${
                  isDarkMode ? "text-white" : "text-black"
                } group-hover:text-white`}
              />
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
