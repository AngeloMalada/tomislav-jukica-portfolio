import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

const MainContent = ({ name }: { name: string }) => {
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
      className="h-[92vh] flex justify-around items-center px-10"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold">{name} batina </h1>
        <h1 className="text-5xl font-bold">Mase Automatima</h1>
      </div>
      <div className="h-32 w-32 md:w-48 md:h-48 lg:h-80 lg:w-80">
        <Image
          className="rounded-full"
          src="/picture.jpeg"
          alt="hero"
          width={300}
          height={300}
          priority
        />
      </div>
    </motion.div>
  );
};

export default MainContent;
