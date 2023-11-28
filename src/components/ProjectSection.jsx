import React, { useRef } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectSection = () => {
 
  return (
    <div id="project" className=" w-[1080px] mx-auto mt-[50px] ">
      <div className="text-[3rem] text-gray-400 font-bold">Projects</div>
      <div className=" bg-blue-500 w-[80px]  h-[2px]"></div>
      <div className=" flex items-start gap-2 justify-start flex-wrap">
        {projects.map((project) => (
          <Link to={project?.link} target={"_blank"}>
          <ProjectCard data={project}  />
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default ProjectSection;
