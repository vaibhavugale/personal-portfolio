import React from "react";

const About = () => {
  return (
    <div  className=" w-[1200px] flex justify-between items-center shadow-2xl rounded-sm p-2  mt-[70px] mx-auto ">
      <div className="w-[1080px] mx-auto h-[400px]">
        <div className=" flex justify-start items-center  text-[3rem] text-gray-400 font-bold">About</div>
        <div className=" bg-blue-500 w-[80px]  h-[2px]"></div>

        <div className=" text-[1.5rem] text-center mt-9">
          Hello! I'm a passionate and eager{" "}
          <strong>Fullstack Developer </strong>. Ready to embark on an exciting
          journey in the world of web development.My skills and enthusiasm lie
          in building dynamic and user-friendly web applications using a stack
          that includes React, Node.js, JavaScript, CSS, and Tailwind CSS.
        </div>
      </div>
    </div>
  );
};

export default About;
