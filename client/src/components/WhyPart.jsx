import React from "react";
import collab from "../assets/collab.png";
import think from "../assets/thinl.png";
import create from "../assets/create.png";

const WhyPart = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#04081a] via-[#231451] to-[#04081a] p-7 overflow-hidden">
      <h2 className="lg:text-6xl md:text-6xl font-serif sm:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center py-3 uppercase">
        Why Participate
      </h2>
      <p className="text-gray-400 text-center p-1">Learn through Experience</p>
      <div className="flex flex-wrap justify-center gap-4 items-center my-5">
        <div className="w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]">
          <h3 className="text-white pb-2 text-2xl">Collaborate</h3>
          <p className="text-gray-500 text-[15px]">
            Build your own projects and learn from them. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]">
          <h3 className="text-2xl text-white pb-2">Think</h3>
          <p className="text-gray-500 text-[15px]">
            Build your own projects and learn from them. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-80 rounded-md border-2 border-[#564f92] p-3 bg-[#070a22]">
          <h3 className="text-2xl text-white pb-2">Create</h3>
          <p className="text-gray-500 text-[15px]">
            Build your own projects and learn from them. Lorem ipsum dolor sit
            amet consectetur adipisicing{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 py-7 gap-5">
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2"
          data-offset="40"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <img
            src={collab}
            className="object-contain w-96 mx-auto items-center"
            alt=""
          />
        </div>
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2 p-5 relative z-[2] my-auto"
          data-offset="40"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-3xl lg:text-start md:text-center sm:text-center text-center lg:text-7xl sm:text-5xl md:text-5xl text-white ps-3 font-bold uppercase">
            Collaborate
          </h3>
          <br></br>
          <p className="text-gray-400 text-[15px] lg:text-start md:text-center sm:text-center text-center ps-3">
            Build your own projects and learn from them. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="absolute -top-16 text-[188px] font-bold text-white/10">
            01
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 py-7 gap-5">
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2 p-5 relative z-[2] my-auto lg:order-1 md:order-2 sm:order-2 order-2"
          data-offset="40"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-3xl lg:text-end md:text-center sm:text-center text-center lg:text-7xl sm:text-5xl md:text-5xl text-white ps-3 font-bold uppercase">
            Think
          </h3>
          <br></br>
          <p className="text-gray-400 text-[15px] ps-3 lg:text-end md:text-center sm:text-center text-center">
            Build your own projects and learn from them. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="absolute lg:left-96 -top-16 text-[188px] font-bold text-white/10 text-end">
            02
          </div>
        </div>
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2 lg:order-2"
          data-offset="40"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <img
            src={think}
            className="object-contain w-96 mx-auto items-center"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 py-7 gap-5">
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2"
          data-offset="40"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <img
            src={create}
            className="object-contain w-96 mx-auto items-center"
            alt=""
          />
        </div>
        <div
          className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2 p-5 relative z-[2] my-auto"
          data-aos-offset="40 "
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <h3 className="text-3xl lg:text-start md:text-center sm:text-center text-center lg:text-7xl sm:text-5xl md:text-5xl text-white ps-3 font-bold uppercase">
            Create
          </h3>
          <br></br>
          <p className="text-gray-400 text-[15px] ps-3 lg:text-start md:text-center sm:text-center text-center">
            Build your own projects and learn from them. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div className="absolute -top-16 text-[188px] font-bold text-white/10">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPart;
