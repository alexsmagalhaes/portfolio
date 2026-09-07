import { type Dictionary, t } from "intlayer";

const aboutContent = {
  key: "home-about",
  content: {
    heading: t({
      "pt-BR": "💻 Experiências e tecnologias",
      en: "💻 Experience and technologies",
    }),
    description: [
      t({
        "pt-BR":
          "Atuo no desenvolvimento, criação e gestão de sistemas, interfaces e automações, desde o design até o deployment, construindo aplicações escaláveis, performáticas e bem estruturadas.",
        en: "I work on the development, creation and management of systems, interfaces and automations, from design to deployment, building scalable, performant and well-structured applications.",
      }),
      t({
        "pt-BR":
          "Tenho experiência em analisar, projetar e conduzir soluções desde a concepção até o lançamento e evolução, sempre com foco em boas práticas de usabilidade, experiência do usuário e com um workflow enxuto e integrado as ferramentas atuais de inteligência artificial (IA).",
        en: "I have experience analyzing, designing and driving solutions from conception through launch and evolution, always focused on usability best practices, user experience and a lean workflow integrated with current artificial intelligence (AI) tools.",
      }),
      t({
        "pt-BR":
          "Curso Ciência da Computação e estou em constante evolução, buscando aplicar boas práticas de desenvolvimento, organização de código e padrões de projeto para construir softwares confiáveis e com qualidade.",
        en: "I'm studying Computer Science and constantly evolving, applying development best practices, code organization and design patterns to build reliable, high-quality software.",
      }),
      t({
        "pt-BR":
          "Tenho perfil orientado à resolução de problemas, aprendizado contínuo e colaboração com equipes que valorizam inovação, eficiência e excelência técnica.",
        en: "I'm driven by problem solving, continuous learning and collaboration with teams that value innovation, efficiency and technical excellence.",
      }),
    ],

    certificationsLabel: t({
      "pt-BR": "Formações e certificações:",
      en: "Education and certifications:",
    }),
    stackLabel: t({
      "pt-BR": "Minha Stack:",
      en: "My stack:",
    }),
    experiencesLabel: t({
      "pt-BR": "Experiências relevantes:",
      en: "Relevant experience:",
    }),

    certifications: [
      {
        title: t({
          "pt-BR": "Ciências da Computação - IFCE",
          en: "Computer Science - IFCE",
        }),
        period: t({
          "pt-BR": " - 2022 a (em andamento)",
          en: " - 2022 to (in progress)",
        }),
      },
      {
        title: t({
          "pt-BR": "Técnico em informática",
          en: "IT Technician",
        }),
        period: t({
          "pt-BR": " - 2017 a 2019",
          en: " - 2017 to 2019",
        }),
      },
    ],

    experiences: [
      {
        title: t({
          "pt-BR": "Dev. full stack - dewe.dev",
          en: "Fullstack Dev - dewe.dev",
        }),
        period: t({
          "pt-BR": " - 2024 até o momento",
          en: " - 2024 to present",
        }),
        description: t({
          "pt-BR":
            "Desenvolvimento de soluções para clientes: pequenos sistemas, integrações com serviços de terceiros por meio de apis rest e otimizações em aplicações e códigos já existentes. Aplicando conceitos de organização de código, boas práticas de desenvolvimento e otimização.",
          en: "Development of client solutions: small systems, third-party integrations via REST APIs, and optimizations of existing applications and codebases. Applying code organization concepts, development best practices and optimization.",
        }),
      },
      {
        title: t({
          "pt-BR": "Dev. front-end - quarto de ideias",
          en: "Front-end Dev - quarto de ideias",
        }),
        period: t({
          "pt-BR": " - 2021 a 2024",
          en: " - 2021 to 2024",
        }),
        description: t({
          "pt-BR":
            "Atuação na criação de interfaces (UI e UX) e no desenvolvimento de automações e pequenas aplicações do design até o desenvolvimento e deployment  para clientes de diversos nichos. Aplicação de padrões de projeto, boas práticas e foco na performance e escalabilidade.",
          en: "Worked on creating interfaces (UI and UX) and developing automations and small applications, from design through development and deployment, for clients across various niches. Applied design patterns, best practices and a focus on performance and scalability.",
        }),
      },
    ],

    stack: [
      "WEBFLOW",
      "REACT",
      "NEXT JS",
      "TYPESCRIPT",
      "SUPABASE",
      "NODE JS",
      "NEST JS",
      "EXPRESS",
      "HTML",
      "JAVASCRIPT",
      "CSS",
      "UI UX DESIGN",
      "TAILWIND CSS",
      "TAG MANAGER",
      "ANALYTICS",
      t({
        "pt-BR": "INTELIGÊNCIA ARTIFICIAL",
        en: "ARTIFICIAL INTELLIGENCE",
      }),
      "ZUSTAND",
      "POSTGRESQL",
      "CI/CD",
      "CURSOR",
      "Claude Code",
    ],

    contactButton: t({
      "pt-BR": "Entre em contato",
      en: "Get in touch",
    }),
    linkedinButton: t({
      "pt-BR": "Linkedin",
      en: "Linkedin",
    }),
  },
} satisfies Dictionary;

export default aboutContent;
