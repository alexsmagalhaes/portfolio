import { intlayerProxy } from "next-intlayer/proxy";

export const proxy = intlayerProxy;

export const config = {
  matcher:
    "/((?!api|robots|sitemap|.*\\..*|_next).*)",
};
