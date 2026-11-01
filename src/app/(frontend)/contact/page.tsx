import type { Metadata } from "next";
import { ConsultationForm } from "@/components/contact/consultation-form";
import { PageIntro } from "@/components/layout/page-intro";
import { ButtonLink, ContactAction, Container, Eyebrow, Heading, ImageFrame, Reveal, Section } from "@/components/ui";
import { contactPage } from "@/data/pages/inner-pages";
import { siteConfig } from "@/data/site-config";
import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: contactPage.seo.title,
  description: contactPage.seo.description,
};

function Pending({ value, placeholder }: { value: string | null; placeholder: string }) {
  return <p className={cn("mt-2", !value && "italic text-walnut/80")}>{value ?? placeholder}</p>;
}

export default function ContactPage() {
  const { intro, channels, showroom, form } = contactPage;
  const { showroomAddress, openingHours, email } = siteConfig.contact;

  return (
    <>
      <PageIntro eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede} />

      <Section spacing="none" className="pb-section">
        <Container>
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
            {/* Channels + showroom */}
            <div className="space-y-16 lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-6">{channels.eyebrow}</Eyebrow>
                <Heading level={2} size="h3">
                  {channels.heading}
                </Heading>
                <p className="mt-4 text-walnut">{channels.lede}</p>
                <div className="mt-8 flex flex-col gap-3">
                  <ContactAction channel="hotline" className="w-full" />
                  <ContactAction channel="zalo" className="w-full" />
                </div>
                <div className="mt-8 space-y-5 text-sm">
                  <ContactAction channel="facebook" appearance="row" />
                  <ContactAction channel="messenger" appearance="row" />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div id="showroom" className="scroll-mt-28">
                  <ImageFrame image={showroom.image} ratio="3/2" sizes="(min-width: 1024px) 30vw, 100vw" />
                  <Eyebrow className="mb-4 mt-8">{showroom.eyebrow}</Eyebrow>
                  <Heading level={2} size="h3">
                    {showroom.heading}
                  </Heading>
                  <p className="mt-4 text-walnut">{showroom.lede}</p>
                  <dl className="mt-8 space-y-5 border-t border-line pt-6 text-sm">
                    <div>
                      <dt className="eyebrow text-taupe-deep">{uiText.footer.showroom}</dt>
                      <dd>
                        <Pending {...showroomAddress} />
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-taupe-deep">{uiText.footer.openingHours}</dt>
                      <dd>
                        <Pending {...openingHours} />
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-taupe-deep">{uiText.footer.email}</dt>
                      <dd>
                        <Pending {...email} />
                      </dd>
                    </div>
                  </dl>
                  <ButtonLink href="#tu-van" variant="text" arrow className="mt-8">
                    {siteConfig.ctas.bookShowroom.label}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Consultation form */}
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <div id="tu-van" className="scroll-mt-28 border-t border-charcoal pt-10">
                <Eyebrow className="mb-6">{form.eyebrow}</Eyebrow>
                <Heading level={2} size="h2">
                  {form.heading}
                </Heading>
                <p className="mb-12 mt-4 max-w-xl text-walnut">{form.lede}</p>
                <ConsultationForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
