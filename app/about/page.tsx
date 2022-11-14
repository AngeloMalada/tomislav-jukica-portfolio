"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about, image } from "../../types";
import { aboutQuery } from "../../utils/queries";
import { urlFor } from "../../sanity";

type Props = {
  about: about[];
};

const About = ({ about }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -500,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
      className="text-center uppercase font-bold  flex flex-col  text-m justify-center items-center gap-10  overflow-hidden mt-[12vh] w-[90%] lg:w-[60%] "
    >
      <div className="flex flex-col justify-center gap-10 items-center py-6 w-full  bg-[#202020] min-h-60 rounded-3xl hover:shadow-md  hover:bg-[#252525] transition-shadow hover:ease-in-out hover:duration-300 text-center font-bold uppercase">
        <h1 className="text-3xl">ABOUT</h1>
        <Image
          className="rounded-3xl  object-cover object-top"
          src={urlFor(about[0]?.image).url()}
          alt="stole"
          height={200}
          width={200}
        />
        <p className="text-justify px-10 text-m">{about[0]?.description}</p>
      </div>
    </motion.div>
  );
};

export default About;
