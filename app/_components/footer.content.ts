import { type Dictionary, t } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    brand: t({
      "pt-BR": "AlexMagalhaes.dev 🤙",
      en: "AlexMagalhaes.dev 🤙",
    }),
    imageAlt: t({
      "pt-BR": "Alex desenvolvendo um projeto para um cliente",
      en: "Alex developing a project for a client",
    }),
    linkedin: t({
      "pt-BR": "Linkedin",
      en: "Linkedin",
    }),
    linkedinHandle: t({
      "pt-BR": ": /alexmagalhaes-dev",
      en: ": /alexmagalhaes-dev",
    }),
    github: t({
      "pt-BR": "Github",
      en: "Github",
    }),
    githubHandle: t({
      "pt-BR": ": /alexsmagalhaes",
      en: ": /alexsmagalhaes",
    }),
    whatsapp: t({
      "pt-BR": "Whatsapp",
      en: "Whatsapp",
    }),
    whatsappHandle: t({
      "pt-BR": ": (88) 9 9332 - 6040",
      en: ": (88) 9 9332 - 6040",
    }),
  },
} satisfies Dictionary;

export default footerContent;
