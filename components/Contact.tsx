"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 500,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
      className="mt-[12vh]  w-[100%] flex justify-center items-center overflow-hidden\"
    >
      <form className="flex flex-col justify-center items-center gap-5 bg-[#252525] p-10 w-[90%] md:w-[60%]  rounded-3xl">
        <label htmlFor="name">Name</label>
        <input
          className="w-[90%] rounded-xl h-10"
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="w-[90%] rounded-xl h-10"
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="w-[90%] rounded-xl"
          name="message"
          id="message"
          cols={30}
          rows={5}
        />
        <button type="submit">Submit</button>
      </form>
    </motion.div>
  );
};

export default Contact;
