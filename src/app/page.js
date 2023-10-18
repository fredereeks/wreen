import { wreen_actionname, wreen_busylady, wreen_coffee_leaf } from '@/assets/images'
import { ScriptCard } from '@/components'
import Counter from '@/components/Counter'
import { scripts } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { IoChatbubble, IoNewspaperOutline, IoPeopleOutline, IoShare, IoShareSocial, IoThumbsUp, IoVideocamOutline } from 'react-icons/io5'
import { FaChevronRight, FaClapperboard } from 'react-icons/fa6'
// import wreen_videobg2 from "@/assets/videos/wreen_videobg2.mp4"

export default function Home() {
  return (
    <main className="relative after-overlay">
      <section className="bg-darker px-4 pt-20 min-h-screen relative after-overlay after:bg-gradient-to-b after:from-darker/80 after:via-darker/80 after:to-darker">
        <video autoPlay={true} controlsList='true' loop={true} controls={true} className="overlay object-cover">
          <source src="/videos/wreen_videobg2.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto grid md:grid-cols-2 relative z-20">
          <div className="py-20 flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-center text-white">
              <h2 className="text-5xl font-bold">All in One</h2>
              <h2 className="text-5xl font-bold text-sky-600">Script Exchange</h2>
              <h2 className="text-5xl font-bold">Drop Location</h2>
            </div>
            <p className="text-sky-50 opacity-50 text-sm font-light leading-loose max-w-md">Fleen is the world&apos;s biggest meeting point for script writers and buyers to connect in a secure, seamless and purposeful manner for an exchange of talent and ideas for money and discovery</p>
            <div className="py-5 flex gap-3">
              <Link href="/login" className="w-max bg-sky-500 hover:bg-slate-700 rounded-full text-white text-sm font-bold flex items-center py-3 px-9">Get Started</Link>
              <Link href="/scripts/82934626" className="w-max hover:bg-slate-700 bg-sky-50 text-sky-500 rounded-full hover:text-white text-sm font-bold flex items-center py-3 px-9">Sample Script</Link>
            </div>
          </div>
          <div className="font-exhibition p-5 text-white relative">
            {/* <video controls className="overlay">
              <source src="/videos/wreen_videobg2.mp4" type="video/mp4" />
            </video> */}
            {/* <p className={`${titilium.className} font-bold text-3xl`}>Hello world using Inter font</p>
          <p style={exo2.style}>Hello world using Lora font</p>
          <p className={exo2.className}>Hello world using Source_Sans_3 font with weight 700</p>
          <p className={exo2.className}>My title in Great Vibes font</p>
          <p className={titilium.className}>My title in Great Vibes font</p> */}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white relative">
        <div className="container mx-auto grid grid-cols-3 gap-2 relative z-20 bg-white">
          {
            [
              [8234, <IoNewspaperOutline key={8234} className='text-xl sm:text-3xl md:text-4xl text-primary' />, "1,385", 'Scripts Sold'],
              [8235, <IoVideocamOutline key={8235} className='text-xl sm:text-3xl md:text-4xl text-primary' />, "2,171", 'Movie Produced'],
              [8236, <IoPeopleOutline key={8235} className='text-xl sm:text-3xl md:text-4xl text-primary' />, "7,409", 'Talents Admitted'],
            ].map(([id, icon, total, text], i) => (
              <aside key={id} className="flex flex-col items-center text-center sm:gap-1">
                <div className="w-10 sm:w-20 md:w-16 h-10 sm:h-20 md:h-16 rounded-lg grid place-items-center bg-primary/20">{icon}</div>
                {/* <h2 className="text-base sm:text-xl text-sky-800 font-bold">{total}</h2> */}
                <Counter key={id} className={'text-base sm:text-xl text-sky-800 font-bold'} end={total} speed={i === 2 ? 'fast' : 'slow'} tag={'+'} />
                <p className="text-xs sm:text-sm text-primary font-light">{text}</p>
              </aside>
            ))
          }
        </div>
      </section>
      <section className="py-20 bg-sky-500 relative px-4 overflow-hidden">
        <FaClapperboard key={8234} scale={5} className='overlay text-primary shadow-xl shadow-sky-600 rotate-[40deg] opacity-50 left-[20%]' />
        <div className="container mx-auto grid md:grid-cols-2 py-10 relative z-20">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-sky-50 text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium sm:text-light leading-loose max-w-lg">We make Talent Exhibition and Discovery Easy</h2>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start gap-4">
            <p className="text-sky-50 opacity-90 text-base font-light leading-loose max-w-md">We are changing how people make and collaborate on script writing by leveraging the power of the internet of humans</p>
            <div className="flex gap-3">
              <Link href="/signup" className="w-max bg-dark shadow-xl shadow-dark/30 hover:shadow-xl hover:shadow-dark/40 rounded-full text-white text-sm font-normal flex items-center py-3 px-6 md:px-9">Start for Free</Link>
              <Link href="/about" className="w-max shadow-xl hover:shadow-dark/40 bg-white border border-primary hover:border-sky-50 rounded-full text-dark text-sm font-normal flex items-center py-3 px-6 md:px-9">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-sky-50 relative px-4 overflow-x-hidden">
        <div className="container mx-auto flex flex-col gap-5 py-5 relative z-20">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-sky-700 text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium sm:text-light leading-loose max-w-xl mx-auto pt-4 pb-6">Our Featured Script</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-2">
            {
              scripts.slice(0, 8).map(script => (
                <ScriptCard key={script.id} {...script} />
              ))
            }
          </div>
          <Link href="/scripts" className="group flex justify-center items-center py-4 text-sm md:text-base text-primary w-max mx-auto px-5">See More <FaChevronRight className='group-hover:translate-x-2 ml-1 mt-[.1rem] text-xs transition-all duration-300' /></Link>
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
