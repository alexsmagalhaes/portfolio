import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/home/header-bg.svg";
import { Container } from "@/app/_components/container";
import { URLS_ACTIONS } from "@/app/constants/urls-action";
import { Button } from "@/components/ui/button";

import { HeaderLogos } from "./header-logos";
import { Tag } from "./tag";

export function Header() {
  return (
    <header className="py-section-tiny sm:py-section-small relative overflow-clip">
      <Image
        className="absolute inset-0 h-full w-full opacity-40 md:opacity-20"
        priority
        alt=""
        height={478}
        loading="eager"
        src={Image1}
        width={1440}
      />

      <Container className="relative z-10">
        <div className="lg:max-w-cols-5 flex flex-col items-start">
          <Tag>👋👇 Dev. fullstack e Webflow</Tag>
          <h1 className="mb-between-title-text mt-between-blocks-large h2">
            Desenvolvo soluções digitais escaláveis e com resultados
          </h1>
          <div className="mb-between-blocks-xxlarge">
            Foco na resolução de problemas de forma eficiente, para empresas
            alcancem novos resultados por meio de processos e soluções
            eficientes.
          </div>
        </div>

        <div className="gap-between-blocks-xxlarge lg:gap-between-blocks-large flex flex-col items-start lg:flex-row">
          <Button asChild>
            <Link href={URLS_ACTIONS.WHATSAPP} target="_blank">
              Entre em contato
            </Link>
          </Button>

          <HeaderLogos />
        </div>
      </Container>
    </header>
  );
}
