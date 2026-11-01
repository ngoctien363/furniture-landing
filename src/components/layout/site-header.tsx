import { HeaderShell } from "@/components/navigation/header-shell";
import { ButtonLink, ContactAction } from "@/components/ui";
import { siteConfig } from "@/data/site-config";
import { getContactHref, getPrimaryChannel } from "@/lib/contact";

/**
 * Server wrapper: resolves content and CTAs, then hands them to the
 * interactive shell. Shows the hotline when configured; otherwise the
 * "start a project" CTA (no fake phone link).
 */
export function SiteHeader() {
  const primary = getPrimaryChannel();
  const hasPrimary = getContactHref(primary) !== null;
  const { startProject } = siteConfig.ctas;

  const cta = hasPrimary ? (
    <ContactAction channel={primary.id} variant="outline" />
  ) : (
    <ButtonLink href={startProject.href} variant="outline" arrow>
      {startProject.label}
    </ButtonLink>
  );

  const ctaLight = hasPrimary ? (
    <ContactAction channel={primary.id} variant="outline" tone="light" />
  ) : (
    <ButtonLink href={startProject.href} variant="outline" tone="light" arrow>
      {startProject.label}
    </ButtonLink>
  );

  const mobileCta = hasPrimary ? (
    <ContactAction channel={primary.id} tone="light" />
  ) : (
    <ButtonLink href={startProject.href} tone="light" arrow>
      {startProject.label}
    </ButtonLink>
  );

  const mobileContact = (
    <>
      <ContactAction channel="hotline" appearance="row" />
      <ContactAction channel="zalo" appearance="row" />
    </>
  );

  return (
    <HeaderShell
      navigation={siteConfig.navigation}
      cta={cta}
      ctaLight={ctaLight}
      mobileCta={mobileCta}
      mobileContact={mobileContact}
    />
  );
}
