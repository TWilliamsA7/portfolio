
import HomepageHero from "@/components/HomepageHero";
import { MainNavbar } from "@/components/main-navbar";

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <HomepageHero />

      {/* Placeholder content to enable scrolling and test the navbar interaction */}
      <div className="h-[200vh] flex items-center justify-center">
        <h2 className="text-3xl text-muted-foreground">More Content Below to Test Scroll...</h2>
      </div>
    </main>
  );
}
