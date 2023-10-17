'use client'
import Aos from 'aos'
import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function AosProvider({children}) {
    React.useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true
        })
    },[])
  return (
    <>
    <Toaster />
    {children}
    </>
  )
}
