// src/components/experience/ExperienceCard.tsx

import { Experience } from "@/data/experiences";
import { Card } from "@/components/ui/card";
import SkillIcon from "@/components/skills/SkillIcon";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{experience.name}</h3>
          <p className="text-sm text-muted-foreground">
            {experience.organization}
          </p>
        </div>

        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {experience.start_date}-{experience.end_date}
        </span>
      </div>

      <p className="text-sm">{experience.long_description}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {experience.keypoints.map((k, idx) => (
          <li key={idx} className="list-disc ml-4">
            {k}
          </li>
        ))}
      </ul>

      {experience.skills.map((skill, idx) => (
        <SkillIcon skill={skill} key={idx} />
      ))}
    </Card>
  );
}
