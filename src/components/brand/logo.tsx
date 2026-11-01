import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import type { LogoConfig } from "@/types/content";
import { cn } from "@/lib/utils";
import { uiText } from "@/data/ui-text";

interface LogoProps {
  /** Use the light variant when placed over dark imagery. */
  tone?: "dark" | "light";
  className?: string;
  /** Override config — mainly for previews/tests. */
  logo?: LogoConfig;
}

/**
 * Brand logo.
 *
 * Currently renders a TEMPORARY text wordmark. When the official logo is
 * available, set `siteConfig.logo` to `{ kind: "image", ... }` — no component
 * changes are required.
 */
export function Logo({ tone = "dark", className, logo = siteConfig.logo }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — ${uiText.home}`}
      className={cn(
        "inline-flex items-center transition-colors duration-700 ease-luxe focus-visible:outline-offset-4",
        tone === "light" ? "text-ivory" : "text-charcoal",
        className,
      )}
    >
      {logo.kind === "image" ? (
        <Image
          src={tone === "light" && logo.srcOnDark ? logo.srcOnDark : logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-8 w-auto md:h-10"
          preload
        />
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-medium tracking-[0.28em] md:text-2xl">
            {logo.primary}
          </span>
          {logo.secondary ? (
            <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.5em] opacity-70">
              {logo.secondary}
            </span>
          ) : null}
        </span>
      )}
    </Link>
  );
}
