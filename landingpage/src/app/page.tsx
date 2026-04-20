import { FeaturesCarousel } from "@/components/features-carousel";
import { getLandingPageContent } from "@/lib/landing-page-api";

export default async function Home() {
  const { hero, featuresSection } = await getLandingPageContent();

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-950">
      <div className="flex min-h-screen w-full flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">        
        <main className="flex flex-1 flex-col gap-12 sm:gap-14 lg:gap-16">
<section className="flex min-h-[calc(100vh-80px)] w-full flex-col justify-center space-y-10 bg-white px-4 py-10 sm:px-6 lg:px-12">         
   <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-base">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl  text-slate-950 sm:text-5xl lg:text-6xl font-[Raleway] font-bold text-[75px] leading-23.5 tracking-[-1px] text-center align-middle">
              {hero.title.lineOne}
              <span className="block bg-linear-to-r from-sky-500 via-slate-400 to-amber-400 bg-clip-text text-transparent">
                {hero.title.lineTwo}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {hero.description}
            </p>
            <div className="flex justify-center">
              <a
                href={hero.primaryAction.href}
                className="inline-flex min-w-44 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-amber-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110 sm:px-8"
              >
                {hero.primaryAction.label}
              </a>
            </div>
          </div>

          <FeaturesCarousel section={featuresSection} />
        </section>
      </main>
      </div>
    </div>
  );
}
