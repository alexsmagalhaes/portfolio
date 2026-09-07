import { type Dictionary, t } from "intlayer";

const navbarContent = {
  key: "navbar",
  content: {
    items: {
      home: t({
        "pt-BR": "Início/topo",
        en: "Home/top",
      }),
      projects: t({
        "pt-BR": "Projetos",
        en: "Projects",
      }),
      about: t({
        "pt-BR": "Sobre",
        en: "About",
      }),
      contacts: t({
        "pt-BR": "Contatos",
        en: "Contacts",
      }),
    },
  },
} satisfies Dictionary;

export default navbarContent;
