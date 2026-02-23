import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/home/about-bg.svg";
import { Container } from "@/app/_components/container";
import { URLS_ACTIONS } from "@/app/constants/urls-action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Tag } from "./tag";

export const CERTIFICATIONS = [
  {
    title: "Ciências da Computação - IFCE",
    period: " - 2022 a (em andamento)",
  },
  {
    title: "Técnico em informática",
    period: " - 2017 a 2019",
  },
];

export const EXPERIENCES = [
  {
    title: "Dev. full stack - dewe.dev",
    period: " - 2024 até o momento",
    description:
      "Desenvolvimento de soluções para clientes: pequenos sistemas, integrações com serviços de terceiros por meio de apis rest e otimizações em aplicações e códigos já existentes. Aplicando conceitos de organização de código, boas práticas de desenvolvimento e otimização.",
  },
  {
    title: "Dev. front-end - quarto de ideias",
    period: " - 2021 a 2024",
    description:
      "Atuação na criação de interfaces (UI e UX) e no desenvolvimento de automações e pequenas aplicações do design até o desenvolvimento e deployment  para clientes de diversos nichos. Aplicação de padrões de projeto, boas práticas e foco na performance e escalabilidade.",
  },
];

type ExperienceItemProps = {
  title: string;
  description?: string;
  period: string;
  className?: string;
};

export function ExperienceItem({
  title,
  description,
  period,
  className,
}: Readonly<ExperienceItemProps>) {
  return (
    <div
      className={cn(
        "border-border-default py-between-blocks-medium border-t",
        className,
      )}
    >
      <div className="mb-between-blocks-medium font-sub-heading text-title-100 leading-snug font-bold tracking-[0.05em] uppercase sm:leading-none">
        {title} <span className="text-title-100/50 inline">{period}</span>
      </div>

      {description && <div>{description}</div>}
    </div>
  );
}

const STACK = [
  "WEBFLOW",
  "REACT",
  "NEXT JS",
  "TYPESCRIPT",
  "SUPABASE",
  "NODE JS",
  "NEST JS",
  "EXPRESS",
  "HTML",
  "JAVASCRIPT",
  "CSS",
  "UI UX DESIGN",
  "TAILWIND CSS",
  "TAG MANAGER",
  "ANALYTICS",
  "INTELIGÊNCIA ARTIFICIAL",
  "ZUSTAND",
  "POSTGRESQL",
  "CI/CD",
  "CURSOR",
  "Claude Code",
];

export function About() {
  return (
    <section
      id="about"
      className="py-section-small border-border-default relative border-t"
    >
      <Image
        className="absolute inset-0 h-full w-full opacity-40 md:opacity-20"
        alt=""
        height={1036}
        loading="eager"
        src={Image1}
        width={1440}
      />

      <Container className="relative z-10">
        <div className="gap-between-blocks-xxlarge lg:max-w-cols-6 flex flex-col">
          <div>
            <h2 className="mb-between-title-text h3">
              💻 Experiências e tecnologias
            </h2>
            <div>
              Atuo no desenvolvimento, criação e gestão de sistemas, interfaces
              e automações, desde o design até o deployment, construindo
              aplicações escaláveis, performáticas e bem estruturadas.
              <br />
              <br />
              Tenho experiência em analisar, projetar e conduzir soluções desde
              a concepção até o lançamento e evolução, sempre com foco em boas
              práticas de usabilidade, experiência do usuário e com um workflow
              enxuto e integrado as ferramentas atuais de inteligência
              artificial (IA).
              <br />
              <br />
              Curso Ciência da Computação e estou em constante evolução,
              buscando aplicar boas práticas de desenvolvimento, organização de
              código e padrões de projeto para construir softwares confiáveis e
              com qualidade.
              <br />
              <br />
              Tenho perfil orientado à resolução de problemas, aprendizado
              contínuo e colaboração com equipes que valorizam inovação,
              eficiência e excelência técnica.
            </div>
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              Formações e certificações:
            </div>

            {CERTIFICATIONS.map((item, index) => (
              <ExperienceItem
                key={index}
                className="pb-between-blocks-tiny"
                period={item.period}
                title={item.title}
              />
            ))}
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              Minha Stack:
            </div>
            <div className="gap-between-blocks-tiny flex flex-wrap">
              {STACK.map((item, index) => (
                <Tag key={index} variant="gray">
                  {item}
                </Tag>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              Experiências relevantes:
            </div>

            {EXPERIENCES.map((item, index) => (
              <ExperienceItem
                key={index}
                description={item.description}
                period={item.period}
                title={item.title}
              />
            ))}
          </div>

          <div className="gap-between-buttons flex">
            <Button asChild>
              <Link href={URLS_ACTIONS.WHATSAPP} target="_blank">
                Entre em contato
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={URLS_ACTIONS.LINKEDIN} target="_blank">
                Linkedin
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
