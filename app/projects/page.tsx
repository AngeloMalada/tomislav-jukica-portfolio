"use client";
import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col m-auto p-10 mt-[8vh] lg:grid grid-rows-2 grid-cols-3 justify-center items-center gap-10">
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
      >
        <ProjectComponent />
      </motion.div>
    </div>
  );
};

export default Projects;
