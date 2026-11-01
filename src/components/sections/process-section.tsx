import { Container, Eyebrow, Heading, PlaceholderNote, Reveal, Section, type SectionTone } from "@/components/ui";
import type { ProcessStep } from "@/types/content";
import { formatIndex } from "@/lib/utils";

interface ProcessSectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
  isPlaceholder: boolean;
  tone?: SectionTone;
}

/** Numbered steps: horizontal timeline on desktop, stacked on mobile. */
export function ProcessSection({ id, eyebrow, heading, steps, isPlaceholder, tone = "ivory-deep" }: ProcessSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <Section tone={tone} labelledBy={headingId}>
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <Heading level={2} id={headingId}>
            {heading}
          </Heading>
          {isPlaceholder ? <PlaceholderNote className="mt-6" /> : null}
        </Reveal>
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.06} className="relative border-t border-line-strong pt-8">
              <span aria-hidden className="absolute -top-[5px] left-0 size-[9px] rounded-full border border-taupe bg-ivory-deep" />
              <span className="eyebrow text-taupe-deep tabular-nums">{formatIndex(i + 1)}</span>
              <h3 className="mt-4 font-display text-h4">{step.title}</h3>
              <p className="mt-3 text-sm text-walnut">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
