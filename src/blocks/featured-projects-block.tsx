import { ProjectCard, editorialSlot } from "@/components/projects/project-card";
import { ButtonLink, Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { getProjectsByIds } from "@/data/projects";
import type { FeaturedProjectsBlockData } from "@/types/content";

/** Editorial, asymmetric selection of projects. */
export function FeaturedProjectsBlock({ id, eyebrow, heading, lede, projectIds, cta }: FeaturedProjectsBlockData) {
  const headingId = `${id}-heading`;
  const items = getProjectsByIds(projectIds);
  return (
    <Section labelledBy={headingId}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={heading}
            lede={lede}
            id={headingId}
            aside={
              cta ? (
                <ButtonLink href={cta.href} variant="text" arrow>
                  {cta.label}
                </ButtonLink>
              ) : undefined
            }
          />
        </Reveal>
        <ul className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          {items.map((project, i) => {
            const slot = editorialSlot(i);
            return (
              <Reveal as="li" key={project.id} delay={(i % 2) * 0.1} className={slot.className}>
                <ProjectCard project={project} index={i + 1} ratio={slot.ratio} sizes={slot.sizes} />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
