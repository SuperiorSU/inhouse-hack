import React from 'react'
import hero from '../assets/hero.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import tu from '../assets/tu-white1.png'
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  AOS.init();
  return (
    <div className='p-5 text-center'>
      <img src={tu} alt="" className='mx-auto w-96 object-fit'  />
      
        <div className='py-10 lg:py-16 md:py-14 sm:py-12'>
        <TypeAnimation
        className='lg:text-8xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-[#ca0019] to-indigo-400 text-transparent bg-clip-text '
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
            
            <p className='text-gray-400 py-1 flex flex-wrap w-[95%] md:w-[60%] mx-auto' >This is your opportunity to demonstrate your skills, tackle real-world issues, and innovate within a limited time frame. It's not just about competition; it's about learning, experimenting, and making a difference.</p>
            <br/><br/><br/>
            <div className='lg:w-[80%] md:w-[70%] sm:w-[80%] w-[80%] mx-auto'>
                <img src={hero} className='rounded-md object-cover shadow-gray-500 shadow-md' alt="" data-aos="fade-up"
    data-aos-offset="40 "
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