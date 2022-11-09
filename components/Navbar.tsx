"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { GoNote } from "react-icons/go";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <div className=" bg-[#151515] h-[8vh] w-[100%] flex justify-between items-center z-10 gap-10 px-10 font-bold uppercase tracking-widest fixed top-0 ">
        <div className="flex gap-10">
          <TfiLinkedin className="h-10 w-10" />
          <AiFillGithub className="h-10 w-10" />
          <GoNote className="h-10 w-10" />
        </div>
        <div className="hidden lg:flex gap-10 ">
          <Link href="/" className="cursor-none">
            <h1>Home</h1>
          </Link>
          <Link href="/projects" className="cursor-none">
            <h1>Projects</h1>
          </Link>
          <Link href="/about" className="cursor-none">
            <h1>About</h1>
          </Link>
          <Link href="/contact" className="cursor-none">
            <h1>Contact</h1>
          </Link>
        </div>
        <div className="block lg:hidden text-3xl">
          <h1 onClick={handleMenu}>Menu</h1>
        </div>
      </div>
      {menu && (
        <motion.div
          initial={{
            x: 200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-col bg-red-500 w-[35vw] h-[100vh] z-10 justify-start pt-20 text-5xl gap-10 text-center rounded-2xl absolute right-0"
        >
          <Link href="/" className="cursor-none">
            <h1>Home</h1>
          </Link>
          <Link href="/projects" className="cursor-none">
            <h1>Projects</h1>
          </Link>
          <Link href="/about" className="cursor-none">
            <h1>About</h1>
          </Link>
          <Link href="/contact" className="cursor-none">
            <h1>Contact</h1>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
