import React from 'react'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <div className='p-5 text-center'>
        <div className='py-10 lg:py-16 md:py-14 sm:py-12'>
            <h1 className='lg:text-8xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text '>Craft. Code. Conquer.</h1>
            <p className='text-gray-400 py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor aperiam cupiditate.</p>
            <br/><br/><br/>
            <div className='lg:w-[80%] md:w-[70%] sm:w-[80%] w-[80%] mx-auto'>
                <img src={hero} className='rounded-md object-cover shadow-gray-500 shadow-md' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero