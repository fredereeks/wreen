"use client"

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { IoSearchOutline } from "react-icons/io5"
import LinkCard from './LinkCard';
import { headerLinks } from '@/data';
import { usePathname } from 'next/navigation';

export default function Header() {

    const [navShow, setNavShow] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const [fixed, setFixed] = useState(false);
    const location = usePathname();
    const headerRef = useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setFixed(false);
            window.scrollTo(0, 0)
            setNavShow(false);
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0,0);
        setNavShow(false)
        //eslint-ignore-next-line
    },[location])

    return (
        <header ref={headerRef} className={`fixed flex flex-col py-2 px-5 w-full top-0 left-0 z-[999] ${fixed || navShow ? 'bg-white shadow-md shadow-primary/10' : 'bg-transparent'}`}>
            <div className="container w-full mx-auto flex flex-row gap-2 sm:gap-3 items-center sm:justify-between">
                <Link href="/" className="flex items-center py-2">
                    <h1 className="text-sky-500 text-2xl sm:text-3xl w-max font-bold">S<span className={`${fixed ? 'text-dark': 'text-slate-300'}`}>i</span>PT<span className={`${fixed ? "text-red-500": "text-slate-300"}`}>.</span></h1>
                </Link>
                <nav className={`absolute z-[990] left-0 md:left-0 overflow-hidden md:relative flex-1 flex flex-col md:flex-row md:items-center shadow-md transition-all duration-300 ${navShow ? 'max-h-[1000%] top-full md:top-0' : 'max-h-0 md:max-h-[1000%] -top-[130%]'} md:top-0 w-screen md:w-max md:shadow-none bg-white md:bg-transparent md:mx-0`}>
                    <ul className="list-none flex-1 flex flex-col md:flex-row md:items-center md:justify-center gap-0 md:gap-4 px-0">
                        {headerLinks.map((link) => (
                            <LinkCard fixed={fixed} key={link.id} {...link} />
                        ))}
                        <Link href="/login" className="relative flex gap-2 items-center self-center md:rounded-lg w-full md:w-max md:ml-5 px-5 md:px-7 py-2 h-max bg-primary text-white text-sm">Login</Link>    
                    </ul>
                </nav>
                <aside className="ml-auto md:w-max flex gap-2 items-center">
                  <div className={`w-full md:w-max ${searchShow ? 'overflow-hidden max-h-[1000%]' : 'max-h-0 overflow-hidden md:overflow-visible md:max-h-[100%]'}`}>
                      <form action="" className="text-white rounded-md p-2 flex gap-2 items-center">
                          <button type="submit" className="rounded-full text-slate-300 bg-transparent grid place-items-center cursor-pointer">
                              <IoSearchOutline className="text-white text-sm sm:text-base opacity-50" />
                          </button>
                          <input type="search" placeholder={"Search for a Script..."} required className="placeholder:font-light outline-none border-0 text-slate-400 text-sm flex-1 bg-transparent font-medium placeholder:text-slate-400 pr-2" />
                      </form>
                  </div>
                  <div className="relative md:hidden flex gap-2 items-center pr-4 md:p-1">
                      <div className="p-1 cursor-pointer" onClick={() => setSearchShow(prev => !prev)}>
                          <IoSearchOutline className={`text-slate-400 text-base`} />
                      </div>
                      <div className="relative py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[20px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                          <div className={`relative h-[2px] w-full ${navShow ? 'bg-transparent' : 'bg-gray-400 rounded-lg'} ${navShow ? 'before:rotate-[40deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-gray-400 rounded-lg before:absolute before:z-10 ${navShow ? 'after:rotate-[-40deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-gray-400 rounded-lg after:absolute after:z-10`}></div>
                      </div>
                  </div>
                </aside>
            </div>
        </header>
    )
}
