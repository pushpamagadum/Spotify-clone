import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
const navigate =useNavigate();


    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex' >
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="" />
                    <p className='font-bold'>Home</p>
                </div>

                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="" />
                    <p className='font-bold'>Search</p>
                </div>

            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex item-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="" />
                        <p className='font-semibold'>Your Library</p>
                    </div>

                    <div className='flex item-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>

                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1pl-left'>
                    <h1>create your first palylist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Craete a palylist</button>
                </div>

                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1pl-left p1-4 mt-4'>
                    <h1>lets findsome orodcasts to follow </h1>
                    <p className='font-light'>we'll keep you update on new episods</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcats</button>
                </div>

            </div>

        </div>
    )
}
export default Sidebar