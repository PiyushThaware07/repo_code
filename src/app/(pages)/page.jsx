"use client"
import React from 'react'
import Link from 'next/link'
// FONT
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] })
// ICONS
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiBookMarkedLine } from "react-icons/ri";
import { LuHardDriveDownload } from "react-icons/lu";


export default function page() {
    return (
        <div className="bg-black">
            {/* Navigation */}

            {/* Content */}
            <main className="p-6 w-full max-w-7xl mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:p-10 max-w-7xl mx-auto'>
                    {
                        new Array(5).fill(null).map((_, index) => (
                            <div key={index} className="border-[1.5px] border-white/10 p-5 rounded-2xl min-h-[180px]">
                                <h1 className='text-indigo-600 text-xs font-medium'>24 Jan 2024</h1>
                                <h1 className='text-white text-sm text-justify'>Rapidly build modern websites without ever leaving your HTML.</h1>
                                <p className='text-white/50 text-xs my-2'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
                                <Link href="/routing" className='text-xs font-medium text-indigo-600'>Read more</Link>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}
