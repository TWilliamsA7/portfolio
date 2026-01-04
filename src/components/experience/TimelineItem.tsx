// src/components/experience/TimelineItem.tsx

"use client";

import { Experience } from "@/data/experiences";
import { motion } from "motion/react";
import ExperienceCard from "@/components/experience/ExperienceCard";

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-12">
      {/* Dot */}
      <span className="absolute left-3 top-6 h-3 w-3 rounded-full bg-primary" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ExperienceCard experience={experience} />
      </motion.div>
    </div>
  );
}
