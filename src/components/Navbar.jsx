

import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../assets/index'
import {navlinks} from '../constants/index'


export default function Navbar() {
  return (
    <nav className='navbar' >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
            <Link to='/' className='flex items-center gap-2	 '   >
                <img src={logo} alt="logo" className='w-28 h-15 object-contain bg-white' />
                <p className='text-white text-[18px] font-bold  bg-red-400' >
                    NFT Marketplace
                </p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navlinks.map((link)=>(
                    <li className='text-black hover:text-red-400' key={link.id} >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
            <img  alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" 
           
            />
            <div className={` p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navlinks.map((link) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px]  "text-white" : "text-secondary"
                    }`}
                   
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            
        </div>

    </nav>
  )
}
