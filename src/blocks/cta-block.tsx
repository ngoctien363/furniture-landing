import { ButtonLink, ContactAction, Container, Eyebrow, Heading, ImageFrame, Reveal } from "@/components/ui";
import { getContactHref, getPrimaryChannel } from "@/lib/contact";
import type { CtaBlockData } from "@/types/content";

/**
 * Full-bleed consultation call to action. The hotline button appears only
 * when a real number is configured — no placeholder phone action here.
 */
export function CtaBlock({ id, eyebrow, heading, description, image, primaryCta, secondaryCta, showHotline }: CtaBlockData) {
  const headingId = `${id}-heading`;
  const primaryChannel = getPrimaryChannel();
  const hotlineReady = showHotline && getContactHref(primaryChannel) !== null;

  return (
    <section aria-labelledby={headingId} className="relative isolate overflow-hidden bg-charcoal text-ivory">
      {image ? (
        <>
          <ImageFrame image={image} ratio="fill" sizes="100vw" className="absolute inset-0 -z-10 bg-charcoal" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-charcoal/65" />
        </>
      ) : null}
      <Container className="py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" className="mb-8 justify-center">
            {eyebrow}
          </Eyebrow>
          <Heading level={2} size="h1" id={headingId}>
            {heading}
          </Heading>
          {description ? <p className="mx-auto mt-8 max-w-xl text-lede text-ivory/85">{description}</p> : null}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {hotlineReady ? <ContactAction channel={primaryChannel.id} tone="light" /> : null}
            <ButtonLink href={primaryCta.href} tone="light" variant={hotlineReady ? "outline" : "solid"} arrow>
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} tone="light" variant="outline">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
