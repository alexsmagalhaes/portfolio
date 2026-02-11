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
      <Container className="gap-between-blocks-large flex items-center justify-between">
        <div className="gap-between-blocks-large flex items-center">
          <div className="gap-between-blocks-xxsmall flex items-center">
            <Image
              className="w-14"
              alt="Alex desenvolvendo um projeto para um cliente"
              height={56}
              src={Image1}
              width={112}
            />
            AlexMagalhães.
          </div>

          <Link
            href="https://www.linkedin.com/in/alexmagalhaes-dev/"
            target="_blank"
          >
            Linkedin: <span className="underline">/alexmagalhaes-dev</span>
          </Link>

          <Link href="https://github.com/alexsmagalhaes/" target="_blank">
            Github: <span className="underline">/alexsmagalhaes</span>
          </Link>

          <Link
            href="mailto:alexmagalhaesprofissional@gmail.com"
            target="_blank"
          >
            Email:{" "}
            <span className="underline">
              alexmagalhaesprofissional@gmail.com
            </span>
          </Link>
        </div>

        <div className="gap-between-blocks-large flex items-center">
          <div className="text-[0.8125rem] uppercase">{time}</div>

          <GoToTop />
        </div>
      </Container>
    </footer>
  );
}
