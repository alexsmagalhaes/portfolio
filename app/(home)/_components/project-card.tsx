import type { StaticImageData } from "next/image";

import Image from "next/image";
import Link from "next/link";

import { VideoBackground } from "@/app/_components/background-video";
import { Icon } from "@/app/_components/icon";

import { Tag } from "./tag";

interface ProjectCardProps {
  projectName: string;
  video: string;
  href?: string;
  videoCover: StaticImageData;
  cover: StaticImageData;
  tags: string[];
  shortDescription: string;
}

export function ProjectCard({
  href,
  cover,
  video,
  videoCover,
  projectName,
  shortDescription,
  tags,
}: Readonly<ProjectCardProps>) {
  return (
    <Link className="rounded-default relative overflow-clip" href={href || "#"}>
      <Image
        className="absolute inset-0 z-0 size-full w-full"
        alt={projectName}
        height={374}
        loading="eager"
        placeholder="blur"
        src={cover}
        width={442}
      />

      <div className="py-between-blocks-medium px-between-blocks-medium bg-bg-theme-1/70 gap-between-blocks-xsmall relative z-10 flex flex-col transition-all duration-500 lg:opacity-0 lg:hover:opacity-100">
        <div
          className="text-title-100 flex items-center justify-between text-base"
          title={projectName}
        >
          {projectName} {href && <Icon name="arrow_outward" size={24} />}
        </div>

        <div className="rounded-default relative aspect-[1.8] grow overflow-clip shadow-xl">
          <VideoBackground fallbackImage={videoCover}>
            <source src={video} type="video/mp4" />
          </VideoBackground>
        </div>

        <div title={shortDescription}>{shortDescription}</div>

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
