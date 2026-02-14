import Image from "next/image";

import Image1 from "@/app/_assets/images/home/project-1.jpg";
import Image2 from "@/app/_assets/images/home/project-2.jpg";
import Image3 from "@/app/_assets/images/home/project-3.jpg";
import Image4 from "@/app/_assets/images/home/project-4.jpg";
import Image5 from "@/app/_assets/images/home/project-5.jpg";
import Image6 from "@/app/_assets/images/home/project-6.jpg";
import { Container } from "@/app/_components/container";

const ITEMS = [
  { cover: Image6 },
  { cover: Image5 },
  { cover: Image4 },
  { cover: Image3 },
  { cover: Image2 },
  { cover: Image1 },
];

export function Projects() {
  return (
    <section className="py-section-tiny border-border-default border-t">
      <Container className="gap-between-blocks-xxlarge flex flex-col">
        <div className="max-w-cols-5">
          <h2 className="mb-between-title-text">
            Experiência e projetos entregues
          </h2>
          <div>
            Each IOH module is built for implementation — not just information.
          </div>
        </div>

        <div className="gap-between-blocks-xsmall grid grid-cols-3">
          {ITEMS.map((item, index) => (
            <div key={index}>
              <Image alt="" src={item.cover} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
