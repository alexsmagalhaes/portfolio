import { type Dictionary, t } from "intlayer";

const homeMetadataContent = {
  key: "home-metadata",
  content: {
    title: t({
      "pt-BR": "Alex Magalhães - Dev. fullstack e Webflow 👋",
      en: "Alex Magalhães - Fullstack and Webflow Dev 👋",
    }),
    description: t({
      "pt-BR":
        "Foco na resolução de problemas de forma eficiente, para empresas alcancem novos resultados por meio de processos e soluções eficientes.",
      en: "Focused on solving problems efficiently, so companies can reach new results through efficient processes and solutions.",
    }),
  },
} satisfies Dictionary;

export default homeMetadataContent;
