import React from "react";
import world from "../assets/world.png";
const Theme = () => {
  return (
    <div className="py-10 px-5">
      <div className="lg:flex gap-5 md:flex-wrap sm:flex-wrap flex-wrap justify-evenly items-center">
        <div className="">
          <h2 className="g:text-6xl md:text-6xl font-serif sm:text-6xl text-4xl font-bold bg-gradient-to-r from-blue-600 via-[#ca0019] to-indigo-400 text-transparent bg-clip-text lg:text-start text-center py-3 uppercase">
            Theme
          </h2>
          <p className="text-gray-400 w-96 ">
            The theme for this internal hackathon is open. The students can
            choose any domain and any tech stack to build their solutions and
            present them in the competitions. Though the projects are restricted
            to software only.{" "}
          </p>
        </div>
        <div>
          <img src={world} className="rounded-md object-contain w-96 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Theme;
