import type { LandingPageContent } from "@/lib/landing-page-api";

type HeroSectionProps = {
  hero: LandingPageContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="flex min-h-[calc(100vh-80px)] w-full flex-col justify-center space-y-10 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="max-w-3xl text-[44px] font-bold leading-[1.05] tracking-[-1px] text-center text-slate-950 sm:text-[56px] lg:text-[75px] lg:leading-[94px] font-[family-name:var(--font-raleway)]">
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
            className="inline-flex h-[60px] w-full max-w-[318px] items-center justify-center rounded-[60px] bg-[linear-gradient(90deg,#5895F0_0%,#F1B662_100%)] px-6 text-center font-[family-name:var(--font-raleway)] text-[18px] leading-[1.14] font-bold tracking-[-0.5px] text-white transition hover:brightness-105 sm:w-[318px]"
          >
            {hero.primaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}
