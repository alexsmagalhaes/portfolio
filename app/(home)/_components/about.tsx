import Link from "next/link";

import { Container } from "@/app/_components/container";
import { Button } from "@/components/ui/button";

import { Tag } from "./tag";

export const EXPERIENCES = [
  {
    title: "Dev. Full Stack - dewe.dev - 2025 a 2026",
    description:
      "Each IOH module is built for implementation — not just information. With structured frameworks, clinical depth, and real-world relevance, you’ll gain the confidence to treat the root cause, not just chase symptoms",
  },
  {
    title: "Dev. Front-End - Quarto de Ideias - 2022 a 2025",
    description:
      "Each IOH module is built for implementation — not just information. With structured frameworks, clinical depth, and real-world relevance, you’ll gain the confidence to treat the root cause, not just chase symptoms",
  },
];

type ExperienceItemProps = {
  title: string;
  description: string;
};

export function ExperienceItem({
  title,
  description,
}: Readonly<ExperienceItemProps>) {
  return (
    <div className="border-border-default py-between-blocks-medium border-t">
      <div className="mb-between-blocks-medium font-sub-heading text-title-100 leading-none font-bold tracking-[0.05em] uppercase">
        {title}
      </div>

      <div>{description}</div>
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
  "INTELIGÊNCIA ARTIFICIAL",
  "ZUSTAND",
  "POSTGRESQL",
  "CI/CD",
  "CURSOR",
];

export function About() {
  return (
    <section className="py-section-small">
      <Container>
        <div className="gap-between-blocks-xxlarge max-w-cols-6 flex flex-col">
          <div>
            <h2 className="mb-between-title-text">Experiência e tecnologias</h2>
            <div>
              Each IOH module is built for implementation — not just
              information. With structured frameworks, clinical depth, and
              real-world relevance, you’ll gain the confidence to treat the root
              cause, not just chase symptoms.
              <br />
              <br />
              Every practitioner’s journey is different — but the results speak
              for themselves. From confidence in complex cases to clarity in
              clinical direction, see how IOH has shaped thousands of careers.
            </div>
          </div>

          <div>
            <h3 className="mb-between-blocks-xsmall">Minha Stack:</h3>
            <div className="gap-between-blocks-tiny flex flex-wrap">
              {STACK.map((item, index) => (
                <Tag key={index} variant="gray">
                  {item}
                </Tag>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-between-blocks-xsmall">
              Experiências relevantes:
            </h3>

            {EXPERIENCES.map((item, index) => (
              <ExperienceItem
                key={index}
                description={item.description}
                title={item.title}
              />
            ))}
          </div>

          <div className="gap-between-buttons flex">
            <Button asChild>
              <Link href="" target="_blank">
                Entre em contato
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="" target="_blank">
                Baixar - CV
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
