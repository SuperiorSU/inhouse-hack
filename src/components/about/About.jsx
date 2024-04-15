import React from 'react';
import './about.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindows, faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { SiTryhackme } from "react-icons/si";
const About = () => {
  return (
    <div className="container mx-auto">
      <div className="card">
        <div className="face face1">
          <div className="content">
          <SiTryhackme size={30} className='text-white inline-block me-1 ' />
            <h3 className="text-xl font-bold">Windows</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
          <SiTryhackme size={30} className='text-white inline-block me-1 ' />
            <h3 className="text-xl font-bold">Android</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
          <SiTryhackme size={30} className='text-white inline-block me-1 ' />
            <h3 className="text-xl font-bold">Apple</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
