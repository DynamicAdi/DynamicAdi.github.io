"use client";
import Navbar from "@/components/common/Navbar";
import { useTheme } from "@/components/common/ThemeProvider";
import Contentpanel from "@/components/main/Contentpanel";
import Sidepane from "@/components/main/Sidepane";
import { inter, source, local } from "@/public/utils/fonts";



export default function Home() {
  const {isDarkMode} = useTheme();
  return (
    <main className={`w-screen lg:h-screen md:h-screen h-[280vh] ${inter.variable} ${source.variable} ${local.variable} ${isDarkMode ? "dark:bg-dark" : "bg-light"} p-4 flex justify-center items-center flex-col gap-4`}>
    <Navbar />
  <div className="w-full h-full mt-6 lg:mt-0 flex justify-between items-end gap-3 flex-col lg:flex-row">
    <Sidepane />
    <Contentpanel />
  </div>
      {/* <div className="relative h-[100vh] z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-30 after:dark:from-purple-800 after:dark:opacity-80 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div> */}
    </main>
  );
}
