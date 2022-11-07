"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MainContent from "../components/MainContent";
import Three from "../components/Three";
import store from "../redux/store";
import { Provider } from "react-redux";

const HomePage = () => {
  return (
    <Provider store={store}>
      <div className="h-[92vh]  relative">
        <MainContent name="Stole" />

        <div className="fixed top-[8vh] h-[92vh] w-full z-[-20]">
          <Canvas>
            <Three />
          </Canvas>
        </div>
      </div>
    </Provider>
  );
};

export default HomePage;
