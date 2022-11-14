"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Mesh, NormalMapTypes, TextureLoader } from "three";
import { a } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";

import Elf from "./Elf.js";
import Undercity from "./Undercity.js";

type Props = {};

const Three = (props: Props) => {
  const animatedMaterial = a(MeshDistortMaterial);
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

  useFrame(({ clock }) => {
    // sphereRef.current.rotation.z = globalCoords.y * 0.001;
    sphereRef.current.rotation.y += 0.2 * clock.getElapsedTime();
    sphereRef.current.rotation.y +=
      globalCoords.x * 0.001 - Math.PI / 4 - sphereRef.current.rotation.y * 0.5;
    console.log(sphereRef.current.rotation.y);
    sphereRef.current.rotation.x = 0.001 * globalCoords.y - Math.PI / 4;
  });
  return (
    <>
      {/* <Undercity position={[0, -100, -200]} scale={0.5} /> */}
      {/* <Elf /> */}
      <ambientLight intensity={0.5} color={"#0000ff"} />
      <mesh ref={sphereRef} position={[0, -2, 0]} scale={2}>
        <pointLight position={[-10, 0, 0]} intensity={1} color={"#ff0000"} />
        <sphereGeometry args={[1, 64, 64]} />
        {/* <meshStandardMaterial
          attach="material"
          color="white"
          normalMap={normal}
          metalness={0.2}
        /> */}
        <MeshDistortMaterial distort={0.5} speed={0.5} />
        {/* <Elf /> */}
      </mesh>
    </>
  );
};

export default Three;

// import * as THREE from 'three'
// import React, { Suspense, useEffect, useState, useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
// import { useSpring } from '@react-spring/core'
// import { a } from '@react-spring/three'

// // React-spring animates native elements, in this case <mesh/> etc,
// // but it can also handle 3rd–party objs, just wrap them in "a".
// const AnimatedMaterial = a(MeshDistortMaterial)

// export default function Scene({ setBg }) {
//   const sphere = useRef()
//   const light = useRef()
//   const [mode, setMode] = useState(false)
//   const [down, setDown] = useState(false)
//   const [hovered, setHovered] = useState(false)

//   // Change cursor on hovered state
//   useEffect(() => {
//     document.body.style.cursor = hovered
//       ? 'none'
//       : `url('data:image/svg+xml;base64,${btoa(
//           '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
//         )}'), auto`
//   }, [hovered])

//   // Make the bubble float and follow the mouse
//   // This is frame-based animation, useFrame subscribes the component to the render-loop
//   useFrame((state) => {
//     light.current.position.x = state.mouse.x * 20
//     light.current.position.y = state.mouse.y * 20
//     if (sphere.current) {
//       sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
//       sphere.current.position.y = THREE.MathUtils.lerp(
//         sphere.current.position.y,
//         Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
//         0.2
//       )
//     }
//   })

//   // Springs for color and overall looks, this is state-driven animation
//   // React-spring is physics based and turns static props into animated values
//   const [{ wobble, coat, color, ambient, env }] = useSpring(
//     {
//       wobble: down ? 1.2 : hovered ? 1.05 : 1,
//       coat: mode && !hovered ? 0.04 : 1,
//       ambient: mode && !hovered ? 1.5 : 0.5,
//       env: mode && !hovered ? 0.4 : 1,
//       color: hovered ? '#E8B059' : mode ? '#202020' : 'white',
//       config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
//     },
//     [mode, hovered, down]
//   )

//   return (
//     <>
//       <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
//         <a.ambientLight intensity={ambient} />
//         <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
//       </PerspectiveCamera>
//       <Suspense fallback={null}>
//         <a.mesh
//           ref={sphere}
//           scale={wobble}
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//           onPointerDown={() => setDown(true)}
//           onPointerUp={() => {
//             setDown(false)
//             // Toggle mode between dark and bright
//             setMode(!mode)
//             setBg({ background: !mode ? '#202020' : '#f0f0f0', fill: !mode ? '#f0f0f0' : '#202020' })
//           }}>
//           <sphereBufferGeometry args={[1, 64, 64]} />
//           <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
//         </a.mesh>
//         <Environment preset="warehouse" />
//         <ContactShadows
//           rotation={[Math.PI / 2, 0, 0]}
//           position={[0, -1.6, 0]}
//           opacity={mode ? 0.8 : 0.4}
//           width={15}
//           height={15}
//           blur={2.5}
//           far={1.6}
//         />
//       </Suspense>
//     </>
//   )
// }
