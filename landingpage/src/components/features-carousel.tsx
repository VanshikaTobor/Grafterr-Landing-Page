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
      <div className="mx-auto max-w-3xl px-2 text-center sm:px-0">
        <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl lg:text-4xl">
          {section.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {section.description}
        </p>
      </div>

      <div className="mx-auto h-1 w-24 rounded-full bg-slate-200" />

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
