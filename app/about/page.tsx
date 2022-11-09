"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
      className="text-center uppercase font-bold  mt-24 flex flex-col text-m justify-center items-center gap-10  w-[90%] md:w-[60%] m-auto"
    >
      <div className="flex m-auto flex-col justify-center gap-6 items-center p-4 w-full  bg-[#202020] min-h-60 rounded-3xl hover:shadow-md  hover:bg-[#252525] transition-shadow hover:ease-in-out hover:duration-300 text-center font-bold uppercase">
        <h1 className="text-3xl">ABOUT</h1>
        <Image
          className="rounded-3xl  object-cover object-top"
          src="/picture.jpeg"
          alt="stole"
          height={300}
          width={300}
        />
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          maiores enim architecto, nemo modi possimus reiciendis dolor commodi
          voluptates consectetur, iure sequi odit fuga placeat autem
          perspiciatis? Harum maiores culpa officiis beatae quos porro,
          aspernatur consequuntur ad ndus eos quas, esse, vitae sapiente qui ab
          consectetur, iure sequi odit fuga placeat autem perspiciatis? Harum
          maiores culpa officiis beatae quos porro
        </p>
      </div>
    </motion.div>
  );
};

export default About;
