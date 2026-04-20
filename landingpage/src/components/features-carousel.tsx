"use client";

import Image from "next/image";
import { useState } from "react";

import type { FeatureCard, FeaturesSectionContent } from "@/lib/landing-page-api";

function FeatureCardView({ card }: { card: FeatureCard }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/70 sm:p-5">
      <h3 className="text-base font-semibold text-slate-950 sm:text-lg">{card.title}</h3>
      <div className="relative mt-4 aspect-[5/6] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_15px_40px_-30px_rgba(15,23,42,0.25)] sm:mt-5 md:aspect-[4/5] lg:aspect-[5/6]">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </article>
  );
}

export function FeaturesCarousel({ section }: { section: FeaturesSectionContent }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const isFirstSlide = activeSlideIndex === 0;
  const isLastSlide = activeSlideIndex === section.slides.length - 1;
  const titleParts = section.title.split("Grafterr");

  function showPreviousSlide() {
    if (isFirstSlide) {
      return;
    }

    setActiveSlideIndex((currentIndex) => currentIndex - 1);
  }

  function showNextSlide() {
    if (isLastSlide) {
      return;
    }

    setActiveSlideIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <div id={section.id} className="space-y-8">
      <div className="relative mx-auto max-w-4xl px-2 py-4 text-center sm:px-0">
        <svg
          viewBox="0 0 36 36"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1 h-[14px] w-[14px] sm:left-[2%] sm:top-0 sm:h-[18px] sm:w-[18px] md:left-[3%] md:h-[24px] md:w-[24px] lg:left-[0%] lg:h-[62px] lg:w-[62px]"
        >
          <path
            d="M8 13C8 8.03 12.03 4 17 4C20.16 4 22.94 5.64 24.54 8.12L15.73 20.98C11.19 20.35 8 16.45 8 12.44V13Z"
            fill="#62C5E5"
          />
        </svg>
        <div
          className="pointer-events-none absolute right-0 top-3 h-[16px] w-[16px] -rotate-[8deg] bg-[#F05A4A] sm:right-[2%] sm:top-3 sm:h-[22px] sm:w-[22px] md:right-[3%] md:top-4 md:h-[26px] md:w-[26px] lg:right-[0%] lg:top-5 lg:h-[22px] lg:w-[22px]"
          style={{ clipPath: "path('M12 4C23 -3 39 -1 54 6L44 58L0 44C2 28 5 14 12 4Z')" }}
        />

        <h2 className="mx-auto max-w-6xl px-8 text-center font-[family-name:var(--font-raleway)] text-[32px] leading-[1.18] font-semibold tracking-[-0.035em] text-[#1A1A1A] sm:px-12 sm:text-[40px] md:px-16 md:text-[46px] lg:px-0 lg:text-[54px] lg:leading-[68px]">
          {titleParts[0]}
          {titleParts.length > 1 ? <span className="text-[#777777]">Grafterr</span> : null}
          {titleParts[1] ?? ""}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center font-[family-name:var(--font-raleway)] text-[18px] leading-[30px] font-normal tracking-[-0.02em] text-[#777777] sm:text-[20px] sm:leading-[34px]">
          {section.description}
        </p>
      </div>

      <div className="mx-auto w-full max-w-[452px] px-4">
        <div className="relative h-px w-full bg-slate-400">
          <div
            className="absolute top-1/2 h-[4px] w-[68px] -translate-y-1/2 rounded-full bg-slate-900 transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${(activeSlideIndex / Math.max(section.slides.length - 1, 1)) * (452 - 68)}px, -50%)`,
            }}
          />
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
        >
          {section.slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0">
              <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
                {slide.cards.map((card) => (
                  <FeatureCardView key={`${slide.id}-${card.title}`} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          aria-label={section.controls.previousLabel}
          onClick={showPreviousSlide}
          disabled={isFirstSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 sm:h-12 sm:w-12"
        >
          ←
        </button>
        <button
          type="button"
          aria-label={section.controls.nextLabel}
          onClick={showNextSlide}
          disabled={isLastSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 sm:h-12 sm:w-12"
        >
          →
        </button>
      </div>
    </div>
  );
}
