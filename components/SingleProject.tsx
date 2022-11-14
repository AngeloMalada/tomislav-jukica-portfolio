"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { project } from "../types";
import { urlFor } from "../sanity";

type Props = {
  project: project[];
};

const SingleProject = ({ project }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col gap-10 w-[80%]  bg-[#202020] justify-center items-center rounded-3xl  font-bold uppercase text-center p-10 text-m mb-10 hover:shadow-md hover:bg-[#252525]  transition-shadow hover:ease-in-out hover:duration-300"
    >
      <h1>{project[0].projectName}</h1>
      <Image
        className="w-[25%] h-[40%] rounded-3xl mx-auto"
        src={urlFor(project[0].projectImage).url()}
        width={1000}
        height={1000}
        alt="stole"
      />
      <p className=" text-center">{project[0].projectDescription}</p>

      <h1>Download</h1>
    </motion.div>
  );
};

export default SingleProject;
