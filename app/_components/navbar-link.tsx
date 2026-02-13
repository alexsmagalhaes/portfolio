"use client";

import { useLenis } from "lenis/react";

import { Icon } from "./icon";

interface NavbarLink {
  text: string;
  sectionId: string;
  icon?: string;
}

export function NavbarLink({ sectionId, text, icon }: Readonly<NavbarLink>) {
  const lenis = useLenis();

  function handleClick() {
    lenis?.scrollTo(sectionId, { offset: 64 });
  }

  return (
    <button
      className="rounded-default gap-inner-gap flex items-center justify-center px-2.5 py-0.5"
      onClick={handleClick}
    >
      {icon && <Icon name={icon} />}
      {text}
    </button>
  );
}
