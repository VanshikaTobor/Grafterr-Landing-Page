import landingPageContent from "@/data/landing-page.json";

type HeroContent = {
  eyebrow: string;
  title: {
    lineOne: string;
    lineTwo: string;
  };
  description: {
    beforeHighlight: string;
    highlight: string;
    afterHighlight: string;
  };
  primaryAction: {
    label: string;
    href: string;
  };
};

export type FeatureCardVariant = "pos" | "selfService" | "kitchenManagement";

export type FeatureCard = {
  title: string;
  variant: FeatureCardVariant;
  image: {
    src: string;
    alt: string;
  };
};

type FeatureSlide = {
  id: string;
  cards: FeatureCard[];
};

export type FeaturesSectionContent = {
  id: string;
  title: string;
  description: string;
  slides: FeatureSlide[];
  controls: {
    previousLabel: string;
    nextLabel: string;
  };
};

export type LandingPageContent = {
  hero: HeroContent;
  featuresSection: FeaturesSectionContent;
};

const SIMULATED_API_DELAY_MS = 250;
const FEATURE_CARD_VARIANTS: FeatureCardVariant[] = ["pos", "selfService", "kitchenManagement"];

function isFeatureCardVariant(value: string): value is FeatureCardVariant {
  return FEATURE_CARD_VARIANTS.includes(value as FeatureCardVariant);
}

function parseLandingPageContent(payload: typeof landingPageContent): LandingPageContent {
  return {
    hero: payload.hero,
    featuresSection: {
      ...payload.featuresSection,
      slides: payload.featuresSection.slides.map((slide) => ({
        ...slide,
        cards: slide.cards.map((card) => {
          if (!isFeatureCardVariant(card.variant)) {
            throw new Error(`Unsupported feature card variant: ${card.variant}`);
          }

          return {
            ...card,
            variant: card.variant,
          };
        }),
      })),
    },
  };
}

export async function getLandingPageContent(): Promise<LandingPageContent> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_API_DELAY_MS));

  return parseLandingPageContent(landingPageContent);
}
