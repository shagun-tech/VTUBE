import React from 'react'
import { IoHome } from "react-icons/io5";
import{
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';
import {LuThumbsUp} from 'react-icons/lu';


export default function Sidebar() {
    const mainLinks = [
        {
            icon:<IoHome className='text-xl'/>,
            name : 'Home'
        },
        {
            icon:<MdOutlineSlowMotionVideo className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions'
        }
    ];
    const otherLinks = [
        {
            icon:<MdOutlineVideoLibrary className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<MdHistory className='text-xl'/>,
            name:"History"
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name :"Watch Later"
        },
        {
            icon:<LuThumbsUp className='text-xl'/>,
            name :"Liked Video"
        }
    ]
  return (
    <div className='w-2/12 bg-pink-300 p-2 pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2 border-pink-600'>
            {mainLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-indigo-50 ${name === "Home"?"bg-pink-500":" "}`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>

                        </li>
                    )
                }
            

            )}
        </ul>
        <ul className='flex flex-col border-b-2 border-pink-600'>
        {otherLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-indigo-50 ${name === "Home"?"bg-slate-400":" "}`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
            }
        )}
      </ul>
    </div>
  )
}
