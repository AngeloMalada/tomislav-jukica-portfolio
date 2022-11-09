import React from "react";
import { useDispatch } from "react-redux";
import { hovered, unhovered } from "../redux/cursorSlice";

type Props = {
  text: string;
};

const Slogan = ({ text }: Props) => {
  const dispatch = useDispatch();
  const mouseEnter = () => {
    dispatch(hovered());
  };
  const mouseLeave = () => {
    dispatch(unhovered());
  };
  return (
    <h1
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className=" text-9xl  m-auto lg:m-0 font-bold inline-block w-[max-content] "
    >
      {text}
    </h1>
  );
};

export default Slogan;
