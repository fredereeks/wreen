"use client"

import { ScriptCard } from '@/components'
import React, { useEffect, useState } from 'react'

export default function ScriptList({ data }) {
    const [allScripts, setAllScripts] = useState(data)
    const [selectedScripts, setSelectedScripts] = useState(data)
    const [selected, setSelected] = useState('All')

    const handleSort = genre => {
        if (genre === "All") {
            setSelectedScripts(prev => ([...allScripts]))
            setSelected('All')
        }
        else {
            setSelectedScripts(prev => (allScripts.filter(script => script.genre === genre)))
            setSelected(genre)
        }
    }

    useEffect(() => {
        setAllScripts(prev => ([...allScripts]))
        //eslint-disable-next-line
    }, [])

    return (
        <section className="bg-darker px-4 pt-20 min-h-screen relative after-overlay after:bg-dark/40 after:bg-gradient-to-b after:bg-from-darker/80 after:via-dark/80 after:to-darker">
            <video autoPlay={true} controlsList='true' loop={true} controls={true} className="overlay object-cover">
                <source src="/videos/wreen_videobg3.mp4" type="video/mp4" />
            </video>
            <div className="container mx-auto flex flex-col gap-5 py-5 relative z-20 overflow-x-hidden">
                <div className="col-span-2 flex items-center justify-center gap-2 mx-auto py-5">
                    <button onClick={() => handleSort('All')} key={286} className={`${selected === 'All' ? 'bg-dark text-white': 'bg-slate-100 text-primary hover:bg-dark hover:text-white'} rounded-[2rem] py-2 px-5 cursor-pointer text-xs sm:text-sm`}>All</button>
                    {
                        [...new Set(data?.map((item, i) => item.genre))].map((genre, i) => <button onClick={() => handleSort(genre)} key={i} className={`${selected === genre ? 'bg-dark text-white': 'bg-slate-100 text-primary hover:bg-dark hover:text-white'} rounded-[2rem] py-2 px-5 cursor-pointer text-xs sm:text-sm`}>{genre}</button>)
                        // data?.map(({id,genre}, i) => (
                        //     <button onClick={() => handleSort(genre)} key={id} className={`${selected === genre ? 'bg-dark text-white': 'bg-slate-100 text-primary hover:bg-dark hover:text-white'} rounded-[2rem] py-2 px-5 cursor-pointer text-xs sm:text-sm`}>{genre}</button>
                        // ))
                    }
                </div>
                <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 justify-center">
                    {
                        selectedScripts?.map(script => (
                            <ScriptCard key={script.id} {...script} />
                        ))
                    }
                    {/* {
                        selectedScripts.map(script => (
                            <ScriptCard key={script.id} {...script} />
                        ))
                    } */}
                </div>
            </div>
        </section>
    )
}
