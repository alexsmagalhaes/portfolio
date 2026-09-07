import { type Dictionary, t } from "intlayer";

const projectsContent = {
  key: "home-projects",
  content: {
    heading: t({
      "pt-BR": "Projetos desenvolvidos",
      en: "Projects I've built",
    }),
    description: t({
      "pt-BR":
        "Aplicações que desenvolvi para empresas que precisavam aprimorar processos, cortar custos e aumentar o alcance digital.",
      en: "Applications I built for companies that needed to improve processes, cut costs and grow their digital reach.",
    }),

    items: [
      {
        projectName: t({
          "pt-BR": "Casa Teçá Guriú",
          en: "Casa Teçá Guriú",
        }),
        shortDescription: t({
          "pt-BR":
            "Projeto voltado à ampliação do alcance da marca no Google com SEO local.",
          en: "Project focused on expanding the brand's reach on Google with local SEO.",
        }),
        tags: [
          t({ "pt-BR": "Webflow", en: "Webflow" }),
          t({ "pt-BR": "Metrificação", en: "Metrics" }),
          t({ "pt-BR": "Client First", en: "Client First" }),
        ],
      },
      {
        projectName: t({
          "pt-BR": "Rede de Mar - Condo Hoteis",
          en: "Rede de Mar - Condo Hotels",
        }),
        shortDescription: t({
          "pt-BR":
            "Criação de um ecosistema digital para as marcas do grupo e integrações com serviços de terceiros.",
          en: "Built a digital ecosystem for the group's brands with third-party service integrations.",
        }),
        tags: [
          t({ "pt-BR": "Next JS", en: "Next JS" }),
          t({ "pt-BR": "Design System", en: "Design System" }),
          t({ "pt-BR": "i18n", en: "i18n" }),
        ],
      },
      {
        projectName: t({
          "pt-BR": "Kilombo Villas",
          en: "Kilombo Villas",
        }),
        shortDescription: t({
          "pt-BR":
            "Aplicação desenvolvida para gestão de campanhas, automação de processos e ampliação do alcance.",
          en: "Application built for campaign management, process automation and reach expansion.",
        }),
        tags: [
          t({ "pt-BR": "Webflow", en: "Webflow" }),
          t({ "pt-BR": "Metrificação", en: "Metrics" }),
          t({ "pt-BR": "Automações", en: "Automations" }),
        ],
      },
      {
        projectName: t({
          "pt-BR": "Cotaindie - Sistemas Industriais",
          en: "Cotaindie - Industrial Systems",
        }),
        shortDescription: t({
          "pt-BR":
            "Sistema de emissão de documentos com geração de planos inteligentes para otimização do uso de materiais.",
          en: "Document issuance system with smart plan generation to optimize material usage.",
        }),
        tags: [
          t({ "pt-BR": "Next Js", en: "Next Js" }),
          t({ "pt-BR": "Supabase", en: "Supabase" }),
          t({ "pt-BR": "Postgree", en: "Postgree" }),
          t({ "pt-BR": "API", en: "API" }),
        ],
      },
      {
        projectName: t({
          "pt-BR": "IBF - Industria de Telhas",
          en: "IBF - Roof Tile Manufacturer",
        }),
        shortDescription: t({
          "pt-BR":
            "Projeto focado na integração com anúncios para crescimento de alcance e conversão da marca.",
          en: "Project focused on ad integrations to grow the brand's reach and conversion.",
        }),
        tags: [
          t({ "pt-BR": "Webflow", en: "Webflow" }),
          t({ "pt-BR": "Metrificação", en: "Metrics" }),
          t({ "pt-BR": "Client First", en: "Client First" }),
        ],
      },
      {
        projectName: t({
          "pt-BR": "Escritório Serrão de Castro",
          en: "Serrão de Castro Law Office",
        }),
        shortDescription: t({
          "pt-BR":
            "Reformulação do site focada na expansão do alcance na Europa via anúncios e SEO.",
          en: "Website redesign focused on expanding reach in Europe through ads and SEO.",
        }),
        tags: [
          t({ "pt-BR": "Next Js", en: "Next Js" }),
          t({ "pt-BR": "Metrificação", en: "Metrics" }),
          t({ "pt-BR": "I18N", en: "I18N" }),
        ],
      },
    ],
  },
} satisfies Dictionary;

export default projectsContent;
