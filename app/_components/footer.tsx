import { useIntlayer } from "next-intlayer/server";
import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/common/about-image.jpg";

import { getCurrentTime } from "../_utils/get-current-time";
import { URLS_ACTIONS } from "../constants/urls-action";
import { Container } from "./container";
import { GoToTop } from "./go-to-top";

export function Footer() {
  const time = getCurrentTime();
  const content = useIntlayer("footer");

  return (
    <footer id="contacts" className="border-border-default border-t py-4.5">
      <Container className="gap-between-blocks-large grid w-full grid-cols-2 items-center md:grid-cols-3 lg:flex lg:items-center lg:justify-between">
        <Image
          className="col-span-2 w-full sm:hidden"
          alt={content.imageAlt.value}
          height={564}
          loading="eager"
          src={Image1}
          width={296}
        />
        <div className="gap-between-blocks-xxsmall flex items-center">
          <Image
            className="hidden w-14 sm:block"
            alt={content.imageAlt.value}
            height={56}
            loading="eager"
            src={Image1}
            width={112}
          />
          {content.brand}
        </div>

        <Link
          className="underline"
          href={URLS_ACTIONS.LINKEDIN}
          target="_blank"
        >
          {content.linkedin}<span className="hidden sm:inline">{content.linkedinHandle}</span>
        </Link>

        <Link className="underline" href={URLS_ACTIONS.GITHUB} target="_blank">
          {content.github}<span className="hidden sm:inline">{content.githubHandle}</span>
        </Link>

        <Link className="underline" href={URLS_ACTIONS.WHATSAPP}>
          {content.whatsapp}
          <span className="hidden text-[0.8125rem] sm:inline">
            {content.whatsappHandle}
          </span>
        </Link>

        <div className="text-[0.8125rem] uppercase">{time}</div>

        <GoToTop />
      </Container>
    </footer>
  );
}
