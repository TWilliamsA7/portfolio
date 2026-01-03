// src/components/skills/SkillRow.tsx

"use client";

import { skills } from "@/data/skills";
import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";
import SkillIcon from "@/components/skills/SkillIcon";

export function SkillsRow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const x = useRef(0);

  useAnimationFrame((_, delta) => {
    if (isHovered) return;

    const speed = 0.03;
    x.current -= speed * delta;

    const container = containerRef.current;
    if (!container) return;

    const width = container.scrollWidth / 2;

    if (Math.abs(x.current) >= width) {
      x.current = 0;
    }

    container.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={containerRef} className="flex -w-max gap-6 py-4">
        {skills.map((skill, idx) => (
          <SkillIcon
            key={`${skill.name}-${idx}`}
            skill={skill}
            className="m-2 text-primary h-8 w-8"
          />
        ))}
      </div>
    </div>
  );
}
