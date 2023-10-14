'use client'
import Aos from 'aos'
import React from 'react'

export default function AosProvider({children}) {
    React.useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true
        })
    },[])
  return (
    <>
    {children}
    </>
  )
}
