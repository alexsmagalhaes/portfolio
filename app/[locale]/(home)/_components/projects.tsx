import { useIntlayer } from "next-intlayer/server";

import { Container } from "@/app/_components/container";
import { PROJECTS_ASSETS } from "@/app/constants/projects-assets";

import { ProjectsGrid } from "./projects-grid";

export function Projects() {
  const content = useIntlayer("home-projects");

  return (
    <section
      id="projects"
      className="py-section-tiny border-border-default border-t"
    >
      <Container className="gap-between-blocks-xxlarge flex flex-col">
        <div className="lg:max-w-cols-5">
          <h2 className="mb-between-title-text h3">{content.heading}</h2>
          <div>{content.description}</div>
        </div>

        <ProjectsGrid
          items={content.items.map((item, index) => ({
            ...PROJECTS_ASSETS[index],
            projectName: item.projectName.value,
          }))}
          showLessLabel={content.showLess.value}
          showMoreLabel={content.showMore.value}
        />
      </Container>
    </section>
  );
}
