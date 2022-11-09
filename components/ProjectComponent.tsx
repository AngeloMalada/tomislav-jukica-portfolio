import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const ProjectComponent = (props: Props) => {
  return (
    <Link
      href="/projects/sadasds"
      className="cursor-none shrink-0 w-[100%] snap-center"
    >
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
        className="flex m-auto flex-col justify-center gap-2 items-center p-4 w-full bg-[#202020] min-h-60 rounded-3xl hover:shadow-md hover:bg-[#252525] transition-shadow hover:ease-in-out hover:duration-300 text-center font-bold uppercase"
      >
        <h1 className="text-gray-500">Project name</h1>
        <Image
          className=" w-[50%] rounded-3xl"
          src="/midwintar.png"
          alt="stole"
          width={300}
          height={300}
          priority
        />
        <h1 className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo qui hic
          ipsum deserunt rerum quibusdam possimus non obcaecati architecto
          asperiores?
        </h1>
      </motion.div>
    </Link>
  );
};

export default ProjectComponent;
