import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const widths = {
  site: "max-w-site",
  narrow: "max-w-narrow",
  reading: "max-w-reading",
  full: "max-w-none",
} as const;

interface ContainerProps {
  as?: ElementType;
  size?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}

/** Horizontal page container with responsive gutters. */
export function Container({ as: Tag = "div", size = "site", className, children }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full px-gutter", widths[size], className)}>{children}</Tag>;
}
