import React from "react";
import Image from "next/image";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <div className="h-[92vh] flex justify-around items-center px-10">
      <div className="flex flex-col gap-10">
        <span className="text-5xl font-bold">Hi, name is </span>
        <span className="text-5xl font-bold">Tomislav</span>
      </div>
      <div className="h-32 w-32 md:w-48 md:h-48 lg:h-80 lg:w-80">
        <Image
          className="rounded-full"
          src="/picture.jpeg"
          alt="hero"
          width={300}
          height={300}
          layout="contain"
        />
      </div>
    </div>
  );
};

export default MainContent;
