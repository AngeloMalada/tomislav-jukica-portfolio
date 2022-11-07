"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Mesh, NormalMapTypes, TextureLoader } from "three";
import NormalMap from "/NormalMap.png";

type Props = {};

const Three = (props: Props) => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const normal = useLoader(TextureLoader, "/8ckF1.jpg");
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
  const sphereRef = useRef<Mesh>(null!);

  useFrame(() => {
    sphereRef.current.rotation.x = globalCoords.y * 0.005;

    sphereRef.current.rotation.y = -globalCoords.x * 0.005;
  });
  return (
    <>
      <Stars />
      <pointLight position={[10, 0, 0]} intensity={1} color={"#ff0000"} />
      <pointLight position={[-10, 0, 0]} intensity={1} color={"#0000ff"} />

      <mesh ref={sphereRef} scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          normalMap={normal}
          metalness={0.2}
        />
      </mesh>
    </>
  );
};

export default Three;
