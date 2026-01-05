// src/components/three/BackgroundCanvas.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "@/components/three/Scene";

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
