import { useIntlayer } from "next-intlayer/server";

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

const ASSETS = [
  {
    cover: Image6,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/casa-teca.mp4",
    videoCover: Cover6,
    href: "https://casatecaguriu.com.br/",
  },
  {
    cover: Image5,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/club-de-mar.mp4",
    videoCover: Cover5,
    href: "https://www.clubdemar.com.br/",
  },
  {
    cover: Image4,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/kilombo-villas.mp4",
    videoCover: Cover4,
    href: "https://kilombovillas.com/",
  },
  {
    cover: Image3,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/cotaindie",
    videoCover: Cover3,
  },
  {
    cover: Image2,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/ibf.mp4",
    videoCover: Cover2,
    href: "https://www.ibf.ind.br/",
  },
  {
    cover: Image1,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/serrao-de-castro.mp4",
    videoCover: Cover1,
  },
];

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

        <div className="gap-between-blocks-xsmall grid sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <div key={index}>
              <ProjectCard
                cover={ASSETS[index].cover}
                href={ASSETS[index].href}
                projectName={item.projectName.value}
                shortDescription={item.shortDescription.value}
                tags={item.tags.map((tag) => tag.value)}
                video={ASSETS[index].video}
                videoCover={ASSETS[index].videoCover}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
