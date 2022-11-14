"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { project } from "../types";
import { urlFor } from "../sanity";

type Props = {
  projects: project[];
};

const ProjectComponent = ({ projects }: Props) => {
  return (
    <div className="w-full flex scroll-smooth gap-4">
      {projects.map((project) => (
        <Link
          href={`/projects/${project._id}`}
          className="cursor-none  w-[100%] snap-proximity scroll-smooth h-full shrink-0"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
            className="flex m-auto flex-col justify-center gap-2 items-center p-4 w-full bg-[#202020] min-h-60 rounded-3xl hover:shadow-md hover:bg-[#252525] transition-shadow hover:ease-in-out hover:duration-300 text-center font-bold uppercase "
          >
            <h1 className="text-gray-500">{project.projectName}</h1>
            <Image
              className=" w-[50%] rounded-3xl"
              src={urlFor(project.projectImage).url()}
              alt="stole"
              width={300}
              height={300}
              priority
            />
            <h1 className="text-gray-500">{project.projectDescription}</h1>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectComponent;
