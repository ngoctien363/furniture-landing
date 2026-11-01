import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";

/** Discreet marker under copy that is placeholder text pending real content. */
export function PlaceholderNote({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs italic",
        tone === "light" ? "text-stone" : "text-taupe-deep",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {uiText.placeholderCopy}
    </p>
  );
}
