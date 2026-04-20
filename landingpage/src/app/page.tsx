import { FeaturesCarousel } from "@/components/features-carousel";
import { HeroSection } from "@/components/hero-section";
import { getLandingPageContent } from "@/lib/landing-page-api";

export default async function Home() {
  const { hero, featuresSection } = await getLandingPageContent();

  return (
    <div className="landing-page">
      <div className="landing-page__shell">
        <main className="landing-page__main">
          <HeroSection hero={hero} />
          <FeaturesCarousel section={featuresSection} />
        </main>
      </div>
    </div>
  );
}
