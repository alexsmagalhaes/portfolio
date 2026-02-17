/* eslint-disable perfectionist/sort-imports */
import Image from "next/image";

import Image1 from "@/app/_assets/images/home/client-1.svg";
import Image10 from "@/app/_assets/images/home/client-10.svg";
import Image11 from "@/app/_assets/images/home/client-11.svg";
import Image12 from "@/app/_assets/images/home/client-12.svg";
import Image13 from "@/app/_assets/images/home/client-13.svg";
import Image14 from "@/app/_assets/images/home/client-14.svg";
import Image15 from "@/app/_assets/images/home/client-15.svg";
import Image16 from "@/app/_assets/images/home/client-16.svg";
import Image17 from "@/app/_assets/images/home/client-17.svg";
import Image2 from "@/app/_assets/images/home/client-2.svg";
import Image3 from "@/app/_assets/images/home/client-3.svg";
import Image4 from "@/app/_assets/images/home/client-4.svg";
import Image5 from "@/app/_assets/images/home/client-5.svg";
import Image6 from "@/app/_assets/images/home/client-6.svg";
import Image7 from "@/app/_assets/images/home/client-7.svg";
import Image8 from "@/app/_assets/images/home/client-8.svg";
import Image9 from "@/app/_assets/images/home/client-9.svg";

const ITEMS = [
  { src: Image1, alt: "" },
  { src: Image2, alt: "" },
  { src: Image3, alt: "" },
  { src: Image7, alt: "" },
  { src: Image4, alt: "" },
  { src: Image10, alt: "" },
  { src: Image5, alt: "" },
  { src: Image6, alt: "" },
  { src: Image8, alt: "" },
  { src: Image11, alt: "" },
  { src: Image12, alt: "" },
  { src: Image13, alt: "" },
  { src: Image9, alt: "" },
  { src: Image15, alt: "" },
  { src: Image14, alt: "" },
  { src: Image16, alt: "" },
  { src: Image17, alt: "" },
];

export function HeaderLogos() {
  return (
    <div className="relative w-full overflow-hidden opacity-65">
      <div className="from-bg-theme-1 pointer-events-none absolute inset-y-0 left-0 z-10 h-full w-41 bg-linear-to-r to-transparent lg:w-54 lg:from-15%" />

      <div className="overflow-hidden whitespace-nowrap">
        <div className="hover:paused inline-flex w-max animate-[logo-scroll_60s_linear_infinite]">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="px-between-blocks-medium flex shrink-0 items-center"
            >
              <Image
                className="scale-90"
                priority
                alt={item.alt}
                loading="eager"
                src={item.src}
              />
            </div>
          ))}

          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="px-between-blocks-medium flex shrink-0 items-center"
            >
              <Image
                className="scale-90"
                priority
                alt={item.alt}
                src={item.src}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="from-bg-theme-1 pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-41 bg-linear-to-l to-transparent lg:w-54" />
    </div>
  );
}
