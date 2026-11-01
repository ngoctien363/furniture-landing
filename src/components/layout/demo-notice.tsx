"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mk-demo-notice-dismissed";

/* Session-scoped "dismissed" flag as an external store (SSR-safe). */
let dismissedInMemory = false;
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const getSnapshot = () => {
  if (dismissedInMemory) return true;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};
const getServerSnapshot = () => false;
const dismissNotice = () => {
  dismissedInMemory = true;
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable — in-memory flag still hides it */
  }
  listeners.forEach((listener) => listener());
};

interface DemoNoticeProps {
  short: string;
  full: string;
}

/**
 * Persistent, unobtrusive label that marks the site as a demonstration.
 * Expands to the full explanation; can be dismissed for the session.
 */
export function DemoNotice({ short, full }: DemoNoticeProps) {
  const [expanded, setExpanded] = useState(false);
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const detailsId = useId();

  if (dismissed) return null;

  return (
    <aside
      aria-label={short}
      className="fixed bottom-4 left-4 z-30 max-w-[calc(100vw-2rem)] text-ivory sm:bottom-6 sm:left-6 sm:max-w-md"
    >
      <div
        id={detailsId}
        hidden={!expanded}
        className="mb-2 bg-charcoal/95 p-5 text-sm leading-relaxed text-sand shadow-[0_20px_60px_-20px_rgb(37_36_33/0.5)] backdrop-blur-md"
      >
        {full}
      </div>
      <div className="flex items-stretch bg-charcoal/90 backdrop-blur-md">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((v) => !v)}
          className="eyebrow flex min-w-0 items-center gap-3 whitespace-nowrap px-4 py-3 text-[0.625rem] tracking-[0.2em]"
        >
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-taupe" />
          <span className="truncate">{short}</span>
          <span className={cn("hidden text-stone sm:inline", expanded && "text-ivory")}>· {uiText.demoDetails}</span>
        </button>
        <button
          type="button"
          onClick={dismissNotice}
          aria-label={uiText.dismiss}
          className="border-l border-line-inverse px-3 text-stone hover:text-ivory"
        >
          <X aria-hidden className="size-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  );
}
