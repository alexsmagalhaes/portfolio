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
    href: "https://casatecaguriu.com.br/",
    projectName: "Casa Teçá Guriú",
    shortDescription:
      "Projeto voltado à ampliação do alcance da marca no Google com SEO local.",
    tags: ["Webflow", "Metrificação", "Client First"],
  },
  {
    cover: Image5,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/club-de-mar.mp4",
    videoCover: Cover5,
    href: "https://www.clubdemar.com.br/",
    projectName: "Rede de Mar - Condo Hoteis",
    shortDescription:
      "Criação de um ecosistema digital para as marcas do grupo e integrações com serviços de terceiros.",
    tags: ["Next JS", "Design System", "i18n"],
  },
  {
    cover: Image4,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/kilombo-villas.mp4",
    videoCover: Cover4,
    href: "https://kilombovillas.com/",
    projectName: "Kilombo Villas",
    shortDescription:
      "Aplicação desenvolvida para gestão de campanhas, automação de processos e ampliação do alcance.",
    tags: ["Webflow", "Metrificação", "Automações"],
  },
  {
    cover: Image3,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/cotaindie",
    videoCover: Cover3,
    projectName: "Cotaindie - Sistemas Industriais",
    shortDescription:
      "Sistema de emissão de documentos com geração de planos inteligentes para otimização do uso de materiais.",
    tags: ["Next Js", "Supabase", "Postgree", "API"],
  },
  {
    cover: Image2,
    video: "https://wexoor92cdqpulec.public.blob.vercel-storage.com/ibf.mp4",
    videoCover: Cover2,
    href: "https://www.ibf.ind.br/",
    projectName: "IBF - Industria de Telhas",
    shortDescription:
      "Projeto focado na integração com anúncios para crescimento de alcance e conversão da marca.",
    tags: ["Webflow", "Metrificação", "Client First"],
  },
  {
    cover: Image1,
    video:
      "https://wexoor92cdqpulec.public.blob.vercel-storage.com/serrao-de-castro.mp4",
    videoCover: Cover1,
    projectName: "Escritório Serrão de Castro",
    shortDescription:
      "Reformulação do site focada na expansão do alcance na Europa via anúncios e SEO.",
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
          <h2 className="mb-between-title-text h3">Projetos desenvolvidos</h2>
          <div>
            Aplicações que desenvolvi para empresas que precisavam aprimorar
            processos, cortar custos e aumentar o alcance digital.
          </div>
        </div>

        <div className="gap-between-blocks-xsmall grid sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <div key={index}>
              <ProjectCard
                cover={item.cover}
                href={item.href}
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
