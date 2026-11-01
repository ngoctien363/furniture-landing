import Image from "next/image";
import type { ImageAsset } from "@/types/content";
import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";
import { MockBadge } from "./mock-badge";

const ratios = {
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  fill: "h-full",
} as const;

export type ImageRatio = keyof typeof ratios;

interface ImageFrameProps {
  image: ImageAsset;
  ratio?: ImageRatio;
  /** Responsive `sizes` hint for next/image. */
  sizes: string;
  /** Load eagerly for above-the-fold images. */
  preload?: boolean;
  /** Slow zoom when an ancestor with the `group` class is hovered. */
  zoom?: boolean;
  /** Show the "illustrative image" label for stock photography. */
  showMockLabel?: boolean;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Fixed-ratio image on a warm placeholder background (no layout shift).
 * All imagery goes through this component so aspect ratios stay consistent.
 */
export function ImageFrame({
  image,
  ratio = "3/2",
  sizes,
  preload = false,
  zoom = false,
  showMockLabel = false,
  caption,
  className,
  imageClassName,
}: ImageFrameProps) {
  const frame = (
    <div className={cn("relative overflow-hidden bg-sand/60", ratios[ratio], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn(
          "object-cover",
          zoom && "transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
      {showMockLabel && image.source.kind === "stock" ? (
        <MockBadge label={uiText.demoImage} className="absolute bottom-4 left-4" />
      ) : null}
    </div>
  );
  if (!caption) return frame;
  return (
    <figure>
      {frame}
      <figcaption className="mt-3 text-sm text-walnut">{caption}</figcaption>
    </figure>
  );
}
