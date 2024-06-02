import React from 'react'
import { useTheme } from '../common/ThemeProvider';
import { PiQuotesLight, PiPlusBold } from "react-icons/pi";
import useEmblaCarousel from 'embla-carousel-react'

function Testmonials() {
    const { isDarkMode } = useTheme();
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false, align: "center", containScroll: "keepSnaps" });
  
    return (
    <div
    className={`lg:w-1/2 w-full h-full p-3 ${
      isDarkMode ? "dark:bg-foreground-dark" : "bg-gray-300"
    }  rounded-2xl overflow-hidden relative`}>

    <div className={`absolute right-0 top-0 z-10 ${isDarkMode ? "bg-white text-black font-semibold" : "bg-black text-white "} cursor-pointer px-3 text-base font-source font-normal flex justify-center items-center gap-1 rounded-bl-xl`}> <h2>Add yours</h2><PiPlusBold /></div>

    <div className="overflow-hidden w-full h-full" ref={emblaRef}>
      
      
      <div className="w-full h-full">
     <div className={`flex justify-start items-center w-full h-1/4 p-2 px-0 gap-2`}>
      <div className={`w-12 h-12 rounded-full bg-center`}>
        <img src="https://source.unsplash.com/smiling-woman-wearing-white-and-black-pinstriped-collared-top-QXevDflbl8A" alt="icon" className="w-full h-full bg-center rounded-full object-cover" />
      </div>
      <div className={`h-full w-1/2`}>
        <h1 className={`font-local font-bold text-2xl leading-7 ${isDarkMode ? "dark:text-white": "text-black"}`}>John Doe</h1>
        <p className={`font-local font-light text-sm tracking-wide ${isDarkMode ? "dark:text-gray-100": "text-black"}`}>UI/UX Designer</p>
      </div>
     </div>

      <div className={`flex justify-start items-center mt-2`}>
       <PiQuotesLight className={`${isDarkMode ? "text-white" : "text-black"} text-4xl rotate-180`} />
      </div>
      <div className={`flex justify-center items-center`}>
       <p className={`font-local font-normal ${isDarkMode ? "text-white font-thin" : "text-black"} text-lg leading-snug text-left`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
     </div>


      </div>




   </div>
  )
}

export default Testmonials