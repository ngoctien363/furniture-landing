import { uiText } from "@/data/ui-text";

/** Keyboard users can jump past the header straight to the main content. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="eyebrow fixed left-4 top-4 z-[60] -translate-y-24 bg-charcoal px-5 py-3 text-ivory transition-transform focus:translate-y-0"
    >
      {uiText.skipToContent}
    </a>
  );
}
