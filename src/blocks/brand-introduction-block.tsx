import { ButtonLink, Container, Heading, ImageFrame, PlaceholderNote, Reveal, Section, Eyebrow } from "@/components/ui";
import type { BrandIntroductionBlockData } from "@/types/content";
import { cn } from "@/lib/utils";

interface Props extends BrandIntroductionBlockData {
  /** Put the images on the left (used on the About page). */
  reverse?: boolean;
}

/** Statement + body copy beside a layered image composition. */
export function BrandIntroductionBlock({
  id,
  eyebrow,
  heading,
  body,
  image,
  secondaryImage,
  cta,
  isPlaceholder,
  reverse = false,
}: Props) {
  const headingId = `${id}-heading`;
  return (
    <Section labelledBy={headingId}>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className={cn("lg:col-span-5", reverse ? "lg:order-2 lg:col-start-8" : "lg:col-start-1")}>
            <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
            <Heading level={2} id={headingId}>
              {heading}
            </Heading>
            <div className="mt-8 space-y-5 text-walnut">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {isPlaceholder ? <PlaceholderNote className="mt-6" /> : null}
            {cta ? (
              <ButtonLink href={cta.href} variant="text" arrow className="mt-10">
                {cta.label}
              </ButtonLink>
            ) : null}
          </Reveal>

          <Reveal
            delay={0.1}
            className={cn("relative lg:col-span-6", reverse ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}
          >
            <ImageFrame
              image={image}
              ratio="4/5"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={cn(secondaryImage && (reverse ? "lg:ml-[20%]" : "lg:mr-[20%]"))}
            />
            {secondaryImage ? (
              <div
                className={cn(
                  "absolute bottom-[-8%] hidden w-[42%] border-[10px] border-ivory lg:block",
                  reverse ? "left-0" : "right-0",
                )}
              >
                <ImageFrame image={secondaryImage} ratio="3/4" sizes="20vw" />
              </div>
            ) : null}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
