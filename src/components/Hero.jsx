import React from "react";
import { TypeAnimation } from "react-type-animation";
import image from "./../assets/B1B1F4FA-51EB-40AA-985E-4AF37CC4B9E5_1_105_c.jpeg";
import resume from "./vaibhavugale.pdf"


const Hero = () => {
  return (
    <section className=" w-[1200px] flex justify-between items-center shadow-2xl rounded-sm p-2  mt-[70px] mx-auto ">
      <div className=" flex justify-between items-center w-[1080px] rounded-sm  mx-auto ">
        <div className=" flex border-red-400  flex-col justify-center h-[420px] items-start">
          <div className=" font-bold  text-[2.5rem] ">
            Hi ! , myself vaibhav ugale
          </div>

          <TypeAnimation
            sequence={[
              "I am a software developer",
              1000,
              "I am a frontend developer",
              1000,
              "I am a backend developer",
              1000,
              "I am a fullstack developer",
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            style={{ fontWeight: "500", fontSize: "1.2em" }}
          />

          <a href={resume} target="_blank"  download>
          <div className=" bg-blue-600 border-none  rounded-sm px-2 text-white  font-semibold mt-4 py-2 hover:bg-blue-700 transition-all duration-200">
            Hire me
          </div>
          </a>
        </div>
        {/* <div> */}
        <img src={image} className=" w-[300px] rounded-md" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
