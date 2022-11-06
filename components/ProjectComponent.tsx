import React from "react";
import Image from "next/image";

type Props = {};

const ProjectComponent = (props: Props) => {
  return (
    <div className="flex m-auto flex-col gap-2 items-center p-4 w-80 min-h-60 rounded-3xl hover:shadow-md transition-all ease-in-out duration-300 text-center font-bold uppercase">
      <h1>Project name</h1>
      <Image
        className="w-32 h-32 rounded-3xl"
        src={"/picture.jpeg"}
        alt="stole"
        width={300}
        height={300}
        priority
      />
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo qui hic
        ipsum deserunt rerum quibusdam possimus non obcaecati architecto
        asperiores?
      </h1>
    </div>
  );
};

export default ProjectComponent;
