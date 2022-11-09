"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
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
      className="mt-8 h-[92vh] flex justify-center items-center"
    >
      <form className="flex flex-col justify-center items-center gap-5 bg-[#252525] p-10 w-[90%] md:w-[60%] m-auto rounded-3xl">
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
