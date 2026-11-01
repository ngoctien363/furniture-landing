import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "ivory" | "ivory-deep" | "paper" | "charcoal";

const tones: Record<SectionTone, string> = {
  ivory: "bg-ivory text-charcoal",
  "ivory-deep": "bg-ivory-deep text-charcoal",
  paper: "bg-paper text-charcoal",
  charcoal: "bg-charcoal text-ivory",
};

const spacings = {
  default: "py-section",
  compact: "py-section-sm",
  none: "",
} as const;

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  spacing?: keyof typeof spacings;
  /** Accessible name for the landmark, usually the visible heading's id. */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** Vertical rhythm + background tone for a page section. */
export function Section({
  id,
  tone = "ivory",
  spacing = "default",
  labelledBy,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tone}
      className={cn(tones[tone], spacings[spacing], className)}
    >
      {children}
    </section>
  );
}
