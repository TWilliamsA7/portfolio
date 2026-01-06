// src/components/three/NodeNetwork.tsx

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";
import { PerformanceTier } from "@/components/three/usePerformanceTier";
import { useTheme } from "next-themes";

const MAX_DISTANCE: number = 1;

interface NodeNeworkProps {
  tier: PerformanceTier;
}

const SETTINGS = {
  high: {
    nodes: 900,
    maxConnections: 3,
  },
  medium: {
    nodes: 500,
    maxConnections: 2,
  },
  low: {
    nodes: 200,
    maxConnections: 1,
  },
} as const;

export default function NodeNetwork({ tier }: NodeNeworkProps) {
  const { theme } = useTheme();
  const ref = useRef<Group | null>(null);
  const { nodes, maxConnections } = SETTINGS[tier];

  const positions = useMemo(() => {
    const arr = new Float32Array(nodes * 3);

    for (let i = 0; i < nodes; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = Math.random() * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }

    return arr;
  }, []);

  const connectionPositions = useMemo(() => {
    const connections: number[] = [];

    for (let i = 0; i < nodes; i++) {
      let connectionsForNode: number = 0;

      const ix: number = positions[i * 3];
      const iy: number = positions[i * 3 + 1];
      const iz: number = positions[i * 3 + 2];

      for (let j = i + 1; j < nodes; j++) {
        if (connectionsForNode >= maxConnections) break;

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
        <lineBasicMaterial
          color={theme === "dark" ? "#60a5fa" : "#000000"}
          transparent
          opacity={0.15}
        />
      </lineSegments>

      <Points positions={positions}>
        <PointMaterial
          size={0.05}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
