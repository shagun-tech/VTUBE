import React from 'react'
import { FaHamburger } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { ImVideoCamera } from "react-icons/im";
import { MdNotificationsActive } from "react-icons/md";


export const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-[#212121] opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
            <FaHamburger className='bg-transparent'/>
            </div>
            <div className='flex gap-2 items-center justify-center'>
            <FiYoutube className='text-3xl text-pink-600'/>
            <span className='text-2xl font-extrabold'>VTube</span>
            </div>
            <div className='flex items-center justify-center gap-3 rounded-xl'>
                <form>
                    <div className='flex bg-pink-600 items-center h-10 px-5 pr-2 py-2 rounded-full'>
                        <div className='flex gap-5 items-center pr-5'>
                      
                        <input type='text' placeholder='Search' className='h-8 w-100 bg-white focus:outline-none border-spacing-3 rounded-2xl'/>
                        <div className=' bg-black rounded-full'>
                            <button >
                                <FaSearch className='h-6 w-10 flex items-center'/>
                            </button>
                        </div>   
                        </div>
                        <div className=' bg-black rounded-full'>
                            <button>
                                <FaMicrophone className='h-6 w-10 flex items-center'/>
                            </button>
                        </div>



                    </div>
                </form>
           </div>
           <div className=' bg-black rounded-full '>
                            <button>
                                <ImVideoCamera className='h-10 w-16 '/>
                            </button>
            </div>
            <div className='relative bg-black rounded-full '>
                            <button>
                                <MdNotificationsActive className='h-10 w-16 '/>
                                <span className='absolute top-10 center-10 text-xs bg-red-600 rounded-full px-1'>10+</span>
                            </button>
            </div>            
        </div>
        <div><img src='https://th.bing.com/th/id/OIP.CuONwivmGgnU8hc-q14KkAHaEo?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='p' className='h-10  w-10 rounded-full'></img></div>
    </div>
  )
}

export default Navbar;