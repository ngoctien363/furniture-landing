import { Globe, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import type { ContactChannelId } from "@/types/content";
import { getChannel, getContactDisplay, getContactHref, isExternalChannel } from "@/lib/contact";
import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./button";

const icons: Record<ContactChannelId, LucideIcon> = {
  hotline: Phone,
  zalo: MessageCircle,
  facebook: Globe,
  messenger: MessageCircle,
};

interface ContactActionProps {
  channel: ContactChannelId;
  /** "button" = CTA button, "row" = label + value line for contact lists. */
  appearance?: "button" | "row";
  variant?: "solid" | "outline";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Renders a contact channel. When the real value is not configured it shows a
 * clearly labelled, non-interactive placeholder — never a fake link.
 */
export function ContactAction({
  channel: id,
  appearance = "button",
  variant = "solid",
  tone = "dark",
  className,
}: ContactActionProps) {
  const channel = getChannel(id);
  const href = getContactHref(channel);
  const Icon = icons[id];
  const linkProps = isExternalChannel(id) ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (appearance === "row") {
    const body = (
      <>
        <Icon aria-hidden className="mt-1 size-4 shrink-0 opacity-60" strokeWidth={1.5} />
        <span className="flex flex-col">
          <span className="eyebrow opacity-60">{channel.label}</span>
          <span className={cn("mt-1.5", !href && "italic opacity-70")}>{getContactDisplay(channel)}</span>
        </span>
      </>
    );
    return href ? (
      <a href={href} className={cn("flex gap-4 transition-opacity hover:opacity-70", className)} {...linkProps}>
        {body}
      </a>
    ) : (
      <p className={cn("flex gap-4", className)}>{body}</p>
    );
  }

  if (!href) {
    return (
      <span
        role="note"
        title={uiText.contactUnavailable}
        className={cn(
          buttonStyles({ variant: "outline", tone }),
          "cursor-default border-dashed opacity-75 hover:bg-transparent",
          tone === "dark" ? "hover:text-charcoal" : "hover:text-ivory",
          className,
        )}
      >
        <Icon aria-hidden className="size-4" strokeWidth={1.5} />
        {channel.contact.placeholder}
      </span>
    );
  }

  return (
    <a href={href} className={cn(buttonStyles({ variant, tone }), className)} {...linkProps}>
      <Icon aria-hidden className="size-4" strokeWidth={1.5} />
      {channel.actionLabel}
    </a>
  );
}
