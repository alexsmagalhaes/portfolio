import type { LocalPromiseParams, NextPageIntlayer } from "next-intlayer";
import type { ReactNode } from "react";

import { generateBaseMetadata } from "@/app/_utils/generate-base-metadata";

import { About } from "./_components/about";
import { Header } from "./_components/header";
import { Projects } from "./_components/projects";

export function generateMetadata({ params }: LocalPromiseParams) {
  return generateBaseMetadata({
    params,
    dictionaryKey: "home-metadata",
    path: "/",
  });
}

export default async function Home({
  params,
}: Readonly<Parameters<NextPageIntlayer>[0]>): Promise<ReactNode> {
  await params;

  return (
    <main>
      <Header />
      <Projects />
      <About />
    </main>
  );
}
