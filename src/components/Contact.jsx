import React from "react";
import { Icon } from "react-3d-icons";
import { gmail, github, linkedin } from "react-3d-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div  className=" w-[1080px] mx-auto justify-center flex" >
      <Link to={"https://www.linkedin.com/in/vaibhavugale-959aa2217/"} target={"_blank"}>
        <Icon file={linkedin} color={"#0B65C2"} scale={5} />
      </Link>
      <Link>
        <Icon file={gmail} color={"#EA4436"} scale={5}   />
      </Link>
      <Link to={"https://github.com/vaibhavugale"}  target={"_blank"}>
        <Icon file={github} color={"#1c1c1c"} scale={5} />
      </Link>
    </div>
  );
};

export default Contact;
