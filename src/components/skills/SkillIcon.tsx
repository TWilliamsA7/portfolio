// src/components/skills/SkillIcon.tsx

import { Skill } from "@/data/skills";
import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SkillIcon({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) {
  const Icon: IconType = skill.icon;

  return (
    <div>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Icon className={className} />
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{skill.name}</p>
        </TooltipContent>
        <TooltipContent side="bottom">
          <p>{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
