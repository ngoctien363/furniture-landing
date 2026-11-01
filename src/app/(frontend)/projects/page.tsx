import type { Metadata } from "next";
import { CtaBlock } from "@/blocks/cta-block";
import { PageIntro } from "@/components/layout/page-intro";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { Container } from "@/components/ui";
import { projectsPage } from "@/data/pages/inner-pages";
import { projectCategories, projects } from "@/data/projects";
import { uiText } from "@/data/ui-text";

export const metadata: Metadata = {
  title: projectsPage.seo.title,
  description: projectsPage.seo.description,
};

export default function ProjectsPage() {
  const { intro, allLabel, emptyLabel, cta } = projectsPage;
  return (
    <>
      <PageIntro eyebrow={intro.eyebrow} title={intro.title} lede={intro.lede} />
      <Container className="pb-section">
        <ProjectsExplorer
          projects={projects}
          categories={projectCategories}
          allLabel={allLabel}
          emptyLabel={emptyLabel}
          filterLabel={uiText.projectFilter}
        />
      </Container>
      <CtaBlock {...cta} />
    </>
  );
}
