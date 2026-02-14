import { Container } from "@/app/_components/container";
import { Button } from "@/components/ui/button";

import { HeaderLogos } from "./header-logos";
import { Tag } from "./tag";

export function Header() {
  return (
    <header className="py-section-small overflow-clip">
      <Container>
        <div className="max-w-cols-5 flex flex-col items-start">
          <Tag>Dev. fullstack e Webflow</Tag>
          <h1 className="mb-between-title-text mt-between-blocks-large h2">
            Desenvolvo soluções digitais escaláveis e com resultados
          </h1>
          <div className="mb-between-blocks-xxlarge">
            Pare de reinventar a roda. Enquanto outros desenvolvedores ainda
            configuram login, você já estará coletando feedback.
          </div>
        </div>

        <div className="gap-between-blocks-large flex">
          <Button>Entre em contato</Button>

          <HeaderLogos />
        </div>
      </Container>
    </header>
  );
}
