"use client";

import Image from "next/image";
import { useState } from "react";

import type { FeatureCard, FeaturesSectionContent } from "@/lib/landing-page-api";

function FeatureCardView({ card }: { card: FeatureCard }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
      <div className="relative mt-5 min-h-72 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_15px_40px_-30px_rgba(15,23,42,0.25)]">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </article>
  );
}

export function FeaturesCarousel({ section }: { section: FeaturesSectionContent }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = section.slides[activeSlideIndex];

  function showPreviousSlide() {
    setActiveSlideIndex((currentIndex) =>
      currentIndex === 0 ? section.slides.length - 1 : currentIndex - 1,
    );
  }

  function showNextSlide() {
    setActiveSlideIndex((currentIndex) =>
      currentIndex === section.slides.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div id={section.id} className="space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl lg:text-4xl">
          {section.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {section.description}
        </p>
      </div>

      <div className="mx-auto h-1 w-24 rounded-full bg-slate-200" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activeSlide.cards.map((card) => (
          <FeatureCardView key={`${activeSlide.id}-${card.title}`} card={card} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          aria-label={section.controls.previousLabel}
          onClick={showPreviousSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          ←
        </button>
        <button
          type="button"
          aria-label={section.controls.nextLabel}
          onClick={showNextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          →
        </button>
      </div>
    </div>
  );
}
