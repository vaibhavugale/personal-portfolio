import React, { useRef } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectSection = () => {
 
  return (
    <div id="project" className=" md:max-w-[1080px]  mx-auto mt-[50px] p-4 ">
      <div className="text-[3rem] text-gray-400 font-bold">Projects</div>
      <div className=" bg-blue-500 w-[80px]  h-[2px]"></div>
      <div className=" flex items-centre md:flex-row flex-col gap-2 justify-start flex-wrap md:items-start">
        {projects.map((project) => (
          <Link to={project?.Link} target={"_blank"}>
          <ProjectCard data={project}  />
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default ProjectSection;
