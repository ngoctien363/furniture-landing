import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { uiText } from "@/data/ui-text";
import { getMapsHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface ShowroomAddressProps {
  className?: string;
  /** Classes applied only while the address is still a placeholder. */
  pendingClassName?: string;
}

/**
 * Showroom address from SiteSettings. When a real address is configured it
 * links to a Google Maps search for that exact address (new tab); otherwise it
 * shows the labelled placeholder as plain text.
 */
export function ShowroomAddress({ className, pendingClassName = "italic opacity-70" }: ShowroomAddressProps) {
  const { value, placeholder } = siteConfig.contact.showroomAddress;
  const href = getMapsHref(value);

  if (!href) return <p className={cn(className, pendingClassName)}>{placeholder}</p>;

  return (
    <p className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${value} — ${uiText.openInMaps}`}
        className="group inline-flex items-start gap-2 transition-opacity hover:opacity-70"
      >
        <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 opacity-60" strokeWidth={1.5} />
        <span>
          {value}
          <span className="eyebrow mt-1.5 block opacity-60 group-hover:underline">{uiText.openInMaps}</span>
        </span>
      </a>
    </p>
  );
}
