"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MainContent from "../components/MainContent";
import Three from "../components/Three";
import store from "../redux/store";
import { Provider } from "react-redux";
import About from "./about/page";
import Contact from "./contact/page";
import ProjectComponent from "../components/ProjectComponent";

const HomePage = () => {
  return (
    <Provider store={store}>
      <div className="block">
        <div id="home" className="h-screen  relative">
          <MainContent />

          <div className="fixed top-[8vh] h-[92vh] w-full z-[-20]">
            {/* <Canvas camera={{ fov: 90, near: 1, far: 1000, position: [0, 2, 5] }}>
            <Three />
          </Canvas> */}
          </div>
        </div>
        <div
          id="projects"
          className="h-screen gap-44 flex flex-col justify-center items-center   relative overflow-hidden "
        >
          <h1 className="text-center text-5xl absolute top-[10vh] uppercase font-bold ">
            Projects
          </h1>
          <div className="flex  mx-auto overflow-x-scroll w-3/4 justify-start gap-10 snap-x snap-mandatory items-center ">
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
            <ProjectComponent />
          </div>
        </div>
        <div
          id="about"
          className="h-screen flex  flex-col justify-center items-center  relative"
        >
          <h1 className="text-center  text-5xl uppercase absolute top-[10vh] font-bold ">
            about
          </h1>
          <About />
        </div>
        <div
          id="contact"
          className="h-screen flex flex-col  justify-center items-center relative"
        >
          <h1 className="text-center text-5xl uppercase absolute top-[10vh] font-bold ">
            contact
          </h1>
          <Contact />
        </div>
      </div>
    </Provider>
  );
};

export default HomePage;
