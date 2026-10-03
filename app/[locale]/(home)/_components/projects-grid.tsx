"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { ProjectCard, type ProjectCardProps } from "./project-card";

const INITIAL_VISIBLE = 4;

interface ProjectsGridProps {
  items: ProjectCardProps[];
  showMoreLabel: string;
  showLessLabel: string;
}

export function ProjectsGrid({
  items,
  showMoreLabel,
  showLessLabel,
}: Readonly<ProjectsGridProps>) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - INITIAL_VISIBLE;
  const visibleItems = expanded ? items : items.slice(0, INITIAL_VISIBLE);

  return (
    <div className="gap-between-blocks-xsmall flex flex-col">
      <div className="gap-between-blocks-xsmall grid sm:grid-cols-2">
        {visibleItems.map((item) => (
          <ProjectCard key={item.projectName} {...item} />
        ))}
      </div>

      {hiddenCount > 0 && (
        <Button
          className="w-full"
          disableAnimation
          variant="outline"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? showLessLabel : `${showMoreLabel} (${hiddenCount})`}
        </Button>
      )}
    </div>
  );
}
