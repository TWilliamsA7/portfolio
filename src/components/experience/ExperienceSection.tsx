// src/components/experience/ExperienceSection.tsx

import { experiences } from "@/data/experiences";
import TimelineItem from "@/components/experience/TimelineItem";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-16 text-3xl font-semibold tracking-tight">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
