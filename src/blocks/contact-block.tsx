import { ButtonLink, ContactAction, Container, Eyebrow, Heading, Reveal, Section, ShowroomAddress } from "@/components/ui";
import { siteConfig } from "@/data/site-config";
import { uiText } from "@/data/ui-text";
import type { ContactBlockData } from "@/types/content";
import { cn } from "@/lib/utils";

function PendingLine({ value, placeholder }: { value: string | null; placeholder: string }) {
  return <p className={cn(!value && "italic opacity-70")}>{value ?? placeholder}</p>;
}

/** Contact channels and showroom details; values come from SiteSettings. */
export function ContactBlock({ id, eyebrow, heading, lede, showShowroom }: ContactBlockData) {
  const headingId = `${id}-heading`;
  const { openingHours, email } = siteConfig.contact;
  const { startProject, bookShowroom } = siteConfig.ctas;

  return (
    <Section tone="paper" spacing="compact" labelledBy={headingId}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <Heading level={2} size="h2" id={headingId}>
              {heading}
            </Heading>
            {lede ? <p className="mt-6 text-walnut">{lede}</p> : null}
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={startProject.href} arrow>
                {startProject.label}
              </ButtonLink>
              {showShowroom ? (
                <ButtonLink href={bookShowroom.href} variant="outline">
                  {bookShowroom.label}
                </ButtonLink>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div className="space-y-6">
              <ContactAction channel="hotline" appearance="row" />
              <ContactAction channel="zalo" appearance="row" />
              <ContactAction channel="facebook" appearance="row" />
              <ContactAction channel="messenger" appearance="row" />
            </div>
            {showShowroom ? (
              <div className="space-y-6 border-t border-line pt-8 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                <div>
                  <p className="eyebrow mb-2 text-taupe-deep">{uiText.footer.showroom}</p>
                  <ShowroomAddress />
                </div>
                <div>
                  <p className="eyebrow mb-2 text-taupe-deep">{uiText.footer.openingHours}</p>
                  <PendingLine {...openingHours} />
                </div>
                <div>
                  <p className="eyebrow mb-2 text-taupe-deep">{uiText.footer.email}</p>
                  <PendingLine {...email} />
                </div>
              </div>
            ) : null}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
