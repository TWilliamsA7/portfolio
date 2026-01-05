import HomepageHero from "@/components/homepage/HomepageHero";
import ResumeButton from "@/components/homepage/resume-button";
import AboutSection from "@/components/homepage/about-section";

import { FeaturedProjectsSection } from "@/components/projects/featured-projects-section";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <AboutSection />

      <div className="flex items-center justify-center">
        <ResumeButton />
      </div>

      <FeaturedProjectsSection />

      <SkillsSection />

      <ExperienceSection />
    </main>
  );
}
