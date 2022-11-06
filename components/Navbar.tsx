import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white h-[8vh] flex justify-between items-center gap-10 px-10 font-bold uppercase tracking-widest sticky top-0">
      <div className="flex gap-10">
        <h1>Linkedin</h1>
        <h1>Github</h1>
        <h1>resume</h1>
      </div>
      <div className="flex gap-10 ">
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
    </div>
  );
};

export default Navbar;
