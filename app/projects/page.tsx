"use client";
import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
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
      className="flex flex-col m-auto p-10 mt-[8vh] lg:grid grid-rows-2 grid-cols-3 justify-center items-center gap-10"
    >
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
      >
        <ProjectComponent />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
