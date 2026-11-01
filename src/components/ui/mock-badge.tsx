import { cn } from "@/lib/utils";

interface MockBadgeProps {
  label: string;
  tone?: "dark" | "light";
  className?: string;
}

/** Small label that marks demonstration content (images, projects). */
export function MockBadge({ label, tone = "light", className }: MockBadgeProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 px-3 py-1.5 text-[0.625rem] tracking-[0.24em] backdrop-blur-sm",
        tone === "light" ? "bg-ivory/85 text-charcoal" : "bg-charcoal/80 text-ivory",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-taupe" />
      {label}
    </span>
  );
}
