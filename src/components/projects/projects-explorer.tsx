"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project, ProjectCategory, SelectOption } from "@/types/content";
import { uiText } from "@/data/ui-text";
import { cn } from "@/lib/utils";
import { ProjectCard, editorialSlot } from "./project-card";

interface ProjectsExplorerProps {
  projects: Project[];
  categories: SelectOption<ProjectCategory>[];
  allLabel: string;
  emptyLabel: string;
  filterLabel: string;
}

/** Category filter + editorial project grid (client-side, no reload). */
export function ProjectsExplorer({ projects, categories, allLabel, emptyLabel, filterLabel }: ProjectsExplorerProps) {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const reduceMotion = useReducedMotion();
  const statusId = useId();
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  const options: { value: ProjectCategory | "all"; label: string; count: number }[] = [
    { value: "all", label: allLabel, count: projects.length },
    ...categories.map((c) => ({
      value: c.value,
      label: c.label,
      count: projects.filter((p) => p.category === c.value).length,
    })),
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label={filterLabel} className="-mx-1 flex flex-wrap gap-2">
          {options.map((option) => {
            const selected = option.value === active;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                aria-controls={statusId}
                disabled={option.count === 0}
                onClick={() => setActive(option.value)}
                className={cn(
                  "eyebrow inline-flex h-10 items-center gap-2 border px-4 transition-colors duration-500 ease-luxe disabled:cursor-not-allowed disabled:opacity-40",
                  selected
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-line-strong text-charcoal hover:border-charcoal",
                )}
              >
                {option.label}
                <span className={cn("tabular-nums", selected ? "text-sand" : "text-taupe-deep")}>{option.count}</span>
              </button>
            );
          })}
        </div>
        <p id={statusId} role="status" className="text-sm text-walnut">
          {uiText.projectCount(visible.length)}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="py-24 text-center text-walnut">{emptyLabel}</p>
      ) : (
        <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-24">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => {
              const slot = editorialSlot(i);
              return (
                <motion.li
                  key={project.id}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={slot.className}
                >
                  <ProjectCard project={project} index={i + 1} ratio={slot.ratio} sizes={slot.sizes} headingLevel="h2" />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}
