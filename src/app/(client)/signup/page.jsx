import React from 'react'
import Link from 'next/link'
import { TextInput } from '@/components'
import SignupForm from './SignupForm'

const handleSubmit = async (data) => {
  "use server"
  try {
    const firstname = data.get("firstname")?.valueOf();
    const lastname = data.get("lastname")?.valueOf();
    const email = data.get("email")?.valueOf();
    const country = data.get("country")?.valueOf();
    const state = data.get("state")?.valueOf();
    const password = data.get("password")?.valueOf();
    // 
    return {
      error: false,
      message: 'Hi! Thanks for your early interest. Unfortunately, this site is still under construction, hence, we are not admitting members yet.'
    }
  } catch (error) {
    return {
      error: true,
      message: 'Something went wrong...Please, try again'
    }
  }
}

export default function page() {
  return (
    <main className="bg-white relative after-overlay after:bg-gradient-to-b after:from-darker/80 after:via-darker/80 after:to-darker">
      <video autoPlay={true} controlsList='true' loop={true} controls={true} className="overlay object-cover">
        <source src="/videos/wreen_videohandwrite.mp4" type="video/mp4" />
      </video>
      <div className="absolute h-full w-[90%] md:w-[60%] -left-[5rem] md:left-[2rem] top-0 bg-white -skew-x-[10deg] sm:-skew-x-[10deg] z-40"></div>
      <section className="relative py-20 px-4 z-50">

        <div className="container mx-auto grid md:grid-cols-2 relative z-20">
          <div className="p-5 text-white relative">
            <div className="hidden md:flex h-8 bg-red-500 w-60 absolute top-[80%] left-3/4 lg:left-[100%]"></div>
            <SignupForm key={9200} handleSubmit={handleSubmit} />
          </div>
          <div className="py-20 flex flex-col justify-center gap-4">
            {/* <div className="flex flex-col justify-center text-white">
              <h2 className="text-5xl font-bold">All in One</h2>
              <h2 className="text-5xl font-bold text-sky-600">Script Exchange</h2>
              <h2 className="text-5xl font-bold">Drop Location</h2>
            </div>
            <p className="text-sky-50 opacity-50 text-sm font-light leading-loose max-w-md">Fleen is the world&apos;s biggest meeting point for script writers and buyers to connect in a secure, seamless and purposeful manner for an exchange of talent and ideas for money and discovery</p> */}
          </div>
        </div>
      </section>
    </main>
  )
}
