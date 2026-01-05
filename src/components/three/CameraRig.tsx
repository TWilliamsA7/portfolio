// src/components/three/CameraRig.tsx

"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";
import { Vector3 } from "three";

export default function CameraRig() {
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
    const t: number = scrollProgress.current;

    targetPosition.current.set(0, 3 - t * 1.5, 8 - t * 2.5);

    camera.position.lerp(targetPosition.current, 0.05);
    camera.lookAt(0, 1.5, 0);
  });

  return null;
}
