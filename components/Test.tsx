"use client";
import { useEffect, useState } from "react";
import { transform } from "typescript";

export default function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
      console.log(globalCoords);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [globalCoords]);

  const handleMouseMove = (event: any) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div>
      {/* 👇️ Get mouse coordinates relative to element */}
      <div
        onMouseMove={handleMouseMove}
        style={{
          padding: "3rem",
          backgroundColor: "pink",
          position: "fixed",
          top: `${coords.y}px`,
          left: `${coords.x}px`,
          transform: `translateX(${globalCoords.x - 50}px) translateY(${
            globalCoords.y - 170
          }px)`,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          zIndex: "-20",
        }}
      ></div>

      <hr />
      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>
    </div>
  );
}
