import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CtaBlock } from "@/blocks/cta-block";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { Container, Eyebrow, Heading, ImageFrame, MockBadge, Reveal, Section } from "@/components/ui";
import { projectDetailLabels as t, projectsPage } from "@/data/pages/inner-pages";
import { getAdjacentProjects, getCategoryLabel, getProjectBySlug, projects } from "@/data/projects";
import { uiText } from "@/data/ui-text";
import { cn, formatArea } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: { images: [{ url: project.mainImage.src, alt: project.mainImage.alt }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);
  const facts = [
    { label: t.category, value: getCategoryLabel(project.category) },
    {
      label: t.area,
      value: project.area.value !== null ? formatArea(project.area.value) : project.area.placeholder,
      pending: project.area.value === null,
    },
    { label: t.style, value: project.designStyle },
    { label: t.location, value: project.location.value ?? project.location.placeholder, pending: !project.location.value },
    { label: t.year, value: project.year.value?.toString() ?? project.year.placeholder, pending: !project.year.value },
  ];

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="project-title" className="relative isolate flex min-h-[max(560px,88svh)] items-end overflow-hidden bg-charcoal text-ivory">
        <ImageFrame
          image={project.mainImage}
          ratio="fill"
          sizes="100vw"
          preload
          className="absolute inset-0 -z-10 bg-charcoal"
          imageClassName="animate-hero-settle"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(37_36_33/0.85)_0%,rgb(37_36_33/0.3)_50%,rgb(37_36_33/0)_75%),linear-gradient(to_bottom,rgb(37_36_33/0.5)_0%,rgb(37_36_33/0)_24%)]"
        />
        <Container className="pb-14 pt-28 md:pb-20 lg:pt-36">
          {project.isMock ? <MockBadge label={uiText.demoProject} className="mb-8" /> : null}
          <Eyebrow tone="light" className="mb-6">
            {getCategoryLabel(project.category)}
          </Eyebrow>
          <Heading level={1} size="display" id="project-title">
            {project.name}
          </Heading>
          <p className="mt-6 max-w-2xl text-lede text-ivory/85">{project.shortDescription}</p>
        </Container>
      </section>

      {/* Facts */}
      <div className="border-b border-line bg-ivory">
        <Container>
          <dl className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.label} className="md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0">
                <dt className="eyebrow text-taupe-deep">{fact.label}</dt>
                <dd className={cn("mt-2 font-display text-h4", fact.pending && "italic text-walnut/70")}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Story */}
      <Section labelledBy="project-story">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Eyebrow className="mb-6">{t.story}</Eyebrow>
              <Heading level={2} size="h3" id="project-story">
                {project.designStyle}
              </Heading>
            </Reveal>
            <Reveal delay={0.1} className="space-y-6 text-lede text-walnut lg:col-span-7 lg:col-start-6">
              {project.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {project.isMock || project.detailsPending ? (
                <p className="border-l-2 border-taupe bg-paper px-5 py-4 text-sm text-walnut">
                  {project.isMock ? t.mockNotice : t.pendingNotice}
                </p>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <section aria-labelledby="project-gallery" className="pb-section">
        <Container>
          <h2 id="project-gallery" className="eyebrow mb-10 text-taupe-deep">
            {t.gallery}
          </h2>
          <ProjectGallery images={project.gallery} title={project.name} />
        </Container>
      </section>

      {/* Previous / next */}
      <nav aria-label={projectsPage.intro.eyebrow} className="border-t border-line bg-ivory">
        <Container>
          <div className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
            {(previous.id === next.id
              ? [{ project: next, label: t.next, Icon: ArrowRight, align: "start" as const }]
              : [
                  { project: previous, label: t.previous, Icon: ArrowLeft, align: "start" as const },
                  { project: next, label: t.next, Icon: ArrowRight, align: "end" as const },
                ]
            ).map(({ project: p, label, Icon, align }) => (
              <Link
                key={label}
                href={`/projects/${p.slug}`}
                className={cn(
                  "group flex items-center gap-6 py-10",
                  align === "end" ? "md:flex-row-reverse md:pl-10 md:text-right" : "md:pr-10",
                )}
              >
                <div className="w-28 shrink-0 md:w-36">
                  <ImageFrame image={p.mainImage} ratio="4/5" sizes="9rem" zoom />
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-2 text-taupe-deep md:inline-flex">
                    <Icon aria-hidden className="size-3.5" strokeWidth={1.5} />
                    {label}
                  </p>
                  <p className="mt-3 font-display text-h3 transition-colors group-hover:text-walnut">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="border-t border-line py-8 text-center">
            <Link href="/projects" className="eyebrow link-underline">
              {t.backToProjects}
            </Link>
          </div>
        </Container>
      </nav>

      <CtaBlock {...projectsPage.cta} />
    </>
  );
}
