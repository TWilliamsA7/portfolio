// src/components/three/DepthGrid.tsx

import { Grid } from "@react-three/drei";

export default function DepthGrid() {
  return (
    <Grid
      position={[0, -2, 0]}
      args={[20, 20]}
      cellSize={1}
      cellThickness={0.6}
      cellColor="#1f2933"
      sectionSize={5}
      sectionThickness={1}
      sectionColor="#334155"
      fadeDistance={20}
      fadeStrength={1}
    />
  );
}
