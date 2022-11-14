import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import MainContent from "../components/MainContent";
import Three from "../components/Three";
import store from "../redux/store";
import { Provider } from "react-redux";
import About from "../components/About";
import Contact from "../components/Contact";
import ProjectComponent from "../components/ProjectComponent";
import {
  aboutQuery,
  projectsQuery,
  socialsQuery,
  userQuery,
} from "../utils/queries";
import { sanityClient } from "../sanity";
import { about, project, social } from "../types";
import Navbar from "../components/Navbar";

type Props = {
  social: social[];
  projects: project[];

  about: about[];
};

const fetchSocials = async () => {
  const socials: social[] = await sanityClient.fetch(socialsQuery);

  return socials;
};
const fetchAbout = async () => {
  const about: about[] = await sanityClient.fetch(aboutQuery);
  return about;
};

const fetchProjects = async () => {
  const projects: project[] = await sanityClient.fetch(projectsQuery);

  return projects;
};
const fetchUser = async () => {
  const user = await sanityClient.fetch(userQuery);
  return user;
};

async function HomePage() {
  const socials = await fetchSocials().then((res) => res);
  const about = await fetchAbout().then((res) => res);
  const projects = await fetchProjects().then((res) => res);
  const user = await fetchUser().then((res) => res);

  return (
    <div className="block ">
      <Navbar socials={socials} />
      <div id="home" className="h-screen  relative">
        <MainContent user={user} />
      </div>
      <div
        id="projects"
        className="h-screen gap-44 flex flex-col justify-center items-center   relative overflow-hidden "
      >
        <h1 className="text-center text-5xl absolute top-[10vh] uppercase font-bold ">
          Projects
        </h1>
        <div className="flex  mx-auto overflow-x-scroll w-3/4 justify-start gap-10 snap-x snap-mandatory items-center scrollbar scrollbar-thumb-[#363636] scrollbar-track-white overflow-y-hidden pb-4">
          <ProjectComponent projects={projects} />
        </div>
      </div>
      <div
        id="about"
        className="h-screen flex  flex-col justify-center items-center  relative overflow-hidden"
      >
        <h1 className="text-center  text-5xl uppercase absolute top-[10vh] font-bold ">
          about
        </h1>
        <About about={about} />
      </div>
      <div
        id="contact"
        className="h-screen flex flex-col  justify-center items-center relative overflow-hidden"
      >
        <h1 className="text-center text-5xl uppercase absolute top-[10vh] font-bold ">
          contact
        </h1>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
