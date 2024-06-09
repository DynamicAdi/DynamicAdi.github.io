import React from 'react'


function Tabs({tabs, opened, handleChange, isDarkMode}: {
    tabs: any,
    opened: string,
    handleChange: (name:string) => void
    isDarkMode: boolean
}) {
  return (
    <>
     <div className="w-full lg:h-12 h-auto flex lg:justify-end lg:items-center justify-start items-start">
            <div className='w-max h-auto flex lg:gap-3 gap-2 lg:justify-center lg:items-center justify-start items-start lg:pr-8 flex-wrap'>
              {tabs.map((tabs:any, index:number) => (
                <div onClick={() => handleChange(tabs.name)} className={`${tabs.name===opened ? isDarkMode ? tabs.colorDark : tabs.color : isDarkMode ? "bg-foreground-dark text-white" : "bg-gray-200"} w-max h-auto  rounded-lg text-center p-3 py-1.5 cursor-pointer`} key={index}><p className='font-local font-normal'>{tabs.name}</p></div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Tabs