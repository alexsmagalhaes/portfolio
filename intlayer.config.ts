import { type IntlayerConfig, Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE_BRAZIL],
    defaultLocale: Locales.PORTUGUESE_BRAZIL,
    requiredLocales: [Locales.ENGLISH, Locales.PORTUGUESE_BRAZIL],
  },
  build: {
    optimize: true,
    importMode: "static",
    traversePattern: ["**/*.{js,ts,jsx,tsx}", "!**/node_modules/**"],
  },
};

export default config;
