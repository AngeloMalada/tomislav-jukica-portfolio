"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cursor() {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  //get cursorSlice state from redux store
  const cursor = useSelector((state: any) => state.cursor);

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
      className="hidden  lg:block z-50"
      style={{
        backgroundColor: cursor.backgroundColor,
        mixBlendMode: cursor.blend,
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translateX(${
          globalCoords.x - cursor.halfWidth
        }px) translateY(${globalCoords.y - cursor.halfWidth}px)`,
        width: cursor.width,
        height: cursor.height,
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
