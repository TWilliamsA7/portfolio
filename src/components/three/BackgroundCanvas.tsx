// src/components/three/BackgroundCanvas.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "@/components/three/Scene";
import { usePerformanceTier } from "@/components/three/usePerformanceTier";

export default function BackgroundCanvas() {
  const { tier, devicePixelRatio } = usePerformanceTier();

  if (tier === "low") {
    // Potentially render a static background here
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        dpr={Math.min(devicePixelRatio, tier === "medium" ? 1.25 : 1.5)}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <Scene tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
