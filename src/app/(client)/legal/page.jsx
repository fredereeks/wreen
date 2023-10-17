import Link from 'next/link'
import React from 'react'
import { MdWysiwyg } from 'react-icons/md'

export default function page() {
    return (
        <main className="py-20">
            <section className="pt-20 pb-4 px-4 bg-white">
                <div className="container mx-auto flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Legal Notices</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">The SiPT service, including all content provided on the SiPT service, is protected by copyright, trademark, trade secret or other intellectual property laws and treaties.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Legal Documents</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">Find everything you need to know about our legal agreements and campaign terms and conditions.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">SIPT Limited</h2>
                        <div className="flex flex-col gap-1">
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Client Agreement</p></Link>
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Director&apos;s Agreement</p></Link>
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>General Business Terms</p></Link>
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Partnership Agreement</p></Link>
                            {/* <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Payment Terms and Conditions</p></Link> */}
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Complaints Procedure for Clients</p></Link>
                            <Link href={`/legal`} className="group text-slate-400 text-sm sm:text-base leading-loose text-justify flex items-center gap-2"><MdWysiwyg className="text-inherit" /> <p className='group-hover:underline'>Complaints Procedure for Directors</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Copyrights</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">The copyrights in the content on our service are owned by many great producers and production companies, including SiPT. If you believe your or someone else&apos;s copyrights are being infringed upon through the SiPT service, let us know by completing the Copyright Infringement Claims form (www.sipt.com/copyrights).</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Trademarks</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">SiPT, the S Logo and its sonic Tudum ident are trademarks of SiPT, Inc.</p>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">Unless you have our permission, do not use the SiPT marks as your own or in any manner that implies sponsorship or endorsement by SiPT.</p>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">A product branded with the SiPT name or logo is a reflection of SiPT. Unless you are one of our licensees, we don&apos;t allow others to make, sell, or give away anything with our name or logo on it.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Patents</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">SiPT applications and services are covered by patents. For information on patents related to our services please visit www.SiPT.com/patents.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-dark font-bold text-xl sm:text-2xl md:text-3xl">Third Party Notices</h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-loose text-justify">SiPT applications, software development kits (SDKs) and other SiPT products may contain software available under open source or free software licenses (“Open Source Software”). The SiPT Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional information about Open Source Software, including required acknowledgements, license terms and notices, can be found below.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
