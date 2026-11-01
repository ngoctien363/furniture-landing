import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** Optional editorial index shown before the label, e.g. "01". */
  index?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function Eyebrow({ children, index, tone = "dark", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-4",
        tone === "light" ? "text-sand" : "text-taupe-deep",
        className,
      )}
    >
      {index ? <span className="tabular-nums">{index}</span> : null}
      {index ? <span aria-hidden className="h-px w-8 bg-current opacity-60" /> : null}
      <span>{children}</span>
    </p>
  );
}
