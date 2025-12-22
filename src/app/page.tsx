import HomepageHero from "@/components/homepage/HomepageHero";
import MainNavbar from "@/components/main-navbar";
import ResumeButton from "@/components/resume-button";
import AboutSection from "@/components/homepage/about-section";

import { FeaturedProjectsSection } from "@/components/projects/featured-projects-section";

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <HomepageHero />
      <AboutSection />

      <div className="flex items-center justify-center">
        <ResumeButton />
      </div>

      <FeaturedProjectsSection />

      {/* Placeholder content to enable scrolling and test the navbar interaction */}
      <div className="h-[200vh] flex items-center justify-center">
        <h2 className="text-3xl text-muted-foreground">
          More Content Below to Test Scroll...
        </h2>
        <h2 className="text-3xl text-muted-foreground">
          More Content Below to Test Scroll...
        </h2>
      </div>
    </main>
  );
}
