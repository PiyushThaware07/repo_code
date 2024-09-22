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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {
                        new Array(9).fill(null).map((_, index) => (
                            <div key={index} className="card p-6 border-[1.3px] border-white/10 rounded-xl ">
                                <h2 className={`text-[11px] tracking-widest text-blue-500 ${poppins.className}`}>24 Jan 2024</h2>
                                <h1 className={`text-[13px] tracking-widest font-medium text-white/90 text-justify ${poppins.className}`}>Routing Fundamentals & Set up your Enterprise trial.</h1>
                                <p className={`text-[12px] tracking-wide mt-5 text-white/50 text-justify ${poppins.className}`}>The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.</p>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <Link href="/2" className="mt-5 inline-block text-xs text-white/50 border-[1.4px] border-white/10 hover:bg-white/10 transition-all duration-200 bg-[#0A0A0A] rounded-full px-4 py-2 tracking-widest">Summary</Link>
                                    <Link href="" className="mt-5 inline-block text-xs text-white/50 border-[1.4px] border-white/10 hover:bg-white/10 transition-all duration-200 bg-[#0A0A0A] rounded-full px-4 py-2 tracking-widest">
                                        <LuHardDriveDownload className="text-lg" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}
