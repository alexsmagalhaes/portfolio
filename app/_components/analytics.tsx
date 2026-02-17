"use client";

import { GoogleTagManager } from "@next/third-parties/google";

import { ClarityClient } from "./clarity";

export function Analytics() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-5NQ6K3JQ" />
      <ClarityClient />
    </>
  );
}
