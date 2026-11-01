import Link from "next/link";
import { ImageFrame, MockBadge, type ImageRatio } from "@/components/ui";
import { getCategoryLabel } from "@/data/projects";
import { uiText } from "@/data/ui-text";
import type { Project } from "@/types/content";
import { cn, formatArea, formatIndex } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  ratio?: ImageRatio;
  sizes: string;
  headingLevel?: "h2" | "h3";
  className?: string;
}

/** Editorial project card: image first, quiet metadata below. */
export function ProjectCard({
  project,
  index,
  ratio = "4/5",
  sizes,
  headingLevel: Title = "h3",
  className,
}: ProjectCardProps) {
  return (
    <article className={cn("group", className)}>
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`${uiText.viewProject}: ${project.name}`}>
        <div className="relative">
          <ImageFrame image={project.mainImage} ratio={ratio} sizes={sizes} zoom />
          {project.isMock ? <MockBadge label={uiText.demoProject} className="absolute left-4 top-4" /> : null}
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow flex gap-3 text-taupe-deep">
              <span className="tabular-nums">{formatIndex(index)}</span>
              <span>{getCategoryLabel(project.category)}</span>
            </p>
            <Title className="mt-3 font-display text-h3 transition-colors duration-500 group-hover:text-walnut">
              {project.name}
            </Title>
          </div>
          <dl className="shrink-0 pt-1 text-right text-sm text-walnut">
            <dt className="sr-only">Diện tích</dt>
            <dd className="tabular-nums">{formatArea(project.areaSqm)}</dd>
            <dt className="sr-only">Phong cách</dt>
            <dd className="mt-1 text-xs text-taupe-deep">{project.designStyle}</dd>
          </dl>
        </div>
      </Link>
    </article>
  );
}

/**
 * Asymmetric editorial rhythm for project grids (12-column on desktop).
 * Repeats every four items; mobile and tablet fall back to a simple grid.
 */
const editorial: { className: string; ratio: ImageRatio; sizes: string }[] = [
  { className: "lg:col-span-7", ratio: "4/5", sizes: "(min-width: 1024px) 56vw, (min-width: 640px) 50vw, 100vw" },
  {
    className: "lg:col-span-4 lg:col-start-9 lg:mt-56",
    ratio: "3/4",
    sizes: "(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-5 lg:col-start-2",
    ratio: "3/4",
    sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-6 lg:col-start-7 lg:mt-32",
    ratio: "3/2",
    sizes: "(min-width: 1024px) 48vw, (min-width: 640px) 50vw, 100vw",
  },
];

export function editorialSlot(position: number) {
  return editorial[position % editorial.length];
}

export function ProjectGrid({ projects, startIndex = 1 }: { projects: Project[]; startIndex?: number }) {
  return (
    <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
      {projects.map((project, i) => {
        const slot = editorialSlot(i);
        return (
          <li key={project.id} className={slot.className}>
            <ProjectCard project={project} index={startIndex + i} ratio={slot.ratio} sizes={slot.sizes} />
          </li>
        );
      })}
    </ul>
  );
}
