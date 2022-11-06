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
      className="flex flex-col gap-10 w-[80%] min-h-[80%] bg-gray-50 rounded-3xl m-auto font-bold uppercase text-center p-10 text-3xl hover:shadow-md hover:bg-white  transition-shadow hover:ease-in-out hover:duration-300"
    >
      <h1>Single Project</h1>
      <Image
        className="w-[25%] h-[40%] rounded-3xl mx-auto"
        src="/midwintar.png"
        width={1000}
        height={1000}
        alt="stole"
      />
      <p className=" text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et fuga
        cupiditate. Neque quam velit commodi nulla accusamus inventore impedit
        qui vitae distinctio, aspernatur vel necessitatibus nam dicta. Deserunt
        quod quas laborum delectus maiores unde exercitationem officia. Est
        consequuntur iure atque amet architecto assumenda quia natus sed
        voluptatibus perspiciatis totam enim esse ducimus quam fugiat impedit
        debitis eligendi placeat dolore error doloribus, et inventore! Deserunt
        eius unde magnam. Ullam nihil magnam voluptatem debitis asperiores
        reprehenderit voluptates unde consequuntur at! Doloremque ipsum
        reiciendis excepturi harum impedit vel molestias accusamus itaque est
        adipisci eos tenetur quis, autem possimus, exercitationem at suscipit
        officiis?
      </p>

      <h1>Download</h1>
    </motion.div>
  );
};

export default SingleProject;
