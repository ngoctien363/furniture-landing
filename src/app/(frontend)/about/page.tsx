import type { Metadata } from "next";
import { BrandIntroductionBlock } from "@/blocks/brand-introduction-block";
import { CtaBlock } from "@/blocks/cta-block";
import { DesignPhilosophyBlock } from "@/blocks/design-philosophy-block";
import { PageIntro } from "@/components/layout/page-intro";
import { ProcessSection } from "@/components/sections/process-section";
import { Container, ImageFrame, Reveal } from "@/components/ui";
import { aboutPage } from "@/data/pages/inner-pages";

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
};

export default function AboutPage() {
  const { intro, banner, story, process, philosophy, cta } = aboutPage;
  return (
    <>
      <PageIntro eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede} />
      <Container>
        <Reveal>
          <ImageFrame image={banner} ratio="21/9" sizes="(min-width: 1440px) 1312px, 100vw" preload />
        </Reveal>
      </Container>
      <BrandIntroductionBlock {...story} reverse />
      <ProcessSection id="about-process" {...process} />
      <DesignPhilosophyBlock {...philosophy} />
      <CtaBlock {...cta} />
    </>
  );
}
