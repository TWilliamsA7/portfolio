// src/components/experience/ExperienceCard.tsx

"use client";

import { Experience } from "@/data/experiences";
import { Card } from "@/components/ui/card";
import SkillIcon from "@/components/skills/SkillIcon";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GrowOnHover } from "../layout/Animations";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <GrowOnHover duration={0.1} scale={1.03}>
      <Card className="overflow-hidden border-none bg-transparent shadow-none">
        <div
          className="relative aspect-[16/9] w-full cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Image Header */}
          <Image
            src={experience.image}
            alt={`${experience.name}-${experience.organization}`}
            fill
            className="object-cover border-2"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ring/80 via-ring/30 to-transparent" />

          {/* Metadata Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  {experience.name}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  {experience.organization}
                </p>
              </div>

              <span className="text-md text-muted-foreground whitespace-nowrap hidden md:block">
                {experience.start_date} - {experience.end_date}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              {/* Add more metadata here */}
              <p className="text-md text-muted-foreground hidden md:block">
                {experience.short_description}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto px-0 text-sm"
              >
                {expanded ? "Hide details" : "Show more"}
              </Button>
            </div>
          </div>
        </div>

        {/* Expansion Details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="bg-card px-6 py-5 rounded-2xl">
                <span className="text-md text-primary whitespace-nowrap md:hidden block font-semibold">
                  {experience.start_date} - {experience.end_date}
                </span>
                <p className="text-sm text-muted-foreground font-semibold mb-2">
                  {experience.long_description}
                </p>
                <h4 className="text-sm text-card-foreground mt-2 mb-1 underline font-semibold">
                  Keypoints:
                </h4>
                <ul className="space-y-2 text-sm">
                  {experience.keypoints.map((keypoint, idx) => (
                    <li key={idx} className="list-disc ml-4">
                      {keypoint}
                    </li>
                  ))}
                </ul>
                <h4 className="text-md text-card-foreground mt-2 mb-1 underline font-semibold">
                  Skills Used:
                </h4>
                <div className="flex my-2 space-x-3 flex-wrap space-y-1">
                  {experience.skills.map((s, idx) => (
                    <SkillIcon key={idx} skill={s} className="h-10 w-10" />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </GrowOnHover>
  );
}
