import Image from 'next/image'
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function ScriptCard({ title, author, image, category, rating, totalRating, price }) {
    return (
        <aside className='flex gap-2 items-center p-2 bg-white rounded-md shadow-dark/20 hover:shadow-dark/40'>
            <div className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 flex-shrink-0 rounded-md overflow-hidden relative">
                <Image src={image} alt={title} className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 rounded-md object-cover" fill={true} />
            </div>
            <div className="flex-1 flex flex-col">
                <h3 className="text-xs sm:text-base font-semibold leading-relaxed text-dark truncate line-clamp-1 whitespace-pre-wrap">{title}</h3>
                <div className="flex gap-[.15rem] sm:gap-2 items-center flex-wrap md:flex-nowrap pr-4">
                    <span className="text-[.37rem] sm:text-[.5rem] bg-slate-200 dark:bg-slate-100 text-slate-400 dark:text-slate-700 font-semibold uppercase rounded-md text-center py-[.15rem] px-2 mr-1 w-max">{category}</span>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center">
                            {
                                new Array(parseInt(rating))?.fill('1').map((_, i) => <FaStar className='text-orange-400 text-[.45rem] sm:text-[.65rem]' key={i} />)
                            }
                            {
                                rating < 5 && new Array(5 - parseInt(rating))?.fill('1').map((_, i) => <FaStarHalfAlt className='text-orange-400 text-[.45rem] sm:text-[.65rem]' key={i} />)
                            }
                        </div>
                        <p className="text-[.5rem] sm:text-[.65rem] text-slate-400">({totalRating})</p>
                    </div>
                </div>
                <p className="text-red-500 font-medium text-[.45rem] sm:text-sm pt-1">${price.toLocaleString()}</p>
                <p className="text-[.45rem] sm:text-xs text-slate-400">{author}</p>
            </div>
        </aside>
    )
}
