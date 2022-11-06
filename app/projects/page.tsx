"use client";
import React from "react";
import ProjectComponent from "../../components/ProjectComponent";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="m-auto p-10 grid grid-rows-2 grid-cols-3 justify-center items-center gap-10">
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
      <ProjectComponent />
    </div>
  );
};

export default Projects;
