import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge must know the custom type scale from brand.css; otherwise
 * `text-lede` is treated as a colour and dropped next to `text-walnut`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "h1", "h2", "h3", "h4", "lede", "eyebrow"],
      spacing: ["section", "section-sm", "gutter", "header"],
      container: ["site", "narrow", "reading"],
    },
  },
});

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format a floor area, e.g. 120 → "120 m²". */
export function formatArea(sqm: number): string {
  return `${new Intl.NumberFormat("vi").format(sqm)} m²`;
}

/** Zero-padded editorial index, e.g. 1 → "01". */
export function formatIndex(n: number): string {
  return n.toString().padStart(2, "0");
}
