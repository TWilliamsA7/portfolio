import HomepageHero from "@/components/homepage/HomepageHero";
import AboutSection from "@/components/homepage/about-section";
import { FeaturedProjectsSection } from "@/components/projects/featured-projects-section";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceButton from "@/components/homepage/experience-button";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <AboutSection />
      <div className="flex items-center justify-center">
        <ExperienceButton />
      </div>
      <FeaturedProjectsSection />
      <SkillsSection />
    </main>
  );
}
