import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4;
type Size = "display" | "h1" | "h2" | "h3" | "h4";

const sizes: Record<Size, string> = {
  display: "text-display font-light",
  h1: "text-h1 font-light",
  h2: "text-h2 font-light",
  h3: "text-h3 font-normal",
  h4: "text-h4 font-medium",
};

interface HeadingProps {
  /** Semantic level (h1–h4). */
  level?: Level;
  /** Visual size, independent from the semantic level. */
  size?: Size;
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Display-serif heading with separate semantic level and visual size. */
export function Heading({ level = 2, size, id, className, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  const visual = size ?? (`h${level}` as Size);
  return (
    <Tag id={id} className={cn("font-display", sizes[visual], className)}>
      {children}
    </Tag>
  );
}
