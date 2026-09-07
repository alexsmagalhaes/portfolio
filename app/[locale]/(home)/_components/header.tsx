import { useIntlayer } from "next-intlayer/server";
import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/home/header-bg.svg";
import { Container } from "@/app/_components/container";
import { URLS_ACTIONS } from "@/app/constants/urls-action";
import { Button } from "@/components/ui/button";

import { HeaderLogos } from "./header-logos";
import { Tag } from "./tag";

export function Header() {
  const content = useIntlayer("home-header");

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
          <Tag>{content.tag}</Tag>
          <h1 className="mb-between-title-text mt-between-blocks-large h2">
            {content.heading}
          </h1>
          <div className="mb-between-blocks-xxlarge">
            {content.description}
          </div>
        </div>

        <div className="gap-between-blocks-xxlarge lg:gap-between-blocks-large flex flex-col items-start lg:flex-row">
          <Button asChild>
            <Link href={URLS_ACTIONS.WHATSAPP} target="_blank">
              {content.contactButton}
            </Link>
          </Button>

          <HeaderLogos />
        </div>
      </Container>
    </header>
  );
}
