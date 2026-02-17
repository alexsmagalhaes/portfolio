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
      <Container className="gap-between-blocks-large flex grid-cols-3 items-center justify-between lg:grid">
        <Link
          className="text-[1.0625rem] leading-none whitespace-nowrap text-white/50 sm:text-lg"
          href="/"
        >
          <span>
            &lt; <span className="text-white">AlexMagalhaes</span> /&gt;
          </span>
        </Link>

        <div className="gap-between-blocks-medium hidden items-center justify-center lg:flex">
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
          <Button className="size-7 sm:size-8" square variant="outline">
            <Image priority alt="Github" height={16} src={Image1} width={16} />
          </Button>
          <Button className="h-7 px-2 text-[0.6875rem] sm:h-8 sm:px-4 sm:text-xs">
            <span className="sm:hidden">Resume</span>{" "}
            <span className="hidden sm:inline-block">Baixar - CV</span>
          </Button>
        </div>
      </Container>
    </nav>
  );
}
