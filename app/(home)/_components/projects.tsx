import Cover6 from "@/app/_assets/images/home/casa-teca-cover.png";
import Cover5 from "@/app/_assets/images/home/club-de-mar-cover.png";
import Cover3 from "@/app/_assets/images/home/cotaindie-cover.png";
import Cover2 from "@/app/_assets/images/home/ibf-cover.png";
import Cover4 from "@/app/_assets/images/home/kilombo-villas-cover.png";
import Image1 from "@/app/_assets/images/home/project-1.jpg";
import Image2 from "@/app/_assets/images/home/project-2.jpg";
import Image3 from "@/app/_assets/images/home/project-3.jpg";
import Image4 from "@/app/_assets/images/home/project-4.jpg";
import Image5 from "@/app/_assets/images/home/project-5.jpg";
import Image6 from "@/app/_assets/images/home/project-6.jpg";
import Cover1 from "@/app/_assets/images/home/serrao-de-castro-cover.png";
import { Container } from "@/app/_components/container";

import { ProjectCard } from "./project-card";

const ITEMS = [
  {
    cover: Image6,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/casa-teca.mp4",
    videoCover: Cover6,
    projectName: "Casa Teçá Guriú",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Metrificação"],
  },
  {
    cover: Image5,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/club-de-mar.mp4",
    videoCover: Cover5,
    projectName: "Rede de Mar - Condo Hoteis",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Next JS", "Design System", "i18n"],
  },
  {
    cover: Image4,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/kilombo-villas.mp4",
    videoCover: Cover4,
    projectName: "Kilombo Villas",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Metrificação", "Design System"],
  },
  {
    cover: Image3,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/cotaindie",
    videoCover: Cover3,
    projectName: "Cotaindie - Sistemas Industriais",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Next Js", "Supabase", "Postgree", "API"],
  },
  {
    cover: Image2,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/ibf.mp4",
    videoCover: Cover2,
    projectName: "IBF - Industria de Telhas",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Webflow", "Metrificação"],
  },
  {
    cover: Image1,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/serrao-de-castro.mp4",
    videoCover: Cover1,
    projectName: "Escritório Serrão de Castro",
    shortDescription:
      "Part of my main activity includes preparing visualizations for music releases by electronic.",
    tags: ["Next Js", "Metrificação", "I18N"],
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
                projectName={item.projectName}
                shortDescription={item.shortDescription}
                tags={item.tags}
                video={item.video}
                videoCover={item.videoCover}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
