// src/components/skills/SkillIcon.tsx

import { Skill } from "@/data/skills";
import { IconType } from "react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GrowOnHover } from "@/components/layout/Animations";

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
        <GrowOnHover scale={1.2} duration={0.1}>
          <TooltipTrigger asChild>
            <Icon className={className} style={{ color: skill.color }} />
          </TooltipTrigger>
        </GrowOnHover>
        <TooltipContent side="top" className="bg-primary-foreground">
          <p className="text-primary">{skill.name}</p>
        </TooltipContent>
        <TooltipContent side="bottom" className="bg-primary-foreground">
          <p className="text-primary">{skill.description}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
