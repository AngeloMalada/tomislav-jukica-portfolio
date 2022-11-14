"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Slogan from "./Slogan";
import { user } from "../types";
import { urlFor } from "../sanity";

type Props = {
  user: user[];
};

const MainContent = ({ user }: Props) => {
  return (
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
      className="h-screen  flex  justify-between items-center gap-44  select-none uppercase font-bold"
    >
      <div className="flex flex-col gap-6 justify-center w-full ml-10 ">
        <Slogan text={user[0]?.slogan1} />
        <Slogan text={user[0]?.slogan2} />
        <Slogan text={user[0]?.slogan3} />
        <Slogan text={user[0]?.slogan4} />
      </div>

      <div className="hidden lg:inline-block mr-10">
        <Image
          className="rounded-3xl "
          src={urlFor(user[0]?.image).url()}
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
