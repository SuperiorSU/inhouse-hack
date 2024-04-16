import React from 'react'
import hero from '../assets/hero.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  AOS.init();
  return (
    <div className='p-5 text-center'>
        <div className='py-10 lg:py-16 md:py-14 sm:py-12'>
        <TypeAnimation
        className='lg:text-8xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text '
      sequence={[
        'Craft.', 
        1000, 
        'Craft. Code.',
        1000,
        'Craft. Code. Conquer.',
        1000,
        'Craft. Code. ',
        1000,
        "Craft."
        
      ]}
    
      // cursor={true}
      repeat={Infinity}
    />
            {/* <h1 >Craft. Code. Conquer.</h1> */}
            <p className='text-gray-400 py-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor aperiam cupiditate.</p>
            <br/><br/><br/>
            <div className='lg:w-[80%] md:w-[70%] sm:w-[80%] w-[80%] mx-auto'>
                <img src={hero} className='rounded-md object-cover shadow-gray-500 shadow-md' alt="" data-aos="fade-up"
    data-aos-offset="50 "
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"/>
            </div>
        </div>
    </div>
  )
}

export default Hero