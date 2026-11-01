import { Container, Eyebrow, Heading, ImageFrame, Reveal, Section } from "@/components/ui";
import type { WhyChooseUsBlockData } from "@/types/content";
import { formatIndex } from "@/lib/utils";

/** Reasons grid beside a tall image. */
export function WhyChooseUsBlock({ id, eyebrow, heading, lede, items, image }: WhyChooseUsBlockData) {
  const headingId = `${id}-heading`;
  return (
    <Section tone="ivory" labelledBy={headingId}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {image ? (
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <ImageFrame image={image} ratio="4/5" sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
            </Reveal>
          ) : null}

          <div className={image ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-12"}>
            <Reveal>
              <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
              <Heading level={2} id={headingId}>
                {heading}
              </Heading>
              {lede ? <p className="mt-6 text-lede text-walnut">{lede}</p> : null}
            </Reveal>

            <ul className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
              {items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={(i % 2) * 0.08}>
                  <span className="flex items-center gap-4">
                    <span className="eyebrow text-taupe-deep tabular-nums">{formatIndex(i + 1)}</span>
                    <span aria-hidden className="h-px flex-1 bg-line-strong" />
                  </span>
                  <h3 className="mt-6 font-display text-h4">{item.title}</h3>
                  <p className="mt-3 text-walnut">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
