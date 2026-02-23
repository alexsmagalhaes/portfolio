import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/common/github-icon.svg";
import { Button } from "@/components/ui/button";

import { URLS_ACTIONS } from "../constants/urls-action";
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
    sectionId: "projects",
    icon: "folder_code",
  },
  {
    text: "Sobre",
    sectionId: "about",
    icon: "table_chart_view",
  },
  {
    text: "Contatos",
    sectionId: "contacts",
    icon: "call",
  },
];

export function Navbar() {
  return (
    <nav className="bg-bg-theme-1 border-border-default sticky top-0 z-40 flex max-h-16 items-center border-b py-4">
      <Container className="gap-between-blocks-large flex grid-cols-3 items-center justify-between lg:grid">
        <Link
          className="text-lg leading-none whitespace-nowrap text-white/50"
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
          <Button className="size-8" asChild square variant="outline">
            <Link href={URLS_ACTIONS.GITHUB} target="_blank">
              <Image
                className="size-4 lg:size-3.5"
                priority
                alt="Github"
                height={16}
                src={Image1}
                width={16}
              />
            </Link>
          </Button>
          <Button className="h-8 px-4 text-xs" asChild>
            <Link href={URLS_ACTIONS.LINKEDIN} target="_blank">
              Linkedin
            </Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
}
