import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-[8vh] flex justify-end items-center gap-10 pr-10 font-bold uppercase tracking-widest sticky top-0">
      <span>Home</span>
      <span>Projects</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
};

export default Navbar;
