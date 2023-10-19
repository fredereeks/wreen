import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoChatbubble, IoShareSocial, IoThumbsUp } from 'react-icons/io5'
import { wreen_coffee_leaf, wreen_busylady, wreen_action, wreen_actionname, wreen_catvideo, wreen_laptop, wreen_outdoortype } from '@/assets/images'
import { scripts } from '@/data'
import { ScriptCard } from '@/components'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaSackDollar, FaStar } from 'react-icons/fa6'


const fetchScript = async (id) => {
    return scripts.find(script => script.id === Number(id))
}

export default async function page({ params: { id } }) {
    const data = await fetchScript(id);
    const images = [wreen_action, wreen_actionname, wreen_catvideo, wreen_laptop, wreen_outdoortype, wreen_busylady]
    const authorImage = images[Math.floor(Math.random() * images.length)]
    const relatedScripts = scripts.filter(el => el.genre === data.genre && Number(data.id) !== el.id);
    const otherScripts = relatedScripts.length < 4 ? scripts.filter(el => el.genre !== data.genre).slice(0,(4-relatedScripts.length)) : []

    return (
        <main className="bg-darker flex flex-col gap-4 py-20 min-h-screen relative after-overlay after:bg-gradient-to-b after:from-darker/80 after:via-darker/80 after:to-darker">
            <Image className="object-cover left-0 top-0 overlay" alt={"Coffee Cup under a Tree"} src={wreen_coffee_leaf} fill={true} />
            <section className="px-4 pt-20 pb-5">
                <div className="container mx-auto grid md:grid-cols-2 gap-4 relative z-20">
                    <div className="flex flex-col gap-4">
                        <div className="relative rounded-lg overflow-hidden h-80 md:h-full w-full">
                            <Image className="object-cover left-0 top-0 overlay" alt={"Coffee Cup under a Tree"} src={data.image} fill={true} />
                        </div>
                        <aside className="border-t border-t-slate-300/20 border-b border-b-slate-300/20 py-2 sm:px-2 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-primary font-bold text-3xl text-white grid place-items-center relative flex-shrink-0">
                                    <Image className="object-cover left-0 top-0 overlay" alt={"Coffee Cup under a Tree"} src={authorImage} fill={true} />
                                </div>
                                <div className="flex-1 flex flex-col p-2">
                                    <Link href={`/writer/82a34-234ad-234ya-7bu234`} className="text-primary text-base md:text-xl font-semibold">{data?.author}</Link>
                                    <Link href={`/scripts/writer/82a34-234ad-234ya-7bu234`} className="text-sky-50 opacity-90 text-[.65rem] sm:text-xs font-light leading-loose max-w-md">View all Scripts by this Writer</Link>
                                </div>
                            </div>
                            <button className="transition-all text-[.6rem] sm:text-xs rounded-sm bg-red-500 hover:bg-red-600 text-white py-1 md:py-3 px-2 md:px-4">Follow {data?.author.split(" ")[1] || data?.author.split(" ")[0]}</button>
                        </aside>
                    </div>
                    <div className="flex flex-col gap-3">
                        <aside className="flex flex-col gap-2">
                            <h2 className="text-sky-50 dark:text-slate-500 text-left text-3xl sm:text-4xl font-medium sm:text-light leading-tight pb-2 max-w-lg">{data?.title}</h2>
                            <div className="flex gap-[.15rem] sm:gap-2 items-center flex-wrap md:flex-nowrap pr-4">
                                <span className="text-sm sm:text-sm bg-red-500 dark:bg-slate-100 text-slate-50 dark:text-slate-700 font-semibold uppercase rounded-md text-center py-1 px-4 mr-1 w-max">{data?.genre}</span>
                                <div className="flex gap-2 items-center">
                                    <div className="flex items-center">
                                        {
                                            new Array(parseInt(data?.rating))?.fill('1').map((_, i) => <FaStar className='text-orange-400 text-xs sm:text-sm' key={i} />)
                                        }
                                        {
                                            data?.rating < 5 && new Array(5 - parseInt(data?.rating))?.fill('1').map((_, i) => <FaStarHalfAlt className='text-orange-400 text-xs sm:text-sm' key={i} />)
                                        }
                                    </div>
                                    <p className="text-xs sm:text-base text-slate-400">({data?.totalRating})</p>
                                </div>
                                <span className="text-lg sm:text-xl text-red-500 font-semibold uppercase rounded-md text-center py-1 px-4 mr-1 w-max">${data?.price}</span>
                            </div>
                            <p style={{ lineHeight: 1.8 }} className="text-slate-400 dark:text-slate-300 text-sm sm:text-base leading-loose text-justify pt-4">{data?.title} is a SiPT applications, software development kits (SDKs) and other SiPT products may contain software available under open source or free software licenses (“Open Source Software”). The SiPT Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional information about Open Source Software, including required acknowledgements, license terms and notices, can be found below.</p>
                        </aside>
                        <aside className="px-4 py-2 flex items-center justify-between gap-3 text-slate-300">
                            <button className="flex-1 flex items-center gap-2 py-2 px-4 rounded-md text-white text-xs sm:text-base bg-primary">
                                <FaSackDollar className='text-inherit text-xs' /> Buy
                            </button>
                            <button className="flex items-center gap-2 py-2 px-4 rounded-md text-xs sm:text-base bg-dark/80">
                                <IoChatbubble className='text-inherit text-xs' /> Comment
                            </button>
                            <button className="flex items-center gap-2 py-2 px-4 rounded-md text-xs sm:text-base bg-dark/80">
                                <IoShareSocial className='text-inherit text-xs' /> Share
                            </button>
                        </aside>

                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-col gap-5 py-5 px-4 relative z-20 overflow-x-hidden">
                <h2 className="border-b border-b-slate-300/20 py-2 text-sky-50 dark:text-slate-500 text-center sm:text-left text-3xl sm:text-4xl font-medium sm:text-light leading-loose max-w-lg">Other {data.genre} Scripts</h2>
                <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 justify-center">
                    {
                        relatedScripts.reverse().slice(0, 5).map(script => (
                            <ScriptCard key={script.id} {...script} />
                        ))
                    }
                    {
                        otherScripts.reverse().map(script => (
                            <ScriptCard key={script.id} {...script} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
