import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function ScriptCard({ id, title, author, image, genre, rating, totalRating, price }) {
    return (
        <Link href={`/scripts/${id}`} className='max-w-[21rem] w-full flex flex-col sm:flex-row gap-2 items-center overflow-hidden sm:p-2 bg-white rounded-md shadow-dark/20 hover:shadow-dark/70'>
            <div className="h-[5.5rem] w-full sm:w-[4.5rem] sm:h-full md:w-20 flex-shrink-0 overflow-hidden sm:rounded-md relative">
                <Image src={image} alt={title} className="object-cover" fill={true} />
            </div>
            <div className="flex-1 flex flex-col px-2 pt-0 pb-4 sm:p-1">
                <h3 className="text-sm sm:text-base font-semibold leading-relaxed text-dark truncate line-clamp-1 whitespace-pre-wrap">{title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-[.37rem] sm:text-[.5rem] bg-slate-200 dark:bg-slate-100 text-slate-400 dark:text-slate-700 font-semibold uppercase rounded-md text-center py-[.15rem] px-2 mr-1 w-max">{genre}</span>
                    <p className="text-red-500 font-medium text-xs sm:text-sm">${price.toLocaleString()}</p>
                </div>
                <div className="flex gap-[.15rem] sm:gap-2 items-center flex-wrap md:flex-nowrap pt-[.4rem] pb-1">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center">
                            {
                                new Array(parseInt(rating))?.fill('1').map((_, i) => <FaStar className='text-orange-400 text-[.6rem] sm:text-xs' key={i} />)
                            }
                            {
                                rating < 5 && new Array(5 - parseInt(rating))?.fill('1').map((_, i) => <FaStarHalfAlt className='text-orange-400 text-[.6rem] sm:text-xs' key={i} />)
                            }
                        </div>
                        <p className="text-[.6rem] sm:text-xs text-slate-400">({totalRating})</p>
                    </div>
                </div>
                <p className="text-[.6rem] sm:text-sm text-slate-400">{author}</p>
            </div>
        </Link>
    )
}
