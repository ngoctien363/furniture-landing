import type { ReactNode } from "react";
import { Container, Reveal, SectionHeading } from "@/components/ui";

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Optional content under the heading (e.g. actions, filters). */
  children?: ReactNode;
}

/**
 * Opening block for inner pages (no full-bleed hero). Clears the fixed header
 * and sets the page's single <h1>.
 */
export function PageIntro({ eyebrow, title, lede, children }: PageIntroProps) {
  return (
    <div className="bg-ivory pb-section-sm pt-[calc(var(--spacing-header)+clamp(3rem,2rem+5vw,7rem))]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} lede={lede} level={1} size="h1" />
        </Reveal>
        {children ? <div className="mt-12">{children}</div> : null}
      </Container>
    </div>
  );
}
