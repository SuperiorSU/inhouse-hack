import React from 'react'
import collab from '../assets/collab.png'
const WhyPart = () => {
  return (
    <div className='relative bg-gradient-to-b from-[#04081a] to-[#231451] p-5'>
        <h2 className=' lg:text-6xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center py-3 uppercase'>Why Paricipate</h2>
        <p className='text-gray-400 text-center p-1'>Learn through Experience</p>
        <div className='flex flex-wrap justify-center gap-4 items-center my-5'>
            <div className='w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]'>
                <h3 className='text-2xl text-white pb-2'>Collaborate</h3>
                <p className='text-gray-500 text-[15px]'>Build your own projects and learn from theme. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]'>
                <h3 className='text-2xl text-white pb-2'>Think</h3>
                <p className='text-gray-500 text-[15px]'>Build your own projects and learn from theme. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]'>
                <h3 className='text-2xl text-white pb-2'>Create</h3>
                <p className='text-gray-500 text-[15px]'>Build your own projects and learn from theme. Lorem, ipsum dolor sit amet consectetur adipisicing ]</p>
            </div>
        </div>
        <div className='grid grid-cols-2 py-7'>
            <div className='col-span-1'>
                <img src={collab} className='object-contain items-center' alt=""/>
            </div>
            <div className='col-span-1 p-5 relative z-[2] my-auto'>
                <h3 className='text-4xl text-white pb-2 ps-3 font-semibold uppercase'>Collaborate</h3>
                <br></br>
                <p className='text-gray-500 text-[15px] ps-3'>Build your own projects and learn from theme. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='absolute -top-6 text-9xl font-bold text-white/10'>
                    01
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 py-7'>
           
            <div className='col-span-1 p-5 relative z-[2] my-auto'>
                <h3 className='text-4xl text-white pb-2 ps-3 font-semibold uppercase'>Think</h3>
                <br></br>
                <p className='text-gray-500 text-[15px] ps-3'>Build your own projects and learn from theme. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='absolute -top-6 text-9xl font-bold text-white/10'>
                    02
                </div>
            </div>
            <div className='col-span-1'>
                <img src={collab} className='object-contain items-center' alt=""/>
            </div>
        </div>
    </div>
  )
}

export default WhyPart