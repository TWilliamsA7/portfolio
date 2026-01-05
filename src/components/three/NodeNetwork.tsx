// src/components/three/NodeNetwork.tsx

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";

const NODE_COUNT: number = 800;
const MAX_DISTANCE: number = 1;
const MAX_CONNECTIONS_PER_NODE: number = 3;

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

  const connectionPositions = useMemo(() => {
    const connections: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      let connectionsForNode: number = 0;

      const ix: number = positions[i * 3];
      const iy: number = positions[i * 3 + 1];
      const iz: number = positions[i * 3 + 2];

      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (connectionsForNode >= MAX_CONNECTIONS_PER_NODE) break;

        const jx: number = positions[j * 3];
        const jy: number = positions[j * 3 + 1];
        const jz: number = positions[j * 3 + 2];

        const dx: number = ix - jx;
        const dy: number = iy - jy;
        const dz: number = iz - jz;

        const distance: number = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < MAX_DISTANCE) {
          connections.push(ix, iy, iz);
          connections.push(jx, jy, jz);
          connectionsForNode++;
        }
      }
    }

    return new Float32Array(connections);
  }, [positions]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <group ref={ref}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            args={[connectionPositions, 3]}
            attach="attributes-position"
          />
        </bufferGeometry>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.15} />
      </lineSegments>

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
