import React from "react";
import { IoCallOutline, IoMailOutline, IoSendOutline } from "react-icons/io5";
import { RiTwitterXLine,RiLinkedinFill, RiInstagramLine, RiWhatsappLine, RiGithubFill, RiBehanceFill } from "react-icons/ri";

function ContactForm() {

    const social = [
        {
        name: "Twitter",
        link: "https://x.com/Modern_Coder",
        userName: "@Modern_Coder",
        bgColor: "bg-black",
        icon: RiTwitterXLine,

    },
    {
        name: "Linkedin",
        link: "https://linkedin.com/in/DevAdarsh",
        userName: "@DevAdarsh",
        bgColor: "bg-blue-600",
        icon: RiLinkedinFill,
    },
    {
        name: "Github",
        link: "https://github.com/DynamicAdi",
        userName: "@DynamicAdi",
        bgColor: "bg-orange-800",
        icon: RiGithubFill,
    },
    {
        name: "Whatsapp",
        link: "https://wa.me/+919484025507",
        userName: "Adarsh Pandit",
        bgColor: "bg-green-500",
        icon: RiWhatsappLine,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/Tech_versatile",
        userName: "@Tech_versatile",
        bgColor: "bg-pink-600",
        icon: RiInstagramLine,
    },
    {
        name: "Behance",
        link: "https://x.com/Modern_Coder",
        userName: "@Modern_Coder",
        bgColor: "bg-blue-500",
        icon: RiBehanceFill,
    },
]
  return (
    <div className="w-full h-full">
      <h1 className="font-local text-4xl leading-none font-semibold text-center dark:text-white">
        Get in <span className="text-orange-400">Touch</span>!
      </h1>
      <p className="text-center text-xl font-local leading-none text-gray-500 dark:text-gray-300">
        Feel <span className="text-orange-400">Free</span> to get in{" "}
        <span className="text-orange-400">touch</span> with me!
      </p>
      <div className="w-full h-[90%] flex justify-between items-center">
        {/* First container starts here*/}
        <div className="w-2/3 h-full p-2">
          {/* inner container starts here*/}
          <div className="w-full h-full bg-gray-200 dark:bg-foreground-dark  rounded-2xl flex justify-between items-center">
            <div className="w-[55%] h-full p-4 flex justify-center items-start flex-col gap-4"> 
            <div>
            <h1 className="font-local font-black text-5xl dark:text-white">
                Let's
            <span className="text-orange-400">Talk</span>!
          </h1>
          <h2 className="text-xl font-medium dark:text-white">Note:</h2>
          <p className="text-base text-gray-500 dark:text-gray-300">Your details are only disclosed to me and its never shared with anyone else.</p>
          </div>

          <div className="email">
            <h1 className="font-local font-black text-4xl mb-3 dark:text-white">Email</h1>
            <div className="flex items-center gap-2">
            <IoMailOutline className="text-4xl text-orange-400 bg-gray-300 dark:bg-fore-upper p-1.5 rounded-full" />
            <a href="mailto:adarshpanditdev@gmail.com" className="text-xl text-gray-500 dark:text-gray-300 underline">adarshpanditdev@gmail.com</a>
            </div>
          </div>

          <div className="phone">
            <h1 className="font-local font-black text-4xl mb-3 dark:text-white">Phone</h1>
            <div className="flex items-center gap-2">
            <IoCallOutline className="text-4xl text-orange-400 bg-gray-300 dark:bg-fore-upper p-1.5 rounded-full" />
            <a href="tel:+919086345112" className="text-xl text-gray-500 dark:text-gray-300">+91 9086345112</a>
            </div>
          </div>
          

            </div>
            <div className="w-[45%] h-full">
                <form action="" className="w-full h-full flex justify-center items-center flex-col p-3">
                    <div className="w-full flex justify-end items-end gap-4 flex-col">
                        <input type="text" className="w-full font-local dark:text-white h-10 bg-gray-300 dark:bg-fore-upper rounded-lg p-2 border border-solid border-transparent outline-none  focus:border-orange-400 dark:placeholder:text-gray-400 placeholder:text-gray-400" placeholder="Name" />
                        <input type="email" className="w-full font-local dark:text-white h-10 bg-gray-300 dark:bg-fore-upper rounded-lg p-2 border border-solid border-transparent outline-none focus:border-orange-400 dark:placeholder:text-gray-400 placeholder:text-gray-400" placeholder="Email" />
                        <input type="tel" className="w-full font-local dark:text-white h-10 bg-gray-300 dark:bg-fore-upper rounded-lg p-2 border border-solid border-transparent outline-none focus:border-orange-400 dark:placeholder:text-gray-400 placeholder:text-gray-400" placeholder="Phone" />
                        <input type="text" className="w-full font-local dark:text-white h-10 bg-gray-300 dark:bg-fore-upper rounded-lg p-2 border border-solid border-transparent outline-none focus:border-orange-400 dark:placeholder:text-gray-400 placeholder:text-gray-400" placeholder="Subject" />
                        <textarea className="w-full font-local dark:text-white h-36 bg-gray-300 dark:bg-fore-upper rounded-lg p-2 border border-solid border-transparent outline-none focus:border-orange-400 dark:placeholder:text-gray-400 placeholder:text-gray-400 resize-none" placeholder="Your message"></textarea>
                    <button type="submit" className="flex gap-2 justify-center items-center text-lg py-1 p-2 bg-orange-400 text-white rounded-xl border-2 border-solid border-transparent hover:bg-transparent hover:border-orange-400 hover:text-black dark:hover:text-white">send <IoSendOutline /></button>
                    </div>
               
                </form>
            </div>

          </div>
        </div>



        {/* Second container starts here*/}
        <div className="w-1/3 h-full p-2">
          <div className=" w-full h-full flex justify-start flex-col items-center px-0 gap-2">
        {social.map((social, index) => (

    <div key={index} className={`w-full h-1/6 bg-gray-200 dark:bg-foreground-dark gap-3 rounded-xl flex justify-start items-center p-4 py-2 hover:bg-orange-400 dark:hover:bg-orange-400 group transition-all ease-out duration-500`}>
        <social.icon className="text-4xl dark:text-white text-black group-hover:text-white dark:group-hover:text-black" />
        <h1 className="text-2xl font-source font-medium dark:text-white dark:font-normal group-hover:text-white dark:group-hover:text-black">{social.userName}</h1>
        </div>
        ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
