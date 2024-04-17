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
              <li className="hover:text-white duration-150">Co-ordinator</li>
              <li className="hover:text-white duration-150">Rules & Regulation</li>
              <li className="hover:text-white duration-150">Updates</li>
              <li className="hover:text-white duration-150">Theme</li>
            </ul>

          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4">Developers</h3>
            <ul className="text-gray-400 gap-y-2 leading-9">
              <li className="hover:text-white duration-150">Kumar Sujal</li>
              <li className="hover:text-white duration-150">Aryan Kamboj</li>
              <li className="hover:text-white duration-150">Mukul Tiwari</li>
              
            </ul>

          </div>
          <div className="col-span-12 lg:col-span-1 md:col-span-2 sm:col-san-2">
            <h3 className="text-white text-[17px] font-medium pt-1 pb-4">Social Media</h3>
            <ul className="text-gray-400 gap-y-2 leading-9">
              <li className="hover:text-white duration-150">Linkedin</li>
              <li className="hover:text-white duration-150">Instagram</li>
              <li className="hover:text-white duration-150">Facebook</li>
              <li className="hover:text-white duration-150">X-Twitter</li>
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
