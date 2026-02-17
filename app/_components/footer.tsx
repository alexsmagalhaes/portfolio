import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/common/about-image.jpg";

import { getCurrentTime } from "../_utils/get-current-time";
import { Container } from "./container";
import { GoToTop } from "./go-to-top";

export function Footer() {
  const time = getCurrentTime();

  return (
    <footer className="border-border-default border-t py-4.5">
      <Container className="gap-between-blocks-large grid w-full grid-cols-2 items-center md:grid-cols-3 lg:flex lg:items-center lg:justify-between">
        <Image
          className="col-span-2 w-full sm:hidden"
          alt="Alex desenvolvendo um projeto para um cliente"
          height={564}
          src={Image1}
          width={296}
        />
        <div className="gap-between-blocks-xxsmall flex items-center">
          <Image
            className="hidden w-14 sm:block"
            alt="Alex desenvolvendo um projeto para um cliente"
            height={56}
            src={Image1}
            width={112}
          />
          AlexMagalhães.
        </div>

        <Link
          className="underline"
          href="https://www.linkedin.com/in/alexmagalhaes-dev/"
          target="_blank"
        >
          Linkedin{" "}
          <span className="hidden sm:inline">: /alexmagalhaes-dev</span>
        </Link>

        <Link
          className="underline"
          href="https://github.com/alexsmagalhaes/"
          target="_blank"
        >
          Github <span className="hidden sm:inline">: /alexsmagalhaes</span>
        </Link>

        <Link
          className="underline"
          href="mailto:alexmagalhaesprofissional@gmail.com"
        >
          Whatsapp{" "}
          <span className="hidden text-[0.8125rem] sm:inline">
            : (88) 9 9332 - 6040
          </span>
        </Link>

        <div className="text-[0.8125rem] uppercase">{time}</div>

        <GoToTop />
      </Container>
    </footer>
  );
}
