import { wreen_action } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 py-10 w-full bg-primary/50 relative after-overlay after:bg-dark/90 after:z-10">
        <Image src={wreen_action} alt='Wreen Production Prop' fill={true} className="top-0 left-0 object-cover z-0" />
        <div className="container relative mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] py-2 gap-4 z-20">
          <ul className="flex flex-col">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl py-2">SiPT<span className="text-red-500">.</span></h2>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1">SiPT is the world&apos;s biggest meeting point for [confidential won&apos;t-say] writers and producers to exchange ideas and discover talents</li>
          </ul>
          <ul className="flex flex-col sm:justify-self-center sm:pl-8">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl py-2">Quick Links</h2>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/'} className="text-inherit">Home</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/about'} className="text-inherit">About</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/scripts'} className="text-inherit">Scripts</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/contact'} className="text-inherit">Contact</Link></li>
          </ul>
          <ul className="flex flex-col sm:justify-self-center sm:pl-8">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl py-2">Company</h2>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/legal'} className="text-inherit">Legal</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/privacy-policy'} className="text-inherit">Privacy Policy</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/term-of-service'} className="text-inherit">Terms of Service</Link></li>
            <li className="text-xs sm:text-sm md:text-base text-white opacity-70 py-1"><Link href={'/cookie-policy'} className="text-inherit">Cookie Policy</Link></li>
          </ul>
        </div>
          <small className="absolute z-30 left-0 bottom-4 w-full text-center text-white opacity-80">Copyright &copy; {new Date().getFullYear()}. SiPT Ltd. All Rights Reserved</small>
    </footer>
  )
}
