import React from 'react'
import { FaArrowCircleRight} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <div className='scroll-smooth'>
        <nav className='flex justify-between py-5 items-center ps-7 pe-7'>
            <div>
                <div className='flex gap-x-9 justify-around items-center'>
                    <div className='logo text-white font-medium'>
                        <SiTryhackme
                            size={30}
                            className='text-white inline-block me-1' />
                        <span className='text-[18px]'>Hack-A-Thon</span></div>
                    <div>
                        <ul className='hidden gap-x-7 justify-around items-center lg:flex md:flex sm:hidden'>
                        <li className='text-gray-400 hover:text-white duration-150' id=""><a href="#">Home</a></li>
                        <li className='text-gray-400 hover:text-white duration-150'><a href="#about">About</a></li>
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#why">Why Participate</a></li>
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#theme">Theme</a></li>    
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#form">Register</a></li>    
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className='flex items-center gap-x-4'>
                <a href = "#form">
                   <button className='text-gray-400 hover:text-white duration-150 lg:block md:block hidden sm:hidden border-t-[1px] border-white/30 px-4 py-1 bg-[#0b112a] rounded-full'>Register</button> 
                </a>
                
                <div>
                        {!isClicked&&<GiHamburgerMenu size={24} className='text-white lg:hidden md:hidden sm:block' onClick={handleClick}/>}

                        {isClicked&&<RxCross1 onClick={handleClick} size={24} className='text-white lg:hidden md:hidden sm:block'/>}
                </div>
            </div>
        </nav>
        <div className='flex gap-x-1 justify-center items-center' >
            
            <div className='bg-[#0d132e] p-1 border-[.5px] border-gray-800 rounded-lg lg:block md:block hidden sm:hidden '>
                <a href='#about'><p className='text-gray-400 text-center'><span className='text-white text-sm font-medium'>Announcing our new event </span>- The in-House Hackathon for The Uniques 2.0, The Uniques 3.0 & Super 60</p></a>
            </div>
            <div className='bg-blue-500 rounded-full w-[30px] h-[30px] lg:block md:block hidden sm:hidden'>
                <a href="#about"><FaArrowCircleRight size={15} className='m-auto inline-block text-white ms-2'/></a>
            </div>
            
        </div>
        <div className='relative'>
            {
                isClicked && 
                <div className='bg-white/5 backdrop-blur-md py-5 absolute w-60 right-0 border-2 border-gray-600'>
                            <ul className='flex flex-col gap-y-7 justify-around items-center'>
                                <li className='text-gray-400 hover:text-white duration-150' id=""><a href="#">Home</a></li>
                                <li className='text-gray-400 hover:text-white duration-150'><a href="#about">About</a></li>
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#why">Why Participate</a></li>
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#theme">Theme</a></li>    
                                <li className='text-gray-400 hover:text-white duration-150' ><a href="#form">Register</a></li>    
                            </ul>
                        </div>
            }
        </div>

    </div>
  )
}

export default NavBar