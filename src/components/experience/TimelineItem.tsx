// src/components/experience/TimelineItem.tsx

"use client";

import { useInView, motion } from "motion/react";
import { useRef } from "react";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { Experience } from "@/data/experiences";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="relative pl-12">
      <span
        className={`
          absolute left-3 top-6 h-3 w-3 rounded-full transition-colors
          ${isInView ? "bg-primary" : "bg-muted"}
        `}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <ExperienceCard experience={experience} />
      </motion.div>
    </div>
  );
}
