import { FeaturesCarousel } from "@/components/features-carousel";
import { getLandingPageContent } from "@/lib/landing-page-api";

export default async function Home() {
  const { hero, featuresSection } = await getLandingPageContent();

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-12 sm:px-6 lg:px-8">
        <main className="flex flex-1 flex-col gap-16">
          <section className="space-y-10 rounded-4xl border border-slate-200/80 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.25)] sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-base">
                {hero.eyebrow}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
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
