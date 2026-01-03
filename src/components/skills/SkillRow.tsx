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
      setDirection(-direction);
    }

    container.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div
      className={`relative overflow-hidden flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl text-primary font-bold py-4">{category}</h2>
      <div ref={containerRef} className="flex w-1/2 gap-6 py-4">
        {[...categorySkills, ...categorySkills].map((skill, idx) => (
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
