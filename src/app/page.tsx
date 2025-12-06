import AboutSection from "@/components/about-section-v2";
import HomepageHero from "@/components/HomepageHero";
import MainNavbar from "@/components/main-navbar";
import ResumeButton from "@/components/resume-button";

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <HomepageHero />
      <AboutSection />

      <div className="flex items-center justify-center">
        <ResumeButton />
      </div>

      {/* Placeholder content to enable scrolling and test the navbar interaction */}
      <div className="h-[200vh] flex items-center justify-center">
        <h2 className="text-3xl text-muted-foreground">
          More Content Below to Test Scroll...
        </h2>
      </div>
    </main>
  );
}
