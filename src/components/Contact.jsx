import React from "react";
import { Icon } from "react-3d-icons";
import { gmail, github, linkedin } from "react-3d-icons";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const Contact = () => {
  return ( 
    <div  className=" mt-6" >
     <p className=" text-center text-2xl p-4 font-sans font-semibold">Hello there. Feel free to drop me a text!</p>
     <div>
      <p className=" text-center">ugalevaibhav00@gmail.com</p>\
     </div>
     <div className="  h-[250px]  max-w-full overflow-scroll mx-auto  justify-around  items-center flex  md:w-[300px] p-3 ">
     <Link to={"https://www.linkedin.com/in/vaibhavugale-959aa2217/"} target={"_blank"}>
  

        <FaLinkedin size={40}/>
      </Link>

      <a href={`mailto:ugalevaibhav00@gmail.com`}><TfiEmail size={40}/></a>
        
      
      <Link to={"https://github.com/vaibhavugale"}  target={"_blank"}>
        <FaGithubSquare size={40}/>
      </Link>
     </div>
    </div>
  );
};

export default Contact;
