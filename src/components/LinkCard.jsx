"use client"
import React, {useEffect, useState} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from "next/navigation";


const LinkCard = ({title, url, sublinks, fixed}) => {
    const location = usePathname();
    const [activeLink, setActiveLink] = useState(false);
    useEffect(() => {
        location === url ? setActiveLink(true) : setActiveLink(false);
        // console.log({location, url, title, activeLink})
        return () => {
            setActiveLink(false);
        } 
    },[location, url, title]);

    
    if(sublinks.length > 0){
        return(
            <span className={`group relative w-full md:w-max border-b-2 ${activeLink ? 'bg-primary' : 'border-b-white'} hover:border-b-slate-700 p-4 hover:bg-primary z-50 text-slate-700 text-md`}><Link className='flex gap-1 items-center' href={url}>{title} <FaCaretDown className='text-slate-700 mt-1 rotate-0 text-xs font-extralight' /></Link>
                <div className="dropdown absolute group-hover:max-h-max max-h-0 overflow-hidden z-40 flex flex-col left-0 top-full min-w-max w-full md:max-w-[20rem] bg-white">
                    {sublinks.map(({id,url,title}) => (<Link key={id} href={url} className={`relative w-full border-b-2 ${activeLink ? 'bg-primary' : 'border-b-white'} hover:border-b-slate-700 px-4 py-3 hover:bg-primary text-slate-700 text-md`}>{title}</Link>))}
                </div>
            </span>
        )
    }
    else return (<Link href={url} className={`overflow-hidden relative w-full md:w-max hover:before:transiton-all before:md:duration-300 before:md:absolute before:md:bottom-0 before:md:-left-full before:md:h-[2px] before:md:-rounded[2rem] before:md:bg-primary before:md:w-0 before:md:-translate-x-1/2 hover:md:before:w-[30%] hover:md:before:left-1/2 ${activeLink ? 'text-primary' : 'text-slate-400 border-b-white'} bg-white ${fixed ? 'text-primary' : 'text-slate-400 border-b-white'} md:bg-transparent py-2 px-5 md:px-4 hover:text-primary text-sm`}>{title}</Link>)
}

export default LinkCard