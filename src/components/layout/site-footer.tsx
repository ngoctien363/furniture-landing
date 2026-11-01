import Link from "next/link";
import { cacheLife } from "next/cache";
import { Logo } from "@/components/brand/logo";
import { ButtonLink, ContactAction, Container, ShowroomAddress } from "@/components/ui";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { uiText } from "@/data/ui-text";

/** Current year, computed at prerender and refreshed daily (Cache Components safe). */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

function ColumnTitle({ children }: { children: string }) {
  return <h2 className="eyebrow mb-6 text-stone">{children}</h2>;
}

export function SiteFooter() {
  const { contact, footer, navigation, ctas, name, legalName, isDemoContent, demoNotice } = siteConfig;
  const pending = (value: string | null, placeholder: string) => value ?? placeholder;

  return (
    <footer className="bg-charcoal text-ivory">
      <Container className={isDemoContent ? "pb-24 pt-section-sm" : "pb-10 pt-section-sm"}>
        {/* Statement + CTA */}
        <div className="flex flex-col gap-10 border-b border-line-inverse pb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Logo tone="light" />
            <p className="mt-8 font-display text-h3 font-light text-ivory/90">{footer.statement}</p>
          </div>
          <ButtonLink href={ctas.startProject.href} tone="light" variant="outline" arrow>
            {ctas.startProject.label}
          </ButtonLink>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-label={uiText.footerNavigation} className="lg:col-span-3">
            <ColumnTitle>{uiText.footer.explore}</ColumnTitle>
            <ul className="space-y-3">
              {navigation
                .filter((item) => item.visible !== false)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline text-ivory/80 hover:text-ivory">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <ColumnTitle>{uiText.footer.services}</ColumnTitle>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="link-underline text-ivory/80 hover:text-ivory"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ColumnTitle>{uiText.footer.contact}</ColumnTitle>
            <div className="space-y-5 text-sm text-ivory/80">
              <ContactAction channel="hotline" appearance="row" />
              <ContactAction channel="zalo" appearance="row" />
              <ContactAction channel="facebook" appearance="row" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <ColumnTitle>{uiText.footer.showroom}</ColumnTitle>
            <address className="space-y-4 text-sm not-italic text-ivory/80">
              <ShowroomAddress />
              <p className={contact.openingHours.value ? "" : "italic opacity-70"}>
                {pending(contact.openingHours.value, contact.openingHours.placeholder)}
              </p>
            </address>
          </div>
        </div>

        {/* Legal + demo notice */}
        <div className="flex flex-col gap-4 border-t border-line-inverse pt-8 text-xs text-stone md:flex-row md:items-start md:justify-between">
          <p>
            © <CurrentYear /> {legalName.value ?? name}. {uiText.footer.rights}
          </p>
          <div className="max-w-2xl space-y-2 md:text-right">
            {isDemoContent ? <p>{demoNotice.full}</p> : null}
            <p>{footer.imageCredit}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
