import type { Metadata } from "next";
import { CtaBlock } from "@/blocks/cta-block";
import { PageIntro } from "@/components/layout/page-intro";
import { ProcessSection } from "@/components/sections/process-section";
import { ButtonLink, Container, Heading, ImageFrame, PlaceholderNote, Reveal } from "@/components/ui";
import { servicesPage } from "@/data/pages/inner-pages";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { cn, formatIndex } from "@/lib/utils";

export const metadata: Metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
};

export default function ServicesPage() {
  const { intro, benefitsLabel, serviceCtaLabel, process, cta } = servicesPage;
  const anyPlaceholder = services.some((s) => s.isPlaceholder);

  return (
    <>
      <PageIntro eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede}>
        <nav aria-label={intro.eyebrow}>
          <ol className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.slug}`} className="link-underline text-sm text-walnut hover:text-charcoal">
                  <span className="eyebrow mr-3 text-taupe-deep tabular-nums">{formatIndex(service.order)}</span>
                  {service.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        {anyPlaceholder ? <PlaceholderNote className="mt-6" /> : null}
      </PageIntro>

      <div className="pb-section">
        {services.map((service, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.slug}
              aria-labelledby={`${service.slug}-heading`}
              className="scroll-mt-24 py-section-sm"
            >
              <Container>
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
                  <Reveal className={cn("lg:col-span-6", reverse && "lg:order-2 lg:col-start-7")}>
                    <ImageFrame
                      image={service.image}
                      ratio="4/5"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      preload={i === 0}
                    />
                  </Reveal>
                  <Reveal
                    delay={0.1}
                    className={cn("lg:col-span-5", reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}
                  >
                    <p className="eyebrow text-taupe-deep tabular-nums">{formatIndex(service.order)}</p>
                    <Heading level={2} size="h2" id={`${service.slug}-heading`} className="mt-6">
                      {service.title}
                    </Heading>
                    <p className="mt-6 text-lede text-walnut">{service.summary}</p>
                    <p className="mt-6 text-walnut">{service.description}</p>
                    <h3 className="eyebrow mt-10 text-taupe-deep">{benefitsLabel}</h3>
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-4 py-4">
                          <span aria-hidden className="size-1.5 rounded-full bg-taupe" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <ButtonLink href={siteConfig.ctas.startProject.href} variant="text" arrow className="mt-10">
                      {serviceCtaLabel}
                    </ButtonLink>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <ProcessSection id="services-process" {...process} />
      <CtaBlock {...cta} />
    </>
  );
}
