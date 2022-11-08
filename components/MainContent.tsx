"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { hovered, unhovered } from "../redux/cursorSlice";

type Props = {
  name: string;
};

const MainContent = ({ name }: { name: string }) => {
  const dispatch = useDispatch();
  const mouseEnter = () => {
    dispatch(hovered());
  };
  const mouseLeave = () => {
    dispatch(unhovered());
  };
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
      className="h-[92vh] mt-[8vh] flex justify-around  items-end pb-10 text-center px-10 select-none uppercase font-bold"
    >
      <div className="flex flex-col gap-10 ">
        <h1
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className=" text-9xl font-bold  "
        >
          Tomislav Jukica
        </h1>
        <h1
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="text-9xl font-bold  "
        >
          Game developer
        </h1>
      </div>
      {/* <div className="h-32 w-32 md:w-48 md:h-48 lg:h-80 lg:w-80">
        <Image
          className="rounded-full"
          src="/picture.jpeg"
          alt="hero"
          width={300}
          height={300}
          priority
        />
      </div> */}
    </motion.div>
  );
};

export default MainContent;
