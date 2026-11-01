import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink, Container, Eyebrow, Heading, ImageFrame, Reveal, Section } from "@/components/ui";
import { services } from "@/data/services";
import type { ServicesBlockData } from "@/types/content";
import { formatIndex } from "@/lib/utils";

/** Sticky introduction beside an indexed list of services. */
export function ServicesBlock({ id, eyebrow, heading, lede, serviceIds, cta }: ServicesBlockData) {
  const headingId = `${id}-heading`;
  const list = serviceIds.length
    ? serviceIds.map((sid) => services.find((s) => s.id === sid)).filter((s) => s !== undefined)
    : services;

  return (
    <Section tone="ivory-deep" labelledBy={headingId}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
              <Heading level={2} id={headingId}>
                {heading}
              </Heading>
              {lede ? <p className="mt-6 text-lede text-walnut">{lede}</p> : null}
              {cta ? (
                <ButtonLink href={cta.href} variant="outline" arrow className="mt-10">
                  {cta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <ol className="border-t border-line-strong lg:col-span-7 lg:col-start-6">
            {list.map((service, i) => (
              <Reveal as="li" key={service.id} delay={i * 0.05} className="border-b border-line-strong">
                <Link
                  href={`/services#${service.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-6 gap-y-4 py-10 md:grid-cols-[3rem_1fr_9rem_auto] md:gap-x-8"
                >
                  <span className="eyebrow pt-2 text-taupe-deep tabular-nums">{formatIndex(service.order)}</span>
                  <span>
                    <span className="block font-display text-h3 transition-transform duration-700 ease-luxe group-hover:translate-x-2">
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-md text-walnut">{service.summary}</span>
                  </span>
                  <span className="hidden overflow-hidden md:block">
                    <ImageFrame
                      image={service.image}
                      ratio="4/5"
                      sizes="9rem"
                      className="opacity-0 transition-opacity duration-700 ease-luxe group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.25}
                    className="mt-2 size-6 text-taupe-deep transition-transform duration-500 ease-luxe group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-charcoal"
                  />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
