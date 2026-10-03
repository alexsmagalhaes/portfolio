import type { StaticImageData } from "next/image";

import Image from "next/image";
import Link from "next/link";

import { VideoBackground } from "@/app/_components/background-video";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  projectName: string;
  video: string;
  href?: string;
  videoCover: StaticImageData;
  cover: StaticImageData;
}

export function ProjectCard({
  href,
  cover,
  video,
  videoCover,
  projectName,
}: Readonly<ProjectCardProps>) {
  const className = cn(
    "rounded-default relative block cursor-default overflow-clip",
    href && "cursor-pointer",
  );

  const children = (
    <>
      <Image
        className="h-full w-full object-cover"
        alt={projectName}
        height={404}
        placeholder="blur"
        src={cover}
        width={670}
      />

      <div className="bg-bg-theme-1/60 absolute inset-0 flex items-center justify-center py-12 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
        <div className="relative aspect-[494/278] w-4/5 overflow-clip rounded-xs shadow-[0_7px_80px_rgba(0,0,0,0.35)]">
          <VideoBackground fallbackImage={videoCover}>
            <source src={video} type="video/mp4" />
          </VideoBackground>
        </div>
      </div>
    </>
  );

  if (!href) {
    return <div className={cn(className, "group")}>{children}</div>;
  }

  return (
    <Link
      className={cn(className, "group")}
      href={href}
      target="_blank"
      title={projectName}
    >
      {children}
    </Link>
  );
}
