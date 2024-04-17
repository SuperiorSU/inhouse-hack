import React from "react";
import { SiTryhackme } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from "../assets/tu-white.png";
const Footer = () => {
  return (
    // lol
    <div className="ps-4 pe-4 pt-">
      <footer className=" pt-5 px-2 4 border-t-[1px]  border-gray-600">
        <div className=" grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-4 grid-cols-12 py-5 gap-y-4 gap-x-4   ">
          <div className="lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-12">
            <div className="logo text-white font-medium">
              <SiTryhackme
                size={30}
                className="text-white inline-block me-1 "
              />
              <span className="text-[18px]">Hack-A-Thon</span>
              <br />
              <br />
              <p className="font-normal text-gray-400">
                Secure your future with us and our innovative.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4">Contact</h3>
            <ul className="text-gray-400 gap-y-2 leading-9 ">
              <li className="hover:text-white duration-150"><a href="https://www.linkedin.com/in/vaishnavi-bajpai-908726260/" target="_blank">Co-Ordinator</a></li>
              <li className="hover:text-white duration-150"><a  href="#about">Rules & regulation</a></li>
              <li className="hover:text-white duration-150"><a href="https://www.instagram.com/theuniquesofficial/">Updates</a></li>
              <li className="hover:text-white duration-150"><a href="#theme">Theme</a></li>
            </ul>

          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4">Developers</h3>
            <ul className="text-gray-400 gap-y-2 leading-9">
              <li className="hover:text-white duration-150"><a href="https://www.linkedin.com/in/kumar-sujal-b801a6275/" target="_blank">Kumar Sujal</a></li>
              <li className="hover:text-white duration-150"><a href="https://www.linkedin.com/in/mukul-tiwari-4b07b829a/" target="_blank">Mukul Tiwari</a></li>
              <li className="hover:text-white duration-150"><a href="https://www.linkedin.com/in/aryan-kammboz-110521252/" target="_blank">Aryan Kamboj</a></li>
            </ul>

          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4" target="_blank">Social Media & Websites</h3>
            <ul className="text-gray-400 gap-y-2 leading-9">
              <li className="hover:text-white duration-150"><a href="https://www.linkedin.com/company/theuniquesofflicial/mycompany/" target="_blank">Linkedin</a></li>
              <li className="hover:text-white duration-150"><a href="https://www.instagram.com/theuniquesofficial/" target="_blank" >Instagram</a></li>
              <li className="hover:text-white duration-150"><a href="https://gdscsviet.netlify.app/" target="_blank">GDSC SVIET</a></li>
              <li className="hover:text-white duration-150"><a href="https://www.theuniques.in/" target="_blank">The Uniques Community</a></li>
            </ul>

          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4">Usage and Code</h3>
            <ul className="text-gray-400 gap-y-2 leading-9">
              <li className="hover:text-white duration-150">GitHub Link</li>
              <li className="hover:text-white duration-150">Terms & Condition</li>
              <li className="hover:text-white duration-150">More...</li>
              
            </ul>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
