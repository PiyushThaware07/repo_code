import Link from "next/link";
// ICONS
import { FcGoogle } from "react-icons/fc";


export default function page(){
    return (
        <div className="app_signin min-h-screen w-full flex flex-nowrap items-center justify-center">
<div className="w-[400px] border-[1.3px] border-white/10 bg-white/5 rounded-2xl p-10">
    <h2 className="capitalize text-white text-[13px] -mb-1">Welcome back!</h2>
    <h1 className="capitalize text-white text-[15px]">Login to your account</h1>
    <p className="text-[12px] text-white mt-5">Its nice to see you again, back to reading?</p>

    <form className="flex flex-col gap-3 mt-4">
        <input type="email" placeholder="Username / Email" className="text-[13px] bg-white text-black w-full p-2 rounded focus:outline-none" />
        <input type="text" placeholder="Password" className="text-[13px] bg-white text-black w-full p-2 rounded focus:outline-none" />
        <button type="button" className="text-[13px] bg-blue-700 rounded capitalize w-full h-8">sign in</button>
        </form>
        <div className="flex flex-nowrap items-center justify-between gap-5 my-2">
            <div className="flex flex-nowrap items-center gap-1">
                <input type="checkbox" />
                <h1 className="text-[12px]">Remember me</h1>
                </div>
            <a href="" className="text-[12px] hover:text-blue-500">Forget Password ?</a>
        </div>
        
<div className="mt-4">
            <h1 className='text-xs font-medium text-white/50 relative after:absolute after:top-1/2 after:right-0 after:h-[1.7px] after:w-[45%] after:bg-white/50 text-center before:absolute before:top-1/2 before:left-0 before:h-[1.7px] before:w-[45%] before:bg-white/50 '>OR</h1>
            <div className="mt-4">
                <button className="flex flex-nowrap items-center justify-center gap-2 bg-white rounded p-[5px] bg-white w-full text-black">
                    <FcGoogle/>
                    <h1 className="text-[11px] font-semibold">Continue With Google</h1>
                </button>
            </div>
            <div className="text-xs font-medium flex flex-nowrap items-center justify-center gap-2 mt-7 text-white/50">
              <h1>Don't have an account ?</h1>
              <Link href="/auth/signup" className='text-blue-500 capitalize'>Create account</Link>
            </div>
          </div>

    </div>
            </div>
    )
}