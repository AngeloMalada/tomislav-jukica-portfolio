import React from "react";
import MainContent from "../components/MainContent";
import "./globals.css";
import Test from "../components/Test";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="h-[5000px]">
      <MainContent />
      <Test />
    </div>
  );
};

export default HomePage;
