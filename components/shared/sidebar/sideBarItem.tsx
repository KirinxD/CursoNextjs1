"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX } from "react";

interface props{
    path:string,
    text:string,
    icon: JSX.Element;
    subTitle:string
}

export const SideBarItem = ({path,text,icon,subTitle}:props) => {
  const pathMethod=usePathname()
  return (
    <Link href={path} className={`w-full px-1 inline-flex space-x-2 items-center border-b border-slate-700 py-2 hover:bg-white/5 transition ease-linear duration-150 ${pathMethod===path && "bg-blue-700"}`}>
      <div>
        {icon}    
      </div>
      <div className="flex flex-col">
          <span className="text-lg font-bold leading-5 text-white">{text}</span>
          <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </Link>
  )
}
