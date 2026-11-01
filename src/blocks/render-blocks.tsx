import type { HomeBlock } from "@/types/content";
import { BrandIntroductionBlock } from "./brand-introduction-block";
import { ContactBlock } from "./contact-block";
import { CtaBlock } from "./cta-block";
import { DesignPhilosophyBlock } from "./design-philosophy-block";
import { FeaturedProjectsBlock } from "./featured-projects-block";
import { HeroBlock } from "./hero-block";
import { ServicesBlock } from "./services-block";
import { WhyChooseUsBlock } from "./why-choose-us-block";

/**
 * Controlled block renderer (ARCHITECTURE §5). Only known block types render;
 * hidden blocks are skipped; no arbitrary HTML is ever rendered.
 */
export function RenderBlocks({ blocks }: { blocks: HomeBlock[] }) {
  return blocks.filter((block) => block.visible).map((block) => <BlockSwitch key={block.id} block={block} />);
}

function BlockSwitch({ block }: { block: HomeBlock }) {
  switch (block.blockType) {
    case "hero":
      return <HeroBlock {...block} />;
    case "brandIntroduction":
      return <BrandIntroductionBlock {...block} />;
    case "services":
      return <ServicesBlock {...block} />;
    case "featuredProjects":
      return <FeaturedProjectsBlock {...block} />;
    case "designPhilosophy":
      return <DesignPhilosophyBlock {...block} />;
    case "whyChooseUs":
      return <WhyChooseUsBlock {...block} />;
    case "cta":
      return <CtaBlock {...block} />;
    case "contact":
      return <ContactBlock {...block} />;
    default: {
      // Compile-time exhaustiveness check: a new block type must be handled.
      const unhandled: never = block;
      return unhandled;
    }
  }
}
