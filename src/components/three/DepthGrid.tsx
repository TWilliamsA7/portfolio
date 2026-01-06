// src/components/three/DepthGrid.tsx

import { Grid } from "@react-three/drei";
import { useTheme } from "next-themes";

export default function DepthGrid() {
  const { theme } = useTheme();

  return (
    <Grid
      position={[0, -2, 0]}
      args={[20, 20]}
      cellSize={1}
      cellThickness={0.6}
      cellColor={theme === "dark" ? "#ffffff" : "#000000"}
      sectionSize={5}
      sectionThickness={1}
      sectionColor={theme === "dark" ? "#ffffff" : "#000000"}
      fadeDistance={20}
      fadeStrength={1}
    />
  );
}
