import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "text";
type Tone = "dark" | "light";
type Size = "md" | "lg";

interface StyleOptions {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
}

const base =
  "group/button inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] transition-[color,background-color,border-color] duration-500 ease-luxe disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, Record<Tone, string>> = {
  solid: {
    dark: "bg-charcoal text-ivory hover:bg-walnut",
    light: "bg-ivory text-charcoal hover:bg-sand",
  },
  outline: {
    dark: "border border-charcoal/70 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
    light: "border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal",
  },
  text: {
    dark: "text-charcoal",
    light: "text-ivory",
  },
};

const sizes: Record<Size, string> = {
  md: "h-12 px-7",
  lg: "h-14 px-9",
};

export function buttonStyles({ variant = "solid", tone = "dark", size = "md" }: StyleOptions = {}) {
  return cn(base, variants[variant][tone], variant === "text" ? "h-auto px-0 py-1" : sizes[size]);
}

function Label({ children, variant, arrow }: { children: ReactNode; variant: Variant; arrow: boolean }) {
  return (
    <>
      <span className={cn(variant === "text" && "link-underline group-hover/button:bg-[length:100%_1px]")}>
        {children}
      </span>
      {arrow ? (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-500 ease-luxe group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
          strokeWidth={1.5}
        />
      ) : null}
    </>
  );
}

type ButtonLinkProps = StyleOptions &
  Omit<ComponentProps<typeof Link>, "href"> & {
    href: string;
    arrow?: boolean;
    children: ReactNode;
  };

/** Link styled as a button. External https links open in a new tab. */
export function ButtonLink({
  href,
  variant = "solid",
  tone = "dark",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, tone, size }), className);
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Label variant={variant} arrow={arrow}>
          {children}
        </Label>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      <Label variant={variant} arrow={arrow}>
        {children}
      </Label>
    </Link>
  );
}

type ButtonProps = StyleOptions & ButtonHTMLAttributes<HTMLButtonElement> & { arrow?: boolean };

export function Button({
  variant = "solid",
  tone = "dark",
  size = "md",
  arrow = false,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, tone, size }), className)} {...rest}>
      <Label variant={variant} arrow={arrow}>
        {children}
      </Label>
    </button>
  );
}
