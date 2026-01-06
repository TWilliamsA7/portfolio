// src/components/skills/SkillsSection.tsx

import { SkillTypes } from "@/data/skills";
import { SkillsRow } from "@/components/skills/SkillRow";
import { Separator } from "@/components/ui/separator";

export default function SkillsSection() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold text-primary text-center underline uppercase py-3 my-4">
        Skills
      </h1>
      {SkillTypes.map((st, idx) => (
        <SkillsRow category={st} key={idx} index={idx} />
      ))}
    </section>
  );
}
