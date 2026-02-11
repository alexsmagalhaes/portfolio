"use client";

import { useLenis } from "lenis/react";

import { Icon } from "./icon";

export function GoToTop() {
  const lenis = useLenis();

  function handleClick() {
    lenis?.scrollTo(0);
  }

  return (
    <button
      className="gap-between-buttons flex items-center"
      onClick={handleClick}
    >
      Voltar ao topo <Icon name="arrow_upward" size={20} />
    </button>
  );
}
