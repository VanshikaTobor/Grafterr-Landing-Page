"use client";

import Image from "next/image";
import { useState } from "react";

import type { FeatureCard, FeaturesSectionContent } from "@/lib/landing-page-api";

function FeatureCardView({ card }: { card: FeatureCard }) {
  return (
    <article className="feature-card">
      <h3 className="feature-card__title">{card.title}</h3>
      <div className="feature-card__media">
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
    <div id={section.id} className="features-section">
      <div className="features-section__header">
        <svg
          viewBox="0 0 36 36"
          aria-hidden="true"
          className="features-section__accent-left"
        >
          <path
            d="M8 13C8 8.03 12.03 4 17 4C20.16 4 22.94 5.64 24.54 8.12L15.73 20.98C11.19 20.35 8 16.45 8 12.44V13Z"
            fill="#62C5E5"
          />
        </svg>
        <div className="features-section__accent-right" />

        <h2 className="features-section__title">
          {titleParts[0]}
          {titleParts.length > 1 ? <span className="features-section__title-accent">Grafterr</span> : null}
          {titleParts[1] ?? ""}
        </h2>
        <p className="features-section__description">
          {section.description}
        </p>
      </div>

      <div className="carousel-progress">
        <div className="carousel-progress__track">
          <div
            className="carousel-progress__thumb"
            style={{
              transform: `translate(${(activeSlideIndex / Math.max(section.slides.length - 1, 1)) * (452 - 68)}px, -50%)`,
            }}
          />
        </div>
      </div>

      <div className="features-section__viewport">
        <div
          className="features-section__track"
          style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
        >
          {section.slides.map((slide) => (
            <div key={slide.id} className="features-section__slide">
              <div className="features-section__grid">
                {slide.cards.map((card) => (
                  <FeatureCardView key={`${slide.id}-${card.title}`} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          aria-label={section.controls.previousLabel}
          onClick={showPreviousSlide}
          disabled={isFirstSlide}
          className="carousel-control"
        >
          ←
        </button>
        <button
          type="button"
          aria-label={section.controls.nextLabel}
          onClick={showNextSlide}
          disabled={isLastSlide}
          className="carousel-control"
        >
          →
        </button>
      </div>
    </div>
  );
}
