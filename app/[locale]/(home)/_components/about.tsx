import { useIntlayer } from "next-intlayer/server";
import Image from "next/image";
import Link from "next/link";

import Image1 from "@/app/_assets/images/home/about-bg.svg";
import { Container } from "@/app/_components/container";
import { URLS_ACTIONS } from "@/app/constants/urls-action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Tag } from "./tag";

type ExperienceItemProps = {
  title: string;
  description?: string;
  period: string;
  className?: string;
};

export function ExperienceItem({
  title,
  description,
  period,
  className,
}: Readonly<ExperienceItemProps>) {
  return (
    <div
      className={cn(
        "border-border-default py-between-blocks-medium border-t",
        className,
      )}
    >
      <div className="mb-between-blocks-medium font-sub-heading text-title-100 leading-snug font-bold tracking-[0.05em] uppercase sm:leading-none">
        {title} <span className="text-title-100/50 inline">{period}</span>
      </div>

      {description && <div>{description}</div>}
    </div>
  );
}

export function About() {
  const content = useIntlayer("home-about");

  return (
    <section
      id="about"
      className="py-section-small border-border-default relative border-t"
    >
      <Image
        className="absolute inset-0 h-full w-full opacity-40 md:opacity-20"
        alt=""
        height={1036}
        loading="eager"
        src={Image1}
        width={1440}
      />

      <Container className="relative z-10">
        <div className="gap-between-blocks-xxlarge lg:max-w-cols-6 flex flex-col">
          <div>
            <h2 className="mb-between-title-text h3">{content.heading}</h2>
            <div>
              {content.description.map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  {index < content.description.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              {content.certificationsLabel}
            </div>

            {content.certifications.map((item, index) => (
              <ExperienceItem
                key={index}
                className="pb-between-blocks-tiny"
                period={item.period.value}
                title={item.title.value}
              />
            ))}
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              {content.stackLabel}
            </div>
            <div className="gap-between-blocks-tiny flex flex-wrap">
              {content.stack.map((item, index) => (
                <Tag key={index} variant="gray">
                  {item}
                </Tag>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-between-blocks-xsmall text-base">
              {content.experiencesLabel}
            </div>

            {content.experiences.map((item, index) => (
              <ExperienceItem
                key={index}
                description={item.description.value}
                period={item.period.value}
                title={item.title.value}
              />
            ))}
          </div>

          <div className="gap-between-buttons flex">
            <Button asChild>
              <Link href={URLS_ACTIONS.WHATSAPP} target="_blank">
                {content.contactButton}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={URLS_ACTIONS.LINKEDIN} target="_blank">
                {content.linkedinButton}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
