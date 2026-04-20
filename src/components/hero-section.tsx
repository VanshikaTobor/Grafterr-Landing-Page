import type { LandingPageContent } from "@/lib/landing-page-api";

type HeroSectionProps = {
  hero: LandingPageContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          {hero.title.lineOne}
          <span className="hero-section__title-accent">
            {hero.title.lineTwo}
          </span>
        </h1>

        <p className="hero-section__description">
          {hero.description.beforeHighlight}
          <span className="hero-section__description-highlight">{hero.description.highlight}</span>
          {hero.description.afterHighlight}
        </p>

        <div className="hero-section__actions">
          <a href={hero.primaryAction.href} className="hero-button">
            {hero.primaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}
