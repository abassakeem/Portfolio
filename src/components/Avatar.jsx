import React, { Suspense } from "react";

import Akeem from "./../Akeem";

import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader";
export default function Avatar() {
  return (
    <div className="vh-50  avatar-container ">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [2.2, 5, 8.9], fov: 13 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <directionalLight intensity={1} />

        <pointLight intensity={1} />

        <Suspense fallback={<CanvasLoader />}>
          <Akeem />
        </Suspense>

        <ambientLight intensity={0.2} />
        <Preload all />
      </Canvas>
    </div>
  );
}
