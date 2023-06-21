import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="   w-4/5 m-auto py-10 cursor-default">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="flex flex-col space-y-3">
          <h1 className="text-3xl font-bold ">About us </h1>
          <p className="text-xs text-gray-400">
          Let us be your guide <br/>
           to the captivating beauty,
           rich culture, and diverse <br/> landscapes 
           of Morocco's enchanting destinations.
           </p>
           <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"} className="cursor-pointer" />
            <AiFillInstagram size={"1.5rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer" />
            <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer" />
          </div> 
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className=" text-3xl font-bold">Contact  us</h1>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>(+212)-679468891</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMail />
            <p>aouamayah1@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p> résidence riad atlass 3 étage Appt 21-Casablanca </p>
          </div>
         
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Acount</h1>
          <a className="text-xs text-gray-400" href="/">
            Signup
          </a>
          <a className="text-xs text-gray-400" href="/">
            Login
          </a>
          <a className="text-xs text-gray-400" href="/">
            View Trips
          </a>
          
        </div>

      </div>
      <br/>
      <br/>
      

      <div className="flex flex-col space-y-3">
      <p className=" text-black-500">
        &copy; {new Date().getFullYear()} Discover MAROCCO. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
