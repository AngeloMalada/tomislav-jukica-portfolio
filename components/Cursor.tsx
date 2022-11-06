"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
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
    <div
      className="hidden lg:block"
      onMouseMove={handleMouseMove}
      style={{
        padding: "3rem",
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",

        position: "fixed",
        top: 0,
        left: 0,
        transform: `translateX(${globalCoords.x - 50}px) translateY(${
          globalCoords.y - 170
        }px)`,
        width: "30px",
        height: "30px",
        borderRadius: "50%",

        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        pointerEvents: "none",
      }}
    >
      <br />
    </div>
  );
}
