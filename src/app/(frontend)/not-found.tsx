import { PageIntro } from "@/components/layout/page-intro";
import { ButtonLink } from "@/components/ui";
import { uiText } from "@/data/ui-text";

export default function NotFound() {
  const t = uiText.notFound;
  return (
    <PageIntro eyebrow={t.eyebrow} title={t.title} lede={t.body}>
      <ButtonLink href="/" arrow>
        {t.back}
      </ButtonLink>
    </PageIntro>
  );
}
