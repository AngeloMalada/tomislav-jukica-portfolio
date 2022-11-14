import React from "react";
import Navbar from "../../../components/Navbar";
import SingleProject from "../../../components/SingleProject";
import { sanityClient } from "../../../sanity";
import { social } from "../../../types";
import {
  singleprojectQueryFunction,
  socialsQuery,
} from "../../../utils/queries";

type Props = {
  params: {
    id: string;
  };
};

type ProjectProps = {
  socials: social[];
};

const fetchProject = async (id: string) => {
  const res = await sanityClient.fetch(singleprojectQueryFunction(id));
  return res;
};

const fetchSocials = async () => {
  const socials: social[] = await sanityClient.fetch(socialsQuery);

  return socials;
};

async function Project({ params: { id } }: Props) {
  const project = await fetchProject(id).then((res) => res);
  const socials = await fetchSocials().then((res) => res);

  return (
    <>
      <Navbar socials={socials} />
      <div className="mt-[8vh] h-[92vh] flex flex-col justify-center items-center text-gray-500 scrollbar scrollbar-thumb-[#252525] scrollbar-track-red-[#151515]">
        <SingleProject project={project} />
      </div>
    </>
  );
}

export default Project;
