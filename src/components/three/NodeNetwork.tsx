// src/components/three/NodeNetwork.tsx

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";

const NODE_COUNT: number = 800;

export default function NodeNetwork() {
  const ref = useRef<Group | null>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = Math.random() * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <group ref={ref}>
      <Points positions={positions}>
        <PointMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
