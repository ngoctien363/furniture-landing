"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/logo";
import type { NavItem } from "@/types/content";
import { uiText } from "@/data/ui-text";
import { cn, formatIndex } from "@/lib/utils";

/**
 * Routes whose first section is a full-bleed dark image. On these, the header
 * starts transparent with light text and turns solid once the page scrolls.
 */
const OVERLAY_ROUTES: (string | RegExp)[] = ["/", /^\/projects\/[^/]+$/];

function isOverlayRoute(pathname: string) {
  return OVERLAY_ROUTES.some((route) => (typeof route === "string" ? route === pathname : route.test(pathname)));
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

interface HeaderShellProps {
  navigation: NavItem[];
  /** Primary CTA, rendered on the server (hotline or "start a project"). */
  cta: ReactNode;
  /** Same CTA styled for the transparent header over dark imagery. */
  ctaLight: ReactNode;
  /** Light-tone CTA used inside the dark mobile menu. */
  mobileCta: ReactNode;
  /** Contact rows shown at the bottom of the mobile menu. */
  mobileContact: ReactNode;
}

export function HeaderShell({ navigation, cta, ctaLight, mobileCta, mobileContact }: HeaderShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  // Menu is open only for the route it was opened on, so navigating closes it.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const overlay = isOverlayRoute(pathname);
  const light = overlay && !scrolled && !open;

  // Solid background after a small scroll; hide on scroll down, show on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > lastY + 4 ? true : y < lastY - 4 ? false : (h) => h);
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const close = useCallback(() => {
    setOpenedOn(null);
    toggleRef.current?.focus();
  }, []);

  // Mobile menu: lock page scroll, close on Escape, keep focus inside.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current || !toggleRef.current) return;
      const focusables = [
        toggleRef.current,
        ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const items = navigation.filter((item) => item.visible !== false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color,border-color] duration-700 ease-luxe",
          // Never keep focused content off-screen: reveal on keyboard focus.
          hidden && !open ? "-translate-y-full focus-within:translate-y-0" : "translate-y-0",
          open
            ? "border-b border-transparent bg-transparent text-ivory"
            : light
              ? "border-b border-transparent bg-transparent text-ivory"
              : "border-b border-line bg-ivory/90 text-charcoal backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-8 px-gutter lg:h-20">
          <Logo tone={light || open ? "light" : "dark"} />

          <nav aria-label={uiText.mainNavigation} className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              {items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "eyebrow link-underline whitespace-nowrap py-1 transition-opacity",
                        active ? "opacity-100" : "opacity-75 hover:opacity-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden xl:block">{light ? ctaLight : cta}</div>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? uiText.closeMenu : uiText.openMenu}
              onClick={() => (open ? close() : setOpenedOn(pathname))}
              className="group -mr-2 flex h-11 items-center gap-3 px-2 lg:hidden"
            >
              <span className="eyebrow">{open ? uiText.dismiss : uiText.menu}</span>
              <span aria-hidden className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-500 ease-luxe",
                    open && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px w-6 bg-current transition-transform duration-500 ease-luxe",
                    open && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={uiText.mainNavigation}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-charcoal text-ivory lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label={uiText.mainNavigation} className="mx-auto w-full max-w-site flex-1 px-gutter pt-28">
              <ul className="flex flex-col">
                {items.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      className="border-b border-line-inverse"
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.08 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-5 py-5"
                      >
                        <span className="eyebrow w-6 text-stone tabular-nums">{formatIndex(i + 1)}</span>
                        <span
                          className={cn(
                            "font-display text-[2.5rem] font-light leading-[1.1]",
                            active ? "text-ivory" : "text-ivory/80",
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <motion.div
              className="mx-auto w-full max-w-site px-gutter pb-10 pt-12"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="mb-8 [&_a]:w-full [&_span[role=note]]:w-full">{mobileCta}</div>
              <div className="grid gap-5 text-sm text-sand sm:grid-cols-2">{mobileContact}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
