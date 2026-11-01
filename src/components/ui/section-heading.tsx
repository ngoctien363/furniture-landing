import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Heading } from "./heading";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  level?: 1 | 2;
  size?: "display" | "h1" | "h2";
  align?: "start" | "center";
  tone?: "dark" | "light";
  /** Extra content aligned with the heading (e.g. a link). */
  aside?: ReactNode;
  className?: string;
}

/** Eyebrow + serif title + optional lede — the standard section opener. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  lede,
  id,
  level = 2,
  size = "h2",
  align = "start",
  tone = "dark",
  aside,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", centered && "mx-auto")}>
        {eyebrow ? (
          <Eyebrow index={index} tone={tone} className={cn("mb-6", centered && "justify-center")}>
            {eyebrow}
          </Eyebrow>
        ) : null}
        <Heading level={level} size={size} id={id}>
          {title}
        </Heading>
        {lede ? (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lede",
              tone === "light" ? "text-sand" : "text-walnut",
              centered && "mx-auto",
            )}
          >
            {lede}
          </p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
