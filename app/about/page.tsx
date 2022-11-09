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
          src="/picture.jpeg"
          alt="stole"
          height={200}
          width={200}
        />
        <p className="text-justify px-10 text-m">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, eum
          necessitatibus aut animi aliquam velit architecto voluptas deserunt ea
          voluptate officiis. Vel deleniti harum nam sit voluptates. Quae
          aspernatur, molestias sunt nesciunt perspiciatis iusto laborum
          pariatur cupiditate repellendus nostrum veniam, soluta assumenda
          perferendis nihil, maxime eos impedit iste dolor aut deserunt! Totam
        </p>
      </div>
    </motion.div>
  );
};

export default About;
