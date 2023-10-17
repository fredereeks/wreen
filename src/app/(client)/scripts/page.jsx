import { wreen_catvideo } from '@/assets/images'
import { ScriptCard } from '@/components'
import { scripts } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main className="relative after-overlay">
      <section className="bg-darker px-4 pt-20 min-h-screen relative after-overlay after:bg-dark/40 after:bg-gradient-to-b after:bg-from-darker/80 after:via-dark/80 after:to-darker">
        <video autoPlay={true} controlsList='true' loop={true} controls={true} className="overlay object-cover">
          <source src="/videos/wreen_videobg3.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto flex flex-col gap-5 py-5 relative z-20 overflow-x-hidden">
          <div className="col-span-2 flex items-center justify-center gap-2 mx-auto py-5">
            {
              ["Action", "Comedy", "Documentary", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science", "Fiction", "Thriller"].map((genre, i) => (
                <button key={i} className="bg-slate-100 text-primary hover:bg-dark hover:text-white rounded-[2rem] py-2 px-5 cursor-pointer text-xs sm:text-sm">{genre}</button>
              ))
            }
          </div>
          <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 justify-center">
            {
              scripts.map(script => (
                <ScriptCard key={script.id} {...script} />
              ))
            }
            {
              scripts.map(script => (
                <ScriptCard key={script.id} {...script} />
              ))
            }
          </div>
          {/* <div className="flex flex-col justify-center gap-4">
            <h2 className="text-sky-50 text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium sm:text-light leading-loose max-w-lg">We make Talent Exhibition and Discovery Easy</h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-sky-50 text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium sm:text-light leading-loose max-w-lg">We make Talent Exhibition and Discovery Easy</h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-sky-50 text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium sm:text-light leading-loose max-w-lg">We make Talent Exhibition and Discovery Easy</h2>
          </div> */}

        </div>
      </section>
    </main>
  )
}
