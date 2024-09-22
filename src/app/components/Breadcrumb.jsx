"use client"
// components/Breadcrumbs.js
import { usePathname, useRouter } from 'next/navigation';
// ICONS
import { GoHomeFill } from "react-icons/go";


const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path).map(path => decodeURIComponent(path)); 
  const router = useRouter();


  return (
     <div className='text-white/20 mb-5'>
            <ul className='flex flex-nowrap items-center'>
                <li><GoHomeFill className='text-xl cursor-pointer text-indigo-600' onClick={() => router.push("/")} /></li>
                {
                    pathNames.map((item, index) => (
                        <li key={index}>
                            <span className='text-sm font-semibold mx-2'>/</span>
                            <span className='text-sm capitalize cursor-pointer hover:text-indigo-600' onClick={() => router.push(`/${item}`)}>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
  )
};

export default Breadcrumbs;
