// src/app/experience/page.tsx

import ExperienceSection from "@/components/experience/ExperienceSection";
import ResumeButton from "@/components/homepage/resume-button";

export default function ExperiencePage() {
  return (
    <>
      <ExperienceSection />
      <div className="flex items-center justify-center">
        <ResumeButton />
      </div>
    </>
  );
}
