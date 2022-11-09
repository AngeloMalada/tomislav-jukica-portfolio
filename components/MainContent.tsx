"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Slogan from "./Slogan";

const MainContent = () => {
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
      className="h-[92vh] mt-[8vh] flex  justify-between items-center gap-44  select-none uppercase font-bold"
    >
      <div className="flex flex-col gap-6 justify-center w-full ml-10 ">
        <Slogan text="tomislav" />
        <Slogan text="jukica" />
        <Slogan text="game" />
        <Slogan text="dev" />
      </div>

      <div className="hidden lg:inline-block mr-10">
        <Image
          className="rounded-3xl "
          src="/picture.jpeg"
          alt="hero"
          width={500}
          height={500}
          priority
        />
      </div>
    </motion.div>
  );
};

export default MainContent;
