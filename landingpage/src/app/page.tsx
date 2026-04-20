import { FeaturesCarousel } from "@/components/features-carousel";
import { HeroSection } from "@/components/hero-section";
import { getLandingPageContent } from "@/lib/landing-page-api";

export default async function Home() {
  const { hero, featuresSection } = await getLandingPageContent();

  return (
    <div className="min-h-screen w-full bg-white text-slate-950">
      <div className="flex min-h-screen w-full flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
        <main className="flex flex-1 flex-col gap-12 sm:gap-14 lg:gap-16">
          <HeroSection hero={hero} />
          <FeaturesCarousel section={featuresSection} />
      </main>
      </div>
    </div>
  );
}
