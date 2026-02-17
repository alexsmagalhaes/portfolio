import Image1 from "@/app/_assets/images/home/project-1.jpg";
import Image2 from "@/app/_assets/images/home/project-2.jpg";
import Image3 from "@/app/_assets/images/home/project-3.jpg";
import Image4 from "@/app/_assets/images/home/project-4.jpg";
import Image5 from "@/app/_assets/images/home/project-5.jpg";
import Image6 from "@/app/_assets/images/home/project-6.jpg";
import { Container } from "@/app/_components/container";

import { ProjectCard } from "./project-card";

const ITEMS = [
  {
    cover: Image6,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
  {
    cover: Image5,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
  {
    cover: Image4,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
  {
    cover: Image3,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
  {
    cover: Image2,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
  {
    cover: Image1,
    projectName: "Restaurant Flav",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Hotel"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-section-tiny border-border-default border-t"
    >
      <Container className="gap-between-blocks-xxlarge flex flex-col">
        <div className="lg:max-w-cols-5">
          <h2 className="mb-between-title-text h3">
            Experiência e projetos entregues
          </h2>
          <div>
            Each IOH module is built for implementation — not just information.
          </div>
        </div>

        <div className="gap-between-blocks-xsmall grid sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <div key={index}>
              <ProjectCard
                cover={item.cover}
                projectName="Restaurant Flav"
                shortDescription="Part of my main activity includes preparing visualizations for music releases by electronic."
                tags={["Webflow", "Hotel"]}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
