import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { DemoNotice } from "@/components/layout/demo-notice";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.ogLocale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.seo.ogImage.src,
        width: siteConfig.seo.ogImage.width,
        height: siteConfig.seo.ogImage.height,
        alt: siteConfig.seo.ogImage.alt,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  // Keep the demo site out of search indexes until real content is live.
  robots: siteConfig.isDemoContent ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e9",
};

export default function FrontendLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.locale} className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
        {siteConfig.isDemoContent ? (
          <DemoNotice short={siteConfig.demoNotice.short} full={siteConfig.demoNotice.full} />
        ) : null}
      </body>
    </html>
  );
}
