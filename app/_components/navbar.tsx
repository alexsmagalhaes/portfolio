import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/common/github-icon.svg";
import { Button } from "@/components/ui/button";

import { Container } from "./container";
import { NavbarLink } from "./navbar-link";

const ITEMS = [
  {
    text: "Início/topo",
    sectionId: "",
    icon: "",
  },
  {
    text: "Projetos",
    sectionId: "",
    icon: "folder_code",
  },
  {
    text: "Sobre",
    sectionId: "",
    icon: "table_chart_view",
  },
  {
    text: "Contatos",
    sectionId: "",
    icon: "call",
  },
];

export function Navbar() {
  return (
    <nav className="bg-bg-theme-1 border-border-default sticky top-0 z-40 flex max-h-16 items-center border-b py-4">
      <Container className="gap-between-blocks-large grid grid-cols-3 items-center justify-between">
        <Link className="text-lg leading-none text-white/50" href="/">
          <span>
            &lt; <span className="text-white">AlexMagalhaes</span> /&gt;
          </span>
        </Link>

        <div className="gap-between-buttons flex items-center justify-center">
          {ITEMS.map((item, index) => (
            <NavbarLink
              key={index}
              icon={item.icon}
              sectionId={item.sectionId}
              text={item.text}
            />
          ))}
        </div>

        <div className="gap-between-buttons flex justify-end">
          <Button square variant="outline">
            <Image alt="Github" height={16} src={Image1} width={16} />
          </Button>
          <Button>Baixar - CV</Button>
        </div>
      </Container>
    </nav>
  );
}
