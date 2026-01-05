// src/components/three/CameraRig.tsx

"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { PerformanceTier } from "@/components/three/usePerformanceTier";

interface CameraRigProps {
  tier: PerformanceTier;
}

export default function CameraRig({ tier }: CameraRigProps) {
  const { camera } = useThree();

  const scrollProgress: RefObject<number> = useRef<number>(0);
  const targetPosition: RefObject<Vector3> = useRef<Vector3>(new Vector3());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop: number = window.scrollY;
      const maxScroll: number =
        document.documentElement.scrollHeight - window.innerHeight;

      scrollProgress.current = maxScroll > 0 ? scrollTop / maxScroll : 0;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    if (tier === "low") return;

    const depthMultiplier = tier === "medium" ? 0.6 : 1;

    const t: number = scrollProgress.current;

    targetPosition.current.set(
      0,
      3 - t * 2 * depthMultiplier,
      8 - t * 3 * depthMultiplier
    );

    camera.position.lerp(targetPosition.current, 0.1);
    camera.lookAt(0, 1.5, 0);
  });

  return null;
}
