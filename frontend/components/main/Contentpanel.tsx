import React from 'react'
import { useTheme } from '../common/ThemeProvider'
import dynamic from 'next/dynamic';
import Loader from '../common/Loader';

const Home = dynamic(() => import('../pages/Home'), {loading: () => <Loader />, ssr: true});
const Skills = dynamic(() => import('../pages/Skills'), {loading: () => <Loader />, ssr: true});
const Projects = dynamic(() => import('../pages/Projects'), {loading: () => <Loader />, ssr: true});
const Blogs = dynamic(() => import('../pages/Blogs'), {loading: () => <Loader />, ssr: true});
const ContactForm = dynamic(() => import('../pages/Contacts'), {loading: () => <Loader />, ssr: true});

function Contentpanel({opened, setOpen, color, setColor, tabs}: {
    opened: string,
    setOpen: React.Dispatch<React.SetStateAction<string>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    tabs: {name: string, color: string, icon: any}[]
}) {
  const {isDarkMode} = useTheme();

const displayTabs:any = () => {
  switch (opened) {
    case "Home":
      return <Home />
      
      case "Skills":
        return <Skills />
      
      case "Projects":
        return <Projects />
      
      case "Blogs":
        return <Blogs />

      case "Contact":
        return <ContactForm />
 
    default:
      break;
  }

}
  return (
    <div className={`rounded-3xl w-full h-full ${isDarkMode ? "dark:bg-upper-dark" : "bg-upper-light"} p-2`}>
      {/* <Home />
      {/* <Skills />
      <Projects />
      <Blogs />
      <ContactForm /> */}
      {displayTabs()}
    </div>
  )
}

export default Contentpanel