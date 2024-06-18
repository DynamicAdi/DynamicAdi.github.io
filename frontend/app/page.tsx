"use client";
import Navbar from "@/components/common/Navbar";
import { useTheme } from "@/components/common/ThemeProvider";
import Contentpanel from "@/components/main/Contentpanel";
import Sidepane from "@/components/main/Sidepane";
import { inter, source, local } from "@/public/utils/fonts";
import { useState } from "react";
import { PiCoffeeLight, PiDatabaseLight, PiBookLight, PiPhoneLight, PiHashLight} from 'react-icons/pi';



export default function Home() {
  const {isDarkMode} = useTheme();
  const tabs = [
    {name: "Home", color: "orange-400", icon: PiCoffeeLight},
    {name: "Projects", color: "purple-600", icon: PiDatabaseLight},
    {name: "Skills", color: "sky-500", icon: PiHashLight},
    {name: "Blogs", color: "yellow-400", icon: PiBookLight},
    {name: "Contact", color: "teal-500", icon: PiPhoneLight},
  ]
  const[opened, setOpen] = useState(tabs[0].name);
  const[color, setColor] = useState<string>(tabs[0].color);

  return (
    <main className={`w-screen lg:h-screen md:h-screen h-[260vh] ${inter.variable} ${source.variable} ${local.variable} ${isDarkMode ? "dark:bg-dark" : "bg-light"} p-4 flex justify-center items-center flex-col gap-4`}>
    <Navbar />
  <div className="w-full h-full mt-6 lg:mt-0 flex justify-between items-end gap-3 flex-col lg:flex-row">
    <Sidepane opened={opened} setOpen={setOpen} color={color} setColor={setColor} tabs={tabs} />
    <Contentpanel opened={opened} setOpen={setOpen} color={color} setColor={setColor} tabs={tabs} />
  </div>
</main>
  );
}
