"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { ImageFrame, type ImageRatio } from "@/components/ui";
import { uiText } from "@/data/ui-text";
import type { ImageAsset } from "@/types/content";
import { cn } from "@/lib/utils";

/** Editorial rhythm: wide, two-up, wide … */
function layoutFor(index: number): { className: string; ratio: ImageRatio; sizes: string } {
  const position = index % 3;
  if (position === 0) return { className: "md:col-span-2", ratio: "16/9", sizes: "(min-width: 1440px) 1312px, 100vw" };
  return { className: "", ratio: "4/5", sizes: "(min-width: 768px) 50vw, 100vw" };
}

/**
 * Project image gallery with an accessible lightbox built on the native
 * <dialog> element (focus containment and Escape handled by the browser).
 */
export function ProjectGallery({ images, title }: { images: ImageAsset[]; title: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = (index: number) => {
    setCurrent(index);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  // Lock page scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [isOpen]);

  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (delta: number) => setCurrent((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIsOpen(false);
      triggerRefs.current[current]?.focus();
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("keydown", onKey);
    };
  }, [current, step]);

  const image = images[current];

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
        {images.map((img, i) => {
          const slot = layoutFor(i);
          return (
            <li key={img.src} className={slot.className}>
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                onClick={() => open(i)}
                aria-label={`${uiText.gallery.open}: ${img.alt}`}
                className="group relative block w-full cursor-zoom-in text-left"
              >
                <ImageFrame image={img} ratio={slot.ratio} sizes={slot.sizes} zoom />
                <span
                  aria-hidden
                  className="absolute right-4 top-4 flex size-10 items-center justify-center bg-ivory/85 text-charcoal opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <Maximize2 className="size-4" strokeWidth={1.5} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${uiText.gallery.dialogLabel} — ${title}`}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-charcoal/95 p-0 text-ivory backdrop:bg-charcoal/80"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-gutter py-5">
            <p className="eyebrow tabular-nums text-sand" aria-live="polite">
              {current + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label={uiText.gallery.close}
              className="flex size-11 items-center justify-center hover:text-sand"
              autoFocus
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex-1">
            {image ? (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain px-gutter"
              />
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-6 px-gutter py-6">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={uiText.gallery.previous}
              className="flex size-12 items-center justify-center border border-line-inverse hover:border-ivory"
            >
              <ArrowLeft className="size-5" strokeWidth={1.5} />
            </button>
            <p className={cn("line-clamp-2 max-w-xl text-center text-sm text-sand")}>{image?.alt}</p>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={uiText.gallery.next}
              className="flex size-12 items-center justify-center border border-line-inverse hover:border-ivory"
            >
              <ArrowRight className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
