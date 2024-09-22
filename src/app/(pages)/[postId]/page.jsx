import React from 'react';
// ICONS
import { TfiPlus } from "react-icons/tfi";
// COMPONENTS
import CodeEditor from '@/app/components/CodeEditor';
import Breadcrumb from '@/app/components/Breadcrumb';


export default function page() {
    return (
        <div className="p-10 ">
            <Breadcrumb/>
            <div className="border-[1.3px] border-white/10 p-6 relative">
                <TfiPlus className="absolute -top-2 -left-2 text-white" />
                <TfiPlus className="absolute -bottom-2 -right-2 text-blue-500" />
                <div className="h-full w-1 border-l-[1.3px] border-white/10 absolute top-0 left-1/4"></div>
                <div className="h-full w-1 border-l-[1.3px] border-white/10 absolute top-0 right-1/4"></div>

                {/* content */}
                <div className="my-10">
                    <div className="max-w-lg mx-auto flex flex-col items-center justify-center">
                        <h1 className="text-blue-500 tracking-widest text-[13px]">24 Jan 2024</h1>
                        <h1 className="text-xl text-center"># Behind the scenes of Vercel's infrastructure: Achieving optimal scalability and performance</h1>
                        <a href="" className="text-xs text-white/50 border-[1.4px] border-white/10 transition-all duration-200 bg-[#0A0A0A] rounded-full px-6 py-[10px] tracking-widest mt-5">24 min read</a>
                    </div>

                    <div className="max-w-2xl mx-auto mt-20">
                        <div className="flex flex-nowrap flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-[17px] font-medium -mb-5">Built-in Higher-Order Functions</h1>
                                <p className="text-[14px] text-justify text-white/50 tracking-wider">
                                    Vercel's platform provides speed, reliability, and the convenience of not having to worry about setting up and maintaining your own infrastructure. But what exactly goes on behind the scenes when we deploy our projects to Vercel, and what happens when you make a request to a site on the platform?
                                    This post will go behind the scenes, explaining how Vercel builds and deploys serverless applications for maximum scalability, performance, and fast iterations.
                                </p>
                                <CodeEditor />
                            </div>
                            <div className="flex flex-col gap-5">
                                <h1 className="text-[17px] font-medium -mb-5">Returning Functions from Functions</h1>
                                <p className="text-[14px] text-justify text-white/50 tracking-wider">
                                    Vercel's platform provides speed, reliability, and the convenience of not having to worry about setting up and maintaining your own infrastructure. But what exactly goes on behind the scenes when we deploy our projects to Vercel, and what happens when you make a request to a site on the platform?
                                    This post will go behind the scenes, explaining how Vercel builds and deploys serverless applications for maximum scalability, performance, and fast iterations.
                                </p>
                                <CodeEditor />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
