"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { GoNote } from "react-icons/go";
import { motion } from "framer-motion";
import { social } from "../types";

type Props = {
  socials: social[];
};

const Navbar = ({ socials }: Props) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const menuRef = React.useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (menu && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menu]);

  return (
    //set menu to false when clicked outisde of menu

    <>
      <div className=" bg-[#151515] h-[8vh] w-[100%] flex justify-between items-center z-10 gap-10 px-10 font-bold uppercase tracking-widest fixed top-0 ">
        <div className="flex gap-10">
          <Link href={socials[0]?.linkedin}>
            <TfiLinkedin className="h-10 w-10" />
          </Link>
          <Link href={socials[0]?.github}>
            <AiFillGithub className="h-10 w-10" />
          </Link>
          <GoNote className="h-10 w-10" />
        </div>
        <div className="hidden lg:flex gap-10 text-2xl ">
          <a href="/#home" className="cursor-none">
            <h1>Home</h1>
          </a>
          <a href="/#projects" className="cursor-none">
            <h1>Projects</h1>
          </a>
          <a href="/#about" className="cursor-none">
            <h1>About</h1>
          </a>
          <a href="#contact" className="cursor-none">
            <h1>Contact</h1>
          </a>
        </div>
        <div className="block lg:hidden text-3xl">
          <h1 onClick={handleMenu}>Menu</h1>
        </div>
      </div>
      {menu && (
        <motion.div
          ref={menuRef}
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex flex-col bg-[#252525] gap-20 w-[35vw] h-[max-content] pb-20 z-10 justify-start pt-20 text-5xl  text-center rounded-2xl fixed top-[0px] right-[0px]"
        >
          <a href="/#home" className="cursor-none">
            <h1 onClick={handleMenu}>Home</h1>
          </a>
          <a href="/#projects" className="cursor-none">
            <h1 onClick={handleMenu}>Projects</h1>
          </a>
          <a href="/#about" className="cursor-none">
            <h1 onClick={handleMenu}>About</h1>
          </a>
          <a href="/#contact" className="cursor-none">
            <h1 onClick={handleMenu}>Contact</h1>
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
