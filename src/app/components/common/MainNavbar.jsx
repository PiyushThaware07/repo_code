import React from 'react';
import Link from "next/link";
// ICONS
import { IoIosArrowRoundForward } from "react-icons/io";


export default function MainNavbar() {
    return (
        <nav className="h-16 w-full sticky top-0 left-0 z-[99]">
            <div className="bg-black/70 border-b-[1.3px] border-b-white/15 backdrop-blur-md h-full w-full">
                <div className="top-0 left-0 h-full w-full flex flex-nowrap items-center px-5 relative max-w-7xl mx-auto">
                    <section className="w-full md:flex flex-nowrap items-center gap-10">
                        <Link href="/" className="flex flex-nowrap items-center gap-1">
                            <h1 className="text-2xl text-blue-500">#</h1>
                            <h1 className={` tracking-widest font-medium text-white`}>SnippetSage</h1>
                        </Link>
                        <div className="w-full md:flex flex-nowrap items-center justify-between gap-5">
                            <ul className="md:flex flex-nowrap items-center gap-7">
                                {/* <li>
                                    <a href="" className="text-[13px] tracking-wider text-white/30 hover:text-white/60">
                                        Showcase
                                    </a>
                                </li>*/}
                                <li>
                                    <Link href="" className="text-[13px] tracking-wider hover:text-white/60 text-blue-500 relative">
                                        <IoIosArrowRoundForward className="absolute -top-1 -right-3 text-md -rotate-45" />
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://piyushthaware.vercel.app" className="text-[13px] tracking-wider text-white/30 hover:text-white/60 relative">
                                        <IoIosArrowRoundForward className="absolute -top-1 -right-3 text-md -rotate-45" />
                                        Portfolio
                                    </Link>
                                </li>
                            </ul>
                            <a href="" className="text-xs text-white/50 border-[1.4px] border-white/10 hover:bg-white/10 transition-all duration-200 bg-[#0A0A0A] rounded-full px-6 py-[10px] tracking-widest">SignUp</a>
                        </div>
                    </section>
                </div>
            </div>
        </nav>
    )
}
