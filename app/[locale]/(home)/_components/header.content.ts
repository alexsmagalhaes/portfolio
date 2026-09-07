import { type Dictionary, t } from "intlayer";

const headerContent = {
  key: "home-header",
  content: {
    tag: t({
      "pt-BR": "👋👇 Dev. fullstack e Webflow",
      en: "👋👇 Fullstack and Webflow Dev",
    }),
    heading: t({
      "pt-BR": "Desenvolvo soluções digitais escaláveis e com resultados",
      en: "I build scalable digital solutions that deliver results",
    }),
    description: t({
      "pt-BR":
        "Foco na resolução de problemas de forma eficiente, para empresas alcancem novos resultados por meio de processos e soluções eficientes.",
      en: "Focused on solving problems efficiently, so companies can reach new results through efficient processes and solutions.",
    }),
    contactButton: t({
      "pt-BR": "Entre em contato",
      en: "Get in touch",
    }),
  },
} satisfies Dictionary;

export default headerContent;
