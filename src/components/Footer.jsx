import { wreen_action } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 py-10 w-full bg-primary/50 relative after-overlay after:bg-sky-600/50 after:z-10">
        <Image src={wreen_action} alt='Wreen Production Prop' fill={true} className="top-0 left-0 object-cover z-0" />
        <div className="container mx-auto flex flex-col py-2 relative z-20">

        <small className="text-center text-white opacity-80">&copy; {new Date().getFullYear()}. Wreen. All Rights Reserved</small>
        </div>
    </footer>
  )
}
