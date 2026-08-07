export const locales = ["es", "en", "de"] as const;

export type Locale = (typeof locales)[number];

type Project = {
  title: string;
  type: string;
  summary: string;
};

type ResearchItem = {
  title: string;
  detail: string;
};

type TimelineItem = {
  period: string;
  role: string;
};

export type PortfolioContent = {
  localeName: string;
  nav: {
    work: string;
    systems: string;
    build: string;
    research: string;
    contact: string;
  };
  hero: {
    label: string;
    title: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  focus: {
    ariaLabel: string;
    currentRoleLabel: string;
    currentRole: string;
    location: string;
    stackLabel: string;
    stack: string;
    stackText: string;
    languagesLabel: string;
    languages: string;
    languagesText: string;
  };
  selectedWork: {
    label: string;
    heading: string;
    projects: Project[];
  };
  build: {
    label: string;
    heading: string;
    areas: string[];
  };
  research: {
    label: string;
    heading: string;
    items: ResearchItem[];
  };
  experience: {
    label: string;
    heading: string;
    text: string;
    ariaLabel: string;
    timeline: TimelineItem[];
  };
  stackLabel: string;
  contact: {
    label: string;
    heading: string;
    text: string;
    letterboxdLabel: string;
  };
};

const sharedStack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Next.js",
  "React",
  "Flutter",
  "Odoo",
  "n8n",
  "Botpress",
  "Firebase",
  "MongoDB",
  "OCI",
  "Google Cloud",
];

export const portfolioContent: Record<Locale, PortfolioContent> = {
  es: {
    localeName: "Español",
    nav: {
      work: "Trabajo",
      systems: "Sistemas",
      build: "Qué construyo",
      research: "Research",
      contact: "Contacto",
    },
    hero: {
      label: "Constructor tech + research aplicado en AI",
      title: "Sebastian Cervera Maltos",
      text: "Construyo software, automatización y sistemas con AI para problemas operativos reales: flujos ERP, herramientas internas, apps móviles, PWAs y prototipos de investigación que pueden convertirse en productos.",
      primaryCta: "Ver trabajo",
      secondaryCta: "Iniciar proyecto",
    },
    focus: {
      ariaLabel: "Enfoque actual",
      currentRoleLabel: "Rol actual",
      currentRole: "Head of Technology & AI",
      location: "Grupo Frio, Guadalajara",
      stackLabel: "Stack central",
      stack: "Odoo, Next.js, Flutter, n8n",
      stackText: "ERP, ingeniería de producto, automatización y flujos con AI.",
      languagesLabel: "Idiomas",
      languages: "Español, inglés, alemán",
      languagesText: "Español nativo con inglés B2+ y alemán B2+.",
    },
    selectedWork: {
      label: "Trabajo seleccionado",
      heading: "Productos, sistemas y trabajo técnico con contexto de negocio.",
      projects: [
        {
          title: "Grupo Frio Operations Platform",
          type: "PWA, Odoo, Next.js, Flutter",
          summary:
            "Herramientas internas para logística, ventas, administración y operaciones de campo conectadas a flujos ERP.",
        },
        {
          title: "Odoo Custom Workflows",
          type: "Python, XML, APIs, Odoo.sh",
          summary:
            "Módulos custom e integraciones en HR, inventario, ventas y procesos operativos.",
        },
        {
          title: "AI + Automation Workflows",
          type: "n8n, Botpress, APIs, ERP",
          summary:
            "Automatizaciones end-to-end que conectan sistemas de negocio, mensajería, herramientas de AI y procesos internos.",
        },
        {
          title: "OCI MyToDoList Workshop",
          type: "React, Helidon, Docker, OCI DevOps",
          summary:
            "App CRUD en React con API REST en Helidon, Docker, Terraform, Oracle Wallet y CI/CD en OCI.",
        },
      ],
    },
    build: {
      label: "Qué construyo",
      heading: "Software práctico para equipos que necesitan mover operaciones.",
      areas: [
        "Sitios de producto con Next.js y React",
        "Apps Flutter para operaciones móviles",
        "Módulos Odoo e integraciones ERP",
        "PWAs, herramientas admin y dashboards",
        "Automatizaciones n8n y flujos con AI",
        "Cloud, despliegues y setup de servidores",
      ],
    },
    research: {
      label: "AI aplicada / research",
      heading: "Investigación que se mantiene cerca de sistemas reproducibles.",
      items: [
        {
          title: "Bank Account Fraud Detection",
          detail:
            "Evaluación de métodos de machine learning sobre la suite BAF, con enfoque en datos tabulares, desbalance, cambio temporal y métricas de equidad.",
        },
        {
          title: "MP-GCN Playground Scene Understanding",
          detail:
            "Reconocimiento de actividad grupal basado en esqueletos, pose tracking, grafos conscientes de objetos y AI orientada a privacidad para escenas en parques.",
        },
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "De consultoría ERP a producto, automatización y operaciones con AI.",
      text: "He trabajado en consultoría Odoo, software custom, despliegues, automatización, infraestructura y habilitación técnica para empresas que están construyendo o mejorando sus operaciones digitales.",
      ariaLabel: "Línea de experiencia",
      timeline: [
        {
          period: "2025 - Presente",
          role: "Head of Technology & AI, Grupo Frio",
        },
        {
          period: "2024 - 2025",
          role: "Software Developer Manager, Grupo Veniu",
        },
        {
          period: "2023 - 2024",
          role: "Freelance Full-Stack Developer",
        },
      ],
    },
    stackLabel: "Stack",
    contact: {
      label: "Contacto",
      heading: "¿Tienes un problema operativo, idea de producto o prototipo de AI?",
      text: "Puedo ayudar a definir, construir y desplegar la primera versión útil, y después seguirla mejorando con el equipo.",
      letterboxdLabel: "Me encantan las pelis",
    },
  },
  en: {
    localeName: "English",
    nav: {
      work: "Work",
      systems: "Systems",
      build: "Build",
      research: "Research",
      contact: "Contact",
    },
    hero: {
      label: "Tech builder + applied AI research",
      title: "Sebastian Cervera Maltos",
      text: "I build software, automation, and AI-enabled systems for real operational problems: ERP workflows, internal tools, mobile apps, PWAs, and research prototypes that can become products.",
      primaryCta: "View selected work",
      secondaryCta: "Start a project",
    },
    focus: {
      ariaLabel: "Current focus",
      currentRoleLabel: "Current role",
      currentRole: "Head of Technology & AI",
      location: "Grupo Frio, Guadalajara",
      stackLabel: "Core stack",
      stack: "Odoo, Next.js, Flutter, n8n",
      stackText: "ERP, product engineering, automation, and AI workflows.",
      languagesLabel: "Languages",
      languages: "Spanish, English, German",
      languagesText: "Native Spanish with B2+ English and German.",
    },
    selectedWork: {
      label: "Selected work",
      heading: "Products, systems, and technical work with business context.",
      projects: [
        {
          title: "Grupo Frio Operations Platform",
          type: "PWA, Odoo, Next.js, Flutter",
          summary:
            "Internal tools for logistics, sales, administration, and field operations connected to ERP workflows.",
        },
        {
          title: "Odoo Custom Workflows",
          type: "Python, XML, APIs, Odoo.sh",
          summary:
            "Custom modules and integrations across HR, inventory, sales, and operational processes.",
        },
        {
          title: "AI + Automation Workflows",
          type: "n8n, Botpress, APIs, ERP",
          summary:
            "End-to-end automations that connect business systems, messaging, AI tools, and internal processes.",
        },
        {
          title: "OCI MyToDoList Workshop",
          type: "React, Helidon, Docker, OCI DevOps",
          summary:
            "React CRUD app with a Helidon REST API, Docker, Terraform, Oracle Wallet, and OCI CI/CD.",
        },
      ],
    },
    build: {
      label: "What I build",
      heading: "Practical software for teams that need operations to move.",
      areas: [
        "Next.js and React product sites",
        "Flutter and mobile operations apps",
        "Odoo modules and ERP integrations",
        "PWA admin tools and dashboards",
        "n8n automations and AI workflows",
        "Cloud, deployment, and server setup",
      ],
    },
    research: {
      label: "Applied AI / research",
      heading: "Research that stays close to reproducible systems.",
      items: [
        {
          title: "Bank Account Fraud Detection",
          detail:
            "Evaluation of machine learning methods on the BAF suite, focusing on tabular data, imbalance, temporal shift, and fairness metrics.",
        },
        {
          title: "MP-GCN Playground Scene Understanding",
          detail:
            "Skeleton-based group activity recognition using pose tracking, object-aware graphs, and privacy-preserving AI for public playground scenes.",
        },
      ],
    },
    experience: {
      label: "Experience",
      heading: "From ERP consulting to product engineering and AI operations.",
      text: "I have worked across Odoo consulting, custom software, deployment, automation, infrastructure, and technical enablement for companies building or improving their digital operations.",
      ariaLabel: "Experience timeline",
      timeline: [
        {
          period: "2025 - Present",
          role: "Head of Technology & AI, Grupo Frio",
        },
        {
          period: "2024 - 2025",
          role: "Software Developer Manager, Grupo Veniu",
        },
        {
          period: "2023 - 2024",
          role: "Freelance Full-Stack Developer",
        },
      ],
    },
    stackLabel: "Stack",
    contact: {
      label: "Contact",
      heading: "Have an operations problem, product idea, or AI prototype?",
      text: "I can help shape, build, and deploy the first useful version, then keep improving it with the team.",
      letterboxdLabel: "I love movies",
    },
  },
  de: {
    localeName: "Deutsch",
    nav: {
      work: "Arbeit",
      systems: "Systeme",
      build: "Leistungen",
      research: "Forschung",
      contact: "Kontakt",
    },
    hero: {
      label: "Tech Builder + angewandte KI-Forschung",
      title: "Sebastian Cervera Maltos",
      text: "Ich entwickle Software, Automatisierungen und KI-gestützte Systeme für echte operative Probleme: ERP-Prozesse, interne Tools, mobile Apps, PWAs und Forschungsprototypen mit Produktpotenzial.",
      primaryCta: "Ausgewählte Arbeit",
      secondaryCta: "Projekt starten",
    },
    focus: {
      ariaLabel: "Aktueller Fokus",
      currentRoleLabel: "Aktuelle Rolle",
      currentRole: "Head of Technology & AI",
      location: "Grupo Frio, Guadalajara",
      stackLabel: "Kern-Stack",
      stack: "Odoo, Next.js, Flutter, n8n",
      stackText: "ERP, Produktentwicklung, Automatisierung und KI-Workflows.",
      languagesLabel: "Sprachen",
      languages: "Spanisch, Englisch, Deutsch",
      languagesText: "Spanisch als Muttersprache, Englisch B2+ und Deutsch B2+.",
    },
    selectedWork: {
      label: "Ausgewählte Arbeit",
      heading: "Produkte, Systeme und technische Arbeit mit Geschäftskontext.",
      projects: [
        {
          title: "Grupo Frio Operations Platform",
          type: "PWA, Odoo, Next.js, Flutter",
          summary:
            "Interne Werkzeuge für Logistik, Vertrieb, Administration und Feldoperationen, verbunden mit ERP-Workflows.",
        },
        {
          title: "Odoo Custom Workflows",
          type: "Python, XML, APIs, Odoo.sh",
          summary:
            "Individuelle Module und Integrationen für HR, Inventar, Vertrieb und operative Prozesse.",
        },
        {
          title: "AI + Automation Workflows",
          type: "n8n, Botpress, APIs, ERP",
          summary:
            "End-to-end-Automatisierungen, die Geschäftssysteme, Messaging, KI-Tools und interne Prozesse verbinden.",
        },
        {
          title: "OCI MyToDoList Workshop",
          type: "React, Helidon, Docker, OCI DevOps",
          summary:
            "React-CRUD-App mit Helidon REST API, Docker, Terraform, Oracle Wallet und OCI CI/CD.",
        },
      ],
    },
    build: {
      label: "Was ich baue",
      heading: "Praktische Software für Teams, deren Betrieb in Bewegung bleiben muss.",
      areas: [
        "Produktseiten mit Next.js und React",
        "Flutter-Apps für mobile Operationen",
        "Odoo-Module und ERP-Integrationen",
        "PWAs, Admin-Tools und Dashboards",
        "n8n-Automatisierungen und KI-Workflows",
        "Cloud, Deployments und Server-Setup",
      ],
    },
    research: {
      label: "Angewandte KI / Forschung",
      heading: "Forschung nah an reproduzierbaren Systemen.",
      items: [
        {
          title: "Bank Account Fraud Detection",
          detail:
            "Evaluation von Machine-Learning-Methoden auf der BAF-Suite mit Fokus auf tabellarische Daten, Klassenungleichgewicht, zeitliche Verschiebung und Fairness-Metriken.",
        },
        {
          title: "MP-GCN Playground Scene Understanding",
          detail:
            "Skelettbasierte Gruppenerkennung mit Pose Tracking, objektbewussten Graphen und datenschutzorientierter KI für Szenen auf Spielplätzen.",
        },
      ],
    },
    experience: {
      label: "Erfahrung",
      heading: "Von ERP-Beratung zu Produktentwicklung und KI-gestützten Operationen.",
      text: "Ich habe in Odoo-Beratung, individueller Software, Deployment, Automatisierung, Infrastruktur und technischer Befähigung für Unternehmen gearbeitet, die ihre digitalen Operationen aufbauen oder verbessern.",
      ariaLabel: "Erfahrungsverlauf",
      timeline: [
        {
          period: "2025 - Heute",
          role: "Head of Technology & AI, Grupo Frio",
        },
        {
          period: "2024 - 2025",
          role: "Software Developer Manager, Grupo Veniu",
        },
        {
          period: "2023 - 2024",
          role: "Freelance Full-Stack Developer",
        },
      ],
    },
    stackLabel: "Stack",
    contact: {
      label: "Kontakt",
      heading: "Hast du ein operatives Problem, eine Produktidee oder einen KI-Prototyp?",
      text: "Ich kann helfen, die erste nützliche Version zu definieren, zu bauen und zu deployen und sie danach mit dem Team weiterzuentwickeln.",
      letterboxdLabel: "Ich liebe Filme",
    },
  },
};

export const stack = sharedStack;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
