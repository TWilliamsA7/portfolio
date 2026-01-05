// src/components/three/Scene.tsx

import DepthGrid from "@/components/three/DepthGrid";
import NodeNetwork from "@/components/three/NodeNetwork";
import CameraRig from "@/components/three/CameraRig";

export default function Scene() {
  return (
    <>
      <CameraRig />
      <DepthGrid />
      <NodeNetwork />
    </>
  );
}
