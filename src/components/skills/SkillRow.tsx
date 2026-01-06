// src/components/skills/SkillRow.tsx

"use client";

import { Skill, skills, SkillType } from "@/data/skills";
import { useAnimationFrame, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import SkillIcon from "@/components/skills/SkillIcon";
import { cn } from "@/lib/utils";

interface SkillsRowProps {
  index: number;
  category: SkillType;
  className?: string;
}

export function SkillsRow({ category, className, index }: SkillsRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);
  const [shouldScroll, setShouldScroll] = useState(false);

  const x = useRef(0);
  const shouldUseReducedMotion = useReducedMotion();

  const categorySkills: Skill[] = skills.filter(
    (s) => s.skill_type === category
  );
  const displaySkills: Skill[] = shouldScroll
    ? [...categorySkills, ...categorySkills]
    : categorySkills;

  const MIN_ICONS_FOR_SCROLL: number = 6;

  useEffect(() => {
    setShouldScroll(
      !shouldUseReducedMotion && categorySkills.length > MIN_ICONS_FOR_SCROLL
    );
  }, [categorySkills]);

  useEffect(() => {
    setDirection(index % 2 ? -1 : 1);
  }, [index]);

  useAnimationFrame((_, delta) => {
    if (isHovered || !shouldScroll) return;

    const speed = 0.03 * direction;
    x.current += speed * delta;

    const container = containerRef.current;
    if (!container) return;

    const width = container.scrollWidth / 2;

    if (direction < 0 && x.current <= -width) {
      x.current = 0;
    }

    if (direction > 0 && x.current >= 0) {
      x.current = -width;
    }

    container.style.transform = `translateX(${x.current}px)`;
  });

  if (displaySkills.length === 0) {
    return null;
  }

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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-transparent z-10" />

        {/* Scrolling track */}
        <div
          ref={containerRef}
          className={cn(
            "flex gap-8 py-4",
            shouldScroll ? "w-max" : "w-full justify-center"
          )}
        >
          {displaySkills.map((skill, idx) => (
            <SkillIcon
              key={`${skill.name}-${idx}`}
              skill={skill}
              className={`h-10 w-10`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
