import React from "react";
import world from "../assets/world.png";
const Theme = () => {
  return (
    <div className="py-10 px-5" id="theme">
      <div className="lg:flex gap-5 md:flex-wrap sm:flex-wrap flex-wrap justify-evenly items-center">
        <div className="">
          <h2 className="g:text-6xl md:text-6xl font-serif sm:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-600 via-[#ca0019] to-indigo-400 text-transparent bg-clip-text lg:text-start text-center py-3 uppercase">
            Theme
          </h2>
          <br/>
          <h4 className="text-xl font-bold text-gray-300 md:text-center sm:text-center text-center lg:text-start">
          Open
          </h4>
          <p className="text-gray-400 py-3 lg:w-96 md:w-96 sm:w-96 w-72 md:text-center sm:text-center text-center lg:text-start mx-auto">
            Join us for an exciting opportunity to unleash your innovation! Our internal hackathon welcomes students from all domains to dive into the world of software development. With an open theme, participants have the freedom to choose any domain and tech stack to build their solutions.
            </p>
          <ul className="text-gray-400 lg:w-96 md:w-96 sm:w-96 w-72">
            <li></li>
          </ul>
        </div>
        <div>
          <img src={world} className="rounded-md mx-auto object-contain w-96 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Theme;
