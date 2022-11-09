"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TfiLinkedin } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import { GoNote } from "react-icons/go";

type Props = {};

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" bg-[#151515] h-[8vh] w-[100%] flex justify-between items-center z-10 gap-10 px-10 font-bold uppercase tracking-widest fixed top-0 ">
      <div className="flex gap-10">
        <TfiLinkedin className="h-6 w-6" />
        <AiFillGithub className="h-6 w-6" />
        <GoNote className="h-6 w-6" />
      </div>
      <div className="hidden md:flex gap-10 ">
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
      <div className="block md:hidden">
        <h1>Menu</h1>
      </div>
    </div>
  );
};

export default Navbar;
