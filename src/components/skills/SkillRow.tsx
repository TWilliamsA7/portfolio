// src/components/skills/SkillRow.tsx

"use client";

import { Skill, skills, SkillType } from "@/data/skills";
import { useAnimationFrame } from "motion/react";
import { useRef, useState } from "react";
import SkillIcon from "@/components/skills/SkillIcon";

interface SkillsRowProps {
  category: SkillType;
  className?: string;
}

export function SkillsRow({ category, className }: SkillsRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);

  const x = useRef(0);
  const categorySkills: Skill[] = skills.filter(
    (s) => s.skill_type === category
  );

  useAnimationFrame((_, delta) => {
    if (isHovered) return;

    const speed = 0.03 * direction;
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
      className={`flex flex-col items-center gap-4 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-center">
        {category}
      </h2>
      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div ref={containerRef} className="flex w-max gap-8 py-4">
          {[...categorySkills, ...categorySkills].map((skill, idx) => (
            <SkillIcon
              key={`${skill.name}-${idx}`}
              skill={skill}
              className="h-10 w-10 text-muted-foreground hover:text-primary"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
