import type { ContactChannel, ContactChannelId } from "@/types/content";
import { siteConfig } from "@/data/site-config";

/**
 * Builds a safe, real destination for a contact channel.
 *
 * Returns `null` whenever the real value has not been provided (or is
 * malformed). Callers must render a non-interactive placeholder in that case
 * — never a fake `tel:` number or dummy URL.
 */
export function getContactHref(channel: ContactChannel): string | null {
  const raw = channel.contact.value?.trim();
  if (!raw) return null;

  switch (channel.id) {
    case "hotline": {
      const phone = toDialable(raw);
      return phone ? `tel:${phone}` : null;
    }
    case "zalo": {
      // Zalo accepts a link to a phone number or an https://zalo.me/... URL.
      if (isHttpsUrl(raw)) return raw;
      const digits = raw.replace(/\D/g, "");
      return digits.length >= 9 ? `https://zalo.me/${digits}` : null;
    }
    case "facebook":
    case "messenger":
      return isHttpsUrl(raw) ? raw : null;
  }
}

/** Human-readable text for a channel: real value or its labelled placeholder. */
export function getContactDisplay(channel: ContactChannel): string {
  return channel.contact.value?.trim() || channel.contact.placeholder;
}

/** Whether a channel opens in a new tab (external web destinations). */
export function isExternalChannel(id: ContactChannelId): boolean {
  return id !== "hotline";
}

export function getChannel(id: ContactChannelId): ContactChannel {
  return siteConfig.contact.channels[id];
}

export function getPrimaryChannel(): ContactChannel {
  return getChannel(siteConfig.contact.primary);
}

function toDialable(raw: string): string | null {
  const hasPlus = raw.startsWith("+");
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return null;
  return hasPlus ? `+${digits}` : digits;
}

function isHttpsUrl(raw: string): boolean {
  try {
    return new URL(raw).protocol === "https:";
  } catch {
    return false;
  }
}
