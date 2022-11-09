"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const SingleProject = (props: Props) => {
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
      <h1>Single Project</h1>
      <Image
        className="w-[25%] h-[40%] rounded-3xl mx-auto"
        src="/midwintar.png"
        width={1000}
        height={1000}
        alt="stole"
      />
      <p className=" text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et fuga
        cupiditate. Neque quam velit commodi nulla accusamus inventore impedit
        qui vitae distinctio, aspernatur vel necessitatibus nam dicta. Deserunt
        quod quas laborum delectus maiores unde exercitationem officia. Est
        cupiditate. Neque quam velit commodi nulla accusamus inventore impedit
        qui vitae distinctio, aspernatur vel necessitatibus nam dicta. Deserunt
        quod quas laborum delectus maiore qui vitae distinctio, aspernatur vel
        necessitatibus nam dicta. Deserunt quod quas laborum delectus maiores
        unde exercitationem officia. Est cupiditate. Neque quam velit commodi
        nulla accusamus inventore impedit qui vitae distinctio, aspernatur vel
        necessitatibus nam dicta. Deserunt quod quas laborum delectus maiore
      </p>

      <h1>Download</h1>
    </motion.div>
  );
};

export default SingleProject;
