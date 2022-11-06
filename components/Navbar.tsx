import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white h-[8vh] flex justify-end items-center gap-10 pr-10 font-bold uppercase tracking-widest sticky top-0">
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/projects">
        <h1>Projects</h1>
      </Link>
      <h1>About</h1>
      <h1>Contact</h1>
    </div>
  );
};

export default Navbar;
