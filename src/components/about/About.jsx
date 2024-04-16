import React from "react";
import "./about.css"; 

const GlowingCard = () => {
  return (
<<<<<<< HEAD
    <section id="about" className="my-5 py-5 overflow-hidden">
      <div className="flex flex-col items-center ">
        <h2 className=" lg:text-6xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center py-3 uppercase">
=======
    <section className="my-5 py-5 overflow-hidden">
      <div className="flex flex-col items-center "   >
        <h2 className=" lg:text-6xl md:text-6xl font-serif sm:text-6xl text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center py-3 uppercase" 
   >
>>>>>>> f99341a25f242c427c9fb55e194ab7deaaddeb62
          About Our Event
        </h2>
        <p className="text-gray-400 text-center p-1 w-[80%]">
          Our in-house hackathon is your chance to showcase skills, tackle
          real-world issues, and innovate within a limited time frame. It's not
          just about competition, but about learning, experimenting, and making
          a difference. Join us to unleash your potential!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto my-10 gap-x-7 gap-y-7 lg:gap-y-0 py-10 ">
        <div className="container w-[20rem] h-[22rem] sm:w-[35rem] sm:h-[28rem]"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-offset="-20"
        >
          <div className="gradient flex flex-col justify-evenly pb-3">
            <h2 className="text-2xl text-white  text-center pb-2  pt-2 uppercase">Judging Criteria:</h2>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">1. Innovation: </bold>How original and creative is the project idea? Does it solve a real-world problem in a unique way?</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">2. Functionality: </bold>Does the project work as intended? Is it user-friendly and intuitive?</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">3. Technical Complexity:  </bold>How technically challenging is the project? Are advanced techniques or technologies utilized?</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">4. Implementation:  </bold> How well is the project executed? Is the code clean, well-organized, and documented?</p>
          <p className="px-5 text-gray-500 text-[11px]   md:text-[15px]"><bold className="text-bold text-white">5. Presentation: </bold>How effectively is the project presented? Is the demo clear, concise, and engaging?</p>
          </div>
        </div>
        <div className="container w-[20rem] h-[22rem] sm:w-[35rem] sm:h-[28rem]"  
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-offset="-20"
      >
          <div className="gradient flex flex-col justify-evenly pb-3">
            <h2 className="text-2xl text-white  text-center pb-2  pt-2 uppercase">Rules and Regulations:</h2>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">1. Team Composition: </bold>Each team must consist of 2-4 members.</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">2. Project Requirements: </bold> Projects must be developed entirely during the hackathon. While open-source resources are encouraged, proper acknowledgment is mandatory.</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">3.  Participants</bold> must adhere to a code promoting respectful and inclusive behavior. Any form of harassment or discrimination will result in immediate disqualification.</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">4. Time Limit:   </bold> Participants will have to work on their projects. Late submissions will not be accepted.</p>
          <p className="px-5 text-gray-500 text-[11px]    md:text-[15px]"><bold className="text-bold text-white">5. Intellectual Property: </bold> Participants retain full ownership of their projects. However, by participating, they grant the right to showcase their work for promotional purposes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlowingCard;
