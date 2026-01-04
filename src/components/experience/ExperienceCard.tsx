// src/components/experience/ExperienceCard.tsx

"use client";

import { Experience } from "@/data/experiences";
import { Card } from "@/components/ui/card";
import SkillIcon from "@/components/skills/SkillIcon";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "motion/react";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-[180px_1fr]">
        {/* Image */}
        <div className="relative h-40 md:h-full">
          <Image
            src={experience.image}
            alt={`${experience.name}-${experience.organization}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{experience.name}</h3>
              <p className="text-sm text-muted-foreground">
                {experience.organization}
              </p>
            </div>

            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {experience.start_date} - {experience.end_date}
            </span>
          </div>

          <p className="text-sm">{experience.short_description}</p>

          {/* Collapsible Details */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : "4.5rem", opacity: 1 }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-sm">{experience.long_description}</p>

            <ul className="mt-4 space-y-2 text-sm">
              {experience.keypoints.map((k, idx) => (
                <li key={idx} className="list-disc ml-4">
                  {k}
                </li>
              ))}
            </ul>
          </motion.div>

          <Button
            variant="ghost"
            size="sm"
            className="mt-2 px-0"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Read more"}
          </Button>

          {experience.skills.map((skill, idx) => (
            <SkillIcon skill={skill} key={idx} />
          ))}
        </div>
      </div>
    </Card>
  );
}
