"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [globalCoords]);

  return (
    <div
      className="hidden  lg:block"
      style={{
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",

        position: "fixed",
        top: 0,
        left: 0,
        transform: `translateX(${globalCoords.x - 25}px) translateY(${
          globalCoords.y - 25
        }px)`,
        width: "50px",
        height: "50px",
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
