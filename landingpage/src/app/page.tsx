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
            
            <h1 className="max-w-3xl text-4xl  text-slate-950 sm:text-5xl lg:text-6xl font-[Raleway] font-bold text-[75px] leading-23.5 tracking-[-1px] text-center align-middle">
              {hero.title.lineOne}
                <span className="block bg-[linear-gradient(90deg,#5895F0_0%,#F1B662_100%)] bg-clip-text text-transparent">
                  {hero.title.lineTwo}
                </span>
            </h1>
              <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-raleway)] text-[24px] leading-[38px] font-normal tracking-[-0.01em] text-[#1A1A1ADD]">
                {hero.description.beforeHighlight}
                <span className="font-bold">{hero.description.highlight}</span>
                {hero.description.afterHighlight}
              </p>
              <div className="flex justify-center">
                <a
                  href={hero.primaryAction.href}
                  className="inline-flex h-[60px] w-full max-w-[318px] items-center justify-center rounded-[60px] bg-[linear-gradient(90deg,#5895F0_0%,#F1B662_100%)] px-6 text-center font-[family-name:var(--font-raleway)] text-[18px] leading-[1.14] font-bold tracking-[-0.5px] text-white opacity-100 transition hover:brightness-105 sm:w-[318px]"
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
