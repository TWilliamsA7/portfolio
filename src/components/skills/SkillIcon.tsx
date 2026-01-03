// src/components/skills/SkillIcon.tsx

import { Skill } from "@/data/skills";
import { IconType } from "react-icons";

export default function SkillIcon({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) {
  const Icon: IconType = skill.icon;

  return <Icon className={className} />;
}
