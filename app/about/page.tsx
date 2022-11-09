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
      className="text-center uppercase font-bold  flex flex-col  text-m justify-center items-center gap-10 h-[92vh]  w-[90%] lg:w-[60%] m-auto"
    >
      <div className="flex flex-col justify-center gap-10 items-center py-10 w-full  bg-[#202020] min-h-60 rounded-3xl hover:shadow-md  hover:bg-[#252525] transition-shadow hover:ease-in-out hover:duration-300 text-center font-bold uppercase">
        <h1 className="text-3xl">ABOUT</h1>
        <Image
          className="rounded-3xl  object-cover object-top"
          src="/picture.jpeg"
          alt="stole"
          height={300}
          width={300}
        />
        <p className="text-justify px-10 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa
          quia, dolorum quaerat quas error deleniti omnis aliquam ducimus eaque
          qui provident hic eos at ut aperiam nostrum. Doloribus facilis ipsa
          hic ab laboriosam, numquam nesciunt mollitia. In commodi suscipit
          tenetur nostrum quo, minima perferendis voluptate magnam consequatur
          quos necessitatibus blanditiis, quam delectus natus illo accusantium!
          Autem, deleniti? Adipisci, provident ullam hic deserunt inventore
          blanditiis sunt iste ex veritatis nulla repellendus modi. Dolorem
          explicabo laboriosam deserunt officiis vero omnis. Rerum, qui! Dolores
          rerum necessitatibus ullam quia facere, temporibus consequuntur?
          Commodi dolore dignissimos numquam, illum doloribus natus
          reprehenderit aliquam suscipit magni!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
