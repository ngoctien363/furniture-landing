import { ButtonLink, Container, Eyebrow, Heading, ImageFrame } from "@/components/ui";
import { uiText } from "@/data/ui-text";
import type { HeroBlockData } from "@/types/content";

/** Full-bleed opening image with headline and two calls to action. */
export function HeroBlock({ eyebrow, heading, subheading, image, primaryCta, secondaryCta }: HeroBlockData) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-charcoal text-ivory h-svh"
    >
      <ImageFrame
        image={image}
        ratio="fill"
        sizes="100vw"
        preload
        className="absolute inset-0 -z-10 bg-charcoal"
        imageClassName="animate-hero-settle"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(37_36_33/0.85)_0%,rgb(37_36_33/0.4)_42%,rgb(37_36_33/0)_70%),linear-gradient(to_bottom,rgb(37_36_33/0.5)_0%,rgb(37_36_33/0)_24%),linear-gradient(to_right,rgb(37_36_33/0.45)_0%,rgb(37_36_33/0)_60%)]"
      />

      <Container className="pb-16 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Eyebrow tone="light" className="mb-8">
              {eyebrow}
            </Eyebrow>
            <Heading level={1} size="display" id="hero-heading" className="max-w-5xl">
              {heading}
            </Heading>
            <p className="mt-8 max-w-xl text-lede text-ivory/85">{subheading}</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonLink href={primaryCta.href} tone="light" arrow>
                {primaryCta.label}
              </ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} tone="light" variant="outline">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div aria-hidden className="hidden flex-col items-end gap-4 lg:col-span-3 lg:flex">
            <span className="eyebrow text-ivory/70">{uiText.scrollDown}</span>
            <span className="relative block h-16 w-px overflow-hidden bg-ivory/20">
              <span className="animate-scroll-cue absolute inset-0 bg-ivory" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
