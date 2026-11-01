import { Container, Eyebrow, Heading, ImageFrame, Reveal, Section } from "@/components/ui";
import type { DesignPhilosophyBlockData } from "@/types/content";
import { formatIndex } from "@/lib/utils";

/** Dark, quiet statement with a wide image and three principles. */
export function DesignPhilosophyBlock({ id, eyebrow, heading, principles, image }: DesignPhilosophyBlockData) {
  const headingId = `${id}-heading`;
  return (
    <Section tone="charcoal" labelledBy={headingId}>
      <Container>
        <Reveal className="max-w-4xl">
          <Eyebrow tone="light" className="mb-8">
            {eyebrow}
          </Eyebrow>
          <Heading level={2} size="h1" id={headingId} className="text-ivory">
            {heading}
          </Heading>
        </Reveal>

        {image ? (
          <Reveal delay={0.1} className="mt-16 md:mt-24">
            <ImageFrame image={image} ratio="21/9" sizes="(min-width: 1440px) 1312px, 100vw" className="bg-walnut" />
          </Reveal>
        ) : null}

        <ol className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8">
          {principles.map((principle, i) => (
            <Reveal as="li" key={principle.title} delay={i * 0.08} className="border-t border-line-inverse pt-8">
              <span className="eyebrow text-stone tabular-nums">{formatIndex(i + 1)}</span>
              <h3 className="mt-6 font-display text-h3 text-ivory">{principle.title}</h3>
              <p className="mt-4 max-w-sm text-sand">{principle.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
