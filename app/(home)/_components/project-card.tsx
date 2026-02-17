import type { StaticImageData } from "next/image";

import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/app/_components/icon";

import { Tag } from "./tag";

interface ProjectCardProps {
  projectName: string;
  cover: StaticImageData;
  tags: string[];
  shortDescription: string;
}

export function ProjectCard({
  cover,
  projectName,
  shortDescription,
  tags,
}: Readonly<ProjectCardProps>) {
  return (
    <Link className="rounded-default relative overflow-clip" href="">
      <Image
        alt={projectName}
        height={374}
        className="w-full"
        placeholder="blur"
        src={cover}
        width={442}
      />

      <div className="py-between-blocks-medium px-between-blocks-large bg-bg-theme-1/70 gap-between-blocks-xsmall absolute inset-0 z-10 flex size-full flex-col opacity-0 transition-all duration-500 hover:opacity-100">
        <div className="text-title-100 flex items-center justify-between text-base">
          {projectName} <Icon name="arrow_outward" size={24} />
        </div>

        <div className="min-w-46 grow bg-amber-500 shadow-xl" />

        <div>{shortDescription}</div>

        <div className="gap-inner-gap flex flex-wrap">
          {tags.map((item, index) => (
            <Tag key={index} variant="gray">
              {item}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
