"use client"
// components/Breadcrumbs.js
import { usePathname, useRouter } from 'next/navigation';
import { TbHome } from "react-icons/tb";


const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path).map(path => decodeURIComponent(path)); 
  const router = useRouter();


  return (
    <nav className="flex mb-4">
      <ul className="flex flex-nowrap items-center gap-2">
        <li className="cursor-pointer hover:text-blue-500 text-[13px]" onClick={()=>router.push("/")}><TbHome className="text-xl" /></li>
        {
          pathNames.map((item,index)=>(
            <li key={index} className="text-sm capitalize flex flex-nowrap items-center gap-2"> 
            <h1 className="text-lg">/</h1>
            <h1 className="text-[13px] cursor-pointer hover:text-blue-500">{item}</h1>
            </li>
          ))
        }
        </ul>
    </nav>
  );
};

export default Breadcrumbs;
