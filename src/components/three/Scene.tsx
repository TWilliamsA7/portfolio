// src/components/three/Scene.tsx

import DepthGrid from "@/components/three/DepthGrid";
import NodeNetwork from "@/components/three/NodeNetwork";
import CameraRig from "@/components/three/CameraRig";
import { PerformanceTier } from "@/components/three/usePerformanceTier";

interface SceneProps {
  tier: PerformanceTier;
}

export default function Scene({ tier }: SceneProps) {
  return (
    <>
      <CameraRig tier={tier} />
      <DepthGrid />
      <NodeNetwork tier={tier} />
    </>
  );
}
