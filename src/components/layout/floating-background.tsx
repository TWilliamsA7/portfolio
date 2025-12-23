"use client";

import { motion, type Variants } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

const LIGHT_ORB_CLASSES = [
  "bg-primary",   
  "bg-secondary",
  "bg-accent",
  "bg-muted-foreground",
];

// Use bright, light colors for high contrast in dark mode
const DARK_ORB_CLASSES = [
  "dark:bg-primary/50",
  "dark:bg-secondary",
  "dark:bg-accent",
  "dark:bg-muted-foreground",
];

const STARTING_POSITIONS: { x: number, y: number }[] = [
    { x: 20, y: 20 },
    { x: 20, y: 80 },
    { x: 80, y: 20 },
    { x: 80, y: 80 }
]

const ORB_CLASSES = LIGHT_ORB_CLASSES.map((lightClass, index) => 
  `${lightClass} ${DARK_ORB_CLASSES[index]}`
);

// Helper function to generate a random number within a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Structure for a single orb's data
interface OrbData {
  key: number;
  color: string;
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
}

// --- Component to generate a single Orb's JSX ---
const Orb = memo(({ data }: { data: OrbData }) => {
  const { color, size, initialX, initialY, duration } = data;

  const orbVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.4,
      x: [0, random(-size * 0.2, size * 0.2), 0],
      y: [0, random(-size * 0.2, size * 0.2), 0],
      scale: [1, random(1.05, 1.15), 1],
      transition: {
        opacity: { duration: 2 },
        x: { repeat: Infinity, duration: duration, ease: "easeInOut" },
        y: { repeat: Infinity, duration: duration * 0.8, ease: "easeInOut" },
        scale: { repeat: Infinity, duration: duration * 0.5, ease: "easeInOut" },
      }
    }
  };

  return (
    <motion.div
      className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl ${color}`}
      style={{
        width: size,
        height: size,
        left: `${initialX}vw`, 
        top: `${initialY}vh`,
      }}
      variants={orbVariants}
      initial="initial"
      animate="animate"
    />
  );
});
Orb.displayName = "Orb";


// --- Main Floating Background Component ---
const NUM_ORBS = 4;
export function FloatingBackground() {
  const [orbData, setOrbData] = useState<OrbData[] | null>(null);

  useEffect(() => {
    // This code only runs on the client after mount/hydration
    const data: OrbData[] = Array.from({ length: NUM_ORBS }).map((_, index) => ({
      key: index,
      color: ORB_CLASSES[index % ORB_CLASSES.length],
      size: random(150, 400),
      initialX: STARTING_POSITIONS[index].x + random(-10, 10),
      initialY: STARTING_POSITIONS[index].y + random(-10, 10),
      duration: random(20, 40),
    }));
    setOrbData(data);
  }, []); // Empty dependency array ensures it runs only once

  if (!orbData) {
    // Server and initial client render an empty background div
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1] bg-background" />
    );
  }

  // Once data is set, render the animated orbs
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1] bg-background">
      {orbData.map(data => (
        <Orb key={data.key} data={data} />
      ))}
    </div>
  );
}