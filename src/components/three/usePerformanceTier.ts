// src/components/three/usePerformanceTier.ts

export type PerformanceTier = "low" | "medium" | "high";

export interface PerformanceCapabilities {
  isTouch: boolean;
  cores: number;
  memoryGB: number;
  devicePixelRatio: number;
  tier: PerformanceTier;
}

export function detectPerformance(): PerformanceCapabilities {
  const isTouch: boolean =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const cores: number =
    typeof navigator !== "undefined" && navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency
      : 4;

  const memoryGB: number =
    typeof navigator !== "undefined" &&
    "deviceMemory" in navigator &&
    typeof navigator.deviceMemory === "number"
      ? navigator.deviceMemory
      : 4;

  const devicePixelRatio: number =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  let tier: PerformanceTier = "high";

  if (isTouch && (cores <= 4 || memoryGB <= 4)) {
    tier = "low";
  } else if (isTouch || cores <= 6) {
    tier = "medium";
  }

  return {
    isTouch,
    cores,
    memoryGB,
    devicePixelRatio,
    tier,
  };
}

import { useEffect, useState } from "react";

export function usePerformanceTier(): PerformanceCapabilities {
  const [caps, setCaps] = useState<PerformanceCapabilities>(() =>
    detectPerformance()
  );

  useEffect(() => {
    const onResize = () => {
      setCaps(detectPerformance());
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return caps;
}
