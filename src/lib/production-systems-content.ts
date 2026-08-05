import type { Locale } from "./portfolio-content";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProductionProjectImage = {
  src?: string;
  alt: string;
  caption?: string;
  placeholder: string;
};

export type ProductionProject = {
  id: string;
  title: string;
  summary: string;
  categories: string[];
  status: string;
  repositoryLabel?: string;
  problem: string;
  solution: string;
  role: string;
  highlights: string[];
  stack: string[];
  metrics?: ProjectMetric[];
  images: ProductionProjectImage[];
  architecture?: {
    nodes: string[];
  };
  outcome: string;
};

type ProductionSystemsContent = {
  label: string;
  heading: string;
  description: string;
  signals: string[];
  labels: {
    businessProblem: string;
    solution: string;
    myRole: string;
    technicalHighlights: string;
    stack: string;
    architecture: string;
    outcomes: string;
    screenshotPlaceholder: string;
    signalsAriaLabel: string;
    stackAriaLabel: string;
    categoryAriaLabel: string;
  };
  projects: ProductionProject[];
};

const spanishProductionSystems: ProductionSystemsContent = {
  label: "INGENIERIA REAL",
  heading: "Selected Production Systems",
  description:
    "Aplicaciones empresariales, integraciones y workflows automatizados diseñados alrededor de restricciones operativas reales. Trabajo desde discovery de requerimientos, arquitectura e implementación hasta despliegue y troubleshooting en producción, incluyendo ingeniería cercana a operaciones, agentes de AI, aplicaciones móviles y desarrollo PWA.",
  signals: [
    "Despliegues en producción",
    "Integraciones empresariales",
    "Web, PWA y mobile",
    "Workflows asistidos con AI",
  ],
  labels: {
    businessProblem: "Problema de negocio",
    solution: "Solución",
    myRole: "Mi rol",
    technicalHighlights: "Highlights técnicos",
    stack: "Stack",
    architecture: "Flujo de arquitectura",
    outcomes: "Resultados / alcance",
    screenshotPlaceholder: "Reemplazar con",
    signalsAriaLabel: "Indicadores de sistemas en producción",
    stackAriaLabel: "Stack técnico",
    categoryAriaLabel: "Categorías del proyecto",
  },
  projects: [
    {
      id: "delivery-operations-platform",
      title: "Delivery Operations Platform",
      summary:
        "Una plataforma de entregas basada en roles que conecta despacho, operaciones de almacén, conductores y registros ERP mediante interfaces web y móviles.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "La coordinación de entregas dependía de registros ERP fragmentados, comunicación manual, preparación de almacén, asignación de rutas y actualizaciones en campo. Cada rol operativo necesitaba acceso a información y acciones distintas.",
      solution:
        "Construí una PWA y un workflow móvil basado en roles, integrado con Odoo, para gestionar pedidos de entrega, asignaciones de conductores, estado de rutas, información de clientes, avance de fulfillment y actividad en campo.",
      role:
        "Discovery de requerimientos, arquitectura de solución, desarrollo full-stack, integración con Odoo, diseño de workflows, despliegue y troubleshooting en producción.",
      highlights: [
        "Interfaces basadas en roles para usuarios operativos y administrativos",
        "Asignaciones de entrega y gestión de estados",
        "Workflows de aceptación y rechazo para conductores",
        "Información de clientes y ubicaciones",
        "Integración con Odoo Sales, Inventory, Contacts y registros de entrega",
        "Endpoints backend custom",
        "Notificaciones operativas",
        "Experiencias de usuario web y mobile",
        "Soporte en producción para software, servidores, redes y dispositivos de campo",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Flutter",
        "Python",
        "Odoo",
        "PostgreSQL",
        "REST APIs",
        "n8n",
      ],
      images: [
        {
          alt: "Dashboard de gestión de entregas",
          placeholder: "Dashboard de gestión de entregas",
        },
        {
          alt: "Aplicación móvil para conductores",
          placeholder: "Aplicación móvil para conductores",
        },
        {
          alt: "Vista de asignación de rutas",
          placeholder: "Vista de asignación de rutas",
        },
      ],
      architecture: {
        nodes: [
          "Usuarios operativos",
          "PWA / Mobile App",
          "Capa API custom",
          "Odoo",
          "Automatizaciones n8n",
          "Notificaciones y eventos operativos",
        ],
      },
      outcome:
        "Conecta roles operativos, registros ERP y workflows de campo en un solo sistema en producción sin exponer detalles de repositorios privados ni métricas fabricadas.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "WhatsApp Customer Automation",
      summary:
        "Un workflow conversacional que identifica clientes por WhatsApp y conecta interacciones de mensajería con datos ERP y lógica de negocio.",
      categories: ["AI Workflow", "Conversational Agent", "Enterprise Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Las solicitudes de clientes recibidas por WhatsApp necesitaban conectarse con registros de clientes existentes, información operativa, reglas de validación y workflows ERP.",
      solution:
        "Desarrollé un workflow conversacional basado en Botpress integrado con Odoo mediante APIs custom y webhooks.",
      role:
        "Diseño conversacional, desarrollo de APIs, lógica de identificación de clientes, integración con Odoo, manejo de webhooks, validación, pruebas y troubleshooting.",
      highlights: [
        "Normalización de números telefónicos de WhatsApp",
        "Matching de clientes contra registros de Odoo",
        "Endpoints webhook custom",
        "Respuestas API estructuradas",
        "Validación de reglas de negocio",
        "Flujos conversacionales en Botpress",
        "Recuperación de datos ERP",
        "Manejo de errores y lógica de fallback",
        "Workflows de atención al cliente asistidos con AI",
      ],
      stack: ["Botpress", "Python", "Odoo", "REST APIs", "Webhooks", "JavaScript", "n8n"],
      images: [
        {
          alt: "Workflow de conversación en WhatsApp",
          placeholder: "Workflow de conversación en WhatsApp",
        },
        {
          alt: "Canvas de flujo en Botpress",
          placeholder: "Canvas de flujo en Botpress",
        },
        {
          alt: "Respuesta de búsqueda de cliente en Odoo",
          placeholder: "Respuesta de búsqueda de cliente en Odoo",
        },
      ],
      architecture: {
        nodes: [
          "Usuario de WhatsApp",
          "Agente Botpress",
          "Webhook custom",
          "Datos de clientes en Odoo",
          "Lógica de negocio",
          "Respuesta estructurada",
        ],
      },
      outcome:
        "Conecta mensajería de clientes con identidad ERP, validación y respuestas estructuradas, manteniendo fuera del portafolio público los detalles privados de implementación.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "Un workflow operativo de ruteo que transforma registros de entrega en rutas estructuradas usando restricciones de vehículos, tiempo, ubicación y servicio.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "La planeación de entregas requería coordinar ubicaciones geográficas, vehículos disponibles, asignaciones de conductores, tiempos de servicio, estado de fulfillment y preparación de almacén.",
      solution:
        "Construí workflows que extraen datos de entrega desde Odoo, preparan entradas de optimización, calculan secuencias de ruta y conectan los resultados con procesos operativos de entrega.",
      role:
        "Modelado de datos, desarrollo backend, arquitectura de integración, implementación de workflows de optimización, integración ERP y validación operativa.",
      highlights: [
        "Trabajos de entrega generados desde registros ERP",
        "Restricciones de vehículos y capacidad",
        "Coordenadas geográficas",
        "Cálculos de tiempo de servicio",
        "Ventanas de tiempo operativo",
        "Secuenciación de rutas",
        "Seguimiento de distancia y tiempo de traslado",
        "Asignaciones de conductores",
        "Integración con lotes de entrega y estado operativo",
      ],
      stack: ["Python", "Odoo", "VROOM", "REST APIs", "n8n", "Mapping APIs", "PostgreSQL"],
      images: [
        {
          alt: "Mapa de optimización de rutas",
          placeholder: "Mapa de optimización de rutas",
        },
        {
          alt: "Vista de asignación de rutas",
          placeholder: "Vista de asignación de rutas",
        },
        {
          alt: "Workflow de integración con Odoo",
          placeholder: "Workflow de integración con Odoo",
        },
      ],
      architecture: {
        nodes: [
          "Entregas de Odoo",
          "Transformación de datos",
          "Motor de optimización de rutas",
          "Secuencia de ruta",
          "Workflows de conductores y almacén",
        ],
      },
      outcome:
        "Convierte registros ERP de entrega en workflows estructurados de planeación restringidos por vehículos, geografía, tiempo de servicio y estado operativo, sin reclamar métricas no verificadas.",
    },
  ],
};

const englishProductionSystems: ProductionSystemsContent = {
  label: "REAL-WORLD ENGINEERING",
  heading: "Selected Production Systems",
  description:
    "Enterprise applications, integrations, and automated workflows designed around real operational constraints. I work across requirements discovery, architecture, implementation, deployment, and production troubleshooting, including Forward Deployed Engineering, AI agents, mobile applications, and PWA development.",
  signals: [
    "Production deployments",
    "Enterprise integrations",
    "Web, PWA and mobile",
    "AI-assisted workflows",
  ],
  labels: {
    businessProblem: "Business problem",
    solution: "Solution",
    myRole: "My role",
    technicalHighlights: "Technical highlights",
    stack: "Stack",
    architecture: "Architecture flow",
    outcomes: "Outcomes / scope",
    screenshotPlaceholder: "Replace with",
    signalsAriaLabel: "Production systems signals",
    stackAriaLabel: "Technology stack",
    categoryAriaLabel: "Project categories",
  },
  projects: [
    {
      id: "delivery-operations-platform",
      title: "Delivery Operations Platform",
      summary:
        "A role-based delivery platform connecting dispatch, warehouse operations, drivers, and ERP records through web and mobile interfaces.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "Delivery coordination depended on fragmented ERP records, manual communication, warehouse preparation, route assignments, and field updates. Different operational roles needed access to different information and actions.",
      solution:
        "Built a role-based PWA and mobile workflow integrated with Odoo to manage delivery orders, driver assignments, route status, customer information, fulfillment progress, and field activity.",
      role:
        "Requirements discovery, solution architecture, full-stack development, Odoo integration, workflow design, deployment, and production troubleshooting.",
      highlights: [
        "Role-based interfaces for operational and administrative users",
        "Delivery assignments and status management",
        "Driver acceptance and rejection workflows",
        "Customer and location information",
        "Integration with Odoo Sales, Inventory, Contacts, and delivery records",
        "Custom backend endpoints",
        "Operational notifications",
        "Web and mobile user experiences",
        "Production support across software, servers, networks, and field devices",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Flutter",
        "Python",
        "Odoo",
        "PostgreSQL",
        "REST APIs",
        "n8n",
      ],
      images: [
        {
          alt: "Delivery management dashboard",
          placeholder: "Delivery management dashboard",
        },
        {
          alt: "Driver mobile application",
          placeholder: "Driver mobile application",
        },
        {
          alt: "Route assignment view",
          placeholder: "Route assignment view",
        },
      ],
      architecture: {
        nodes: [
          "Operational Users",
          "PWA / Mobile App",
          "Custom API Layer",
          "Odoo",
          "n8n Automations",
          "Notifications and Operational Events",
        ],
      },
      outcome:
        "Connects operational roles, ERP records, and field workflows in one production system without exposing private repository details or fabricated metrics.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "WhatsApp Customer Automation",
      summary:
        "A conversational workflow that identifies customers through WhatsApp and connects messaging interactions with ERP data and business logic.",
      categories: ["AI Workflow", "Conversational Agent", "Enterprise Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Customer requests received through WhatsApp needed to be connected with existing customer records, operational information, validation rules, and ERP workflows.",
      solution:
        "Developed a Botpress-based conversational workflow integrated with Odoo through custom APIs and webhooks.",
      role:
        "Conversation design, API development, customer identification logic, Odoo integration, webhook handling, validation, testing, and troubleshooting.",
      highlights: [
        "WhatsApp phone-number normalization",
        "Customer matching against Odoo records",
        "Custom webhook endpoints",
        "Structured API responses",
        "Business-rule validation",
        "Botpress conversational flows",
        "ERP data retrieval",
        "Error handling and fallback logic",
        "AI-assisted customer workflows",
      ],
      stack: ["Botpress", "Python", "Odoo", "REST APIs", "Webhooks", "JavaScript", "n8n"],
      images: [
        {
          alt: "WhatsApp conversation workflow",
          placeholder: "WhatsApp conversation workflow",
        },
        {
          alt: "Botpress flow canvas",
          placeholder: "Botpress flow canvas",
        },
        {
          alt: "Odoo customer lookup response",
          placeholder: "Odoo customer lookup response",
        },
      ],
      architecture: {
        nodes: [
          "WhatsApp User",
          "Botpress Agent",
          "Custom Webhook",
          "Odoo Customer Data",
          "Business Logic",
          "Structured Response",
        ],
      },
      outcome:
        "Connects customer messaging with ERP identity, validation, and structured responses while keeping private implementation details out of the public portfolio.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "An operational routing workflow that transforms delivery records into structured routes using vehicle, time, location, and service constraints.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Delivery planning required coordinating geographic locations, available vehicles, driver assignments, service times, fulfillment status, and warehouse preparation.",
      solution:
        "Built workflows that extract delivery data from Odoo, prepare optimization inputs, calculate route sequences, and connect the results back to operational delivery processes.",
      role:
        "Data modeling, backend development, integration architecture, optimization workflow implementation, ERP integration, and operational validation.",
      highlights: [
        "Delivery jobs generated from ERP records",
        "Vehicle and capacity constraints",
        "Geographic coordinates",
        "Service-time calculations",
        "Operating time windows",
        "Route sequencing",
        "Distance and travel-time tracking",
        "Driver assignments",
        "Integration with delivery batches and operational status",
      ],
      stack: ["Python", "Odoo", "VROOM", "REST APIs", "n8n", "Mapping APIs", "PostgreSQL"],
      images: [
        {
          alt: "Route optimization map",
          placeholder: "Route optimization map",
        },
        {
          alt: "Route assignment view",
          placeholder: "Route assignment view",
        },
        {
          alt: "Odoo integration workflow",
          placeholder: "Odoo integration workflow",
        },
      ],
      architecture: {
        nodes: [
          "Odoo Deliveries",
          "Data Transformation",
          "Route Optimization Engine",
          "Route Sequence",
          "Driver and Warehouse Workflows",
        ],
      },
      outcome:
        "Turns ERP delivery records into structured planning workflows constrained by vehicles, geography, service time, and operational status, without claiming unverified metrics.",
    },
  ],
};

const germanProductionSystems: ProductionSystemsContent = {
  label: "REAL-WORLD ENGINEERING",
  heading: "Selected Production Systems",
  description:
    "Enterprise-Anwendungen, Integrationen und automatisierte Workflows, die um reale operative Einschränkungen herum entworfen wurden. Ich arbeite von Requirements Discovery, Architektur und Implementierung bis zu Deployment und Production Troubleshooting, einschließlich operativer Engineering-Arbeit, KI-Agenten, mobilen Anwendungen und PWA-Entwicklung.",
  signals: [
    "Produktionsdeployments",
    "Unternehmensintegrationen",
    "Web, PWA und Mobile",
    "KI-gestützte Workflows",
  ],
  labels: {
    businessProblem: "Geschäftliches Problem",
    solution: "Lösung",
    myRole: "Meine Rolle",
    technicalHighlights: "Technische Highlights",
    stack: "Stack",
    architecture: "Architekturfluss",
    outcomes: "Ergebnisse / Umfang",
    screenshotPlaceholder: "Ersetzen durch",
    signalsAriaLabel: "Produktionssystem-Signale",
    stackAriaLabel: "Technologie-Stack",
    categoryAriaLabel: "Projektkategorien",
  },
  projects: [
    {
      id: "delivery-operations-platform",
      title: "Delivery Operations Platform",
      summary:
        "Eine rollenbasierte Lieferplattform, die Disposition, Lagerprozesse, Fahrer und ERP-Datensätze über Web- und Mobile-Interfaces verbindet.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "Die Lieferkoordination hing von fragmentierten ERP-Datensätzen, manueller Kommunikation, Lagervorbereitung, Routenzuweisungen und Updates aus dem Feld ab. Unterschiedliche operative Rollen benötigten Zugriff auf unterschiedliche Informationen und Aktionen.",
      solution:
        "Ich habe eine rollenbasierte PWA und einen mobilen Workflow mit Odoo-Integration gebaut, um Lieferaufträge, Fahrerzuweisungen, Routenstatus, Kundeninformationen, Fulfillment-Fortschritt und Feldaktivitäten zu verwalten.",
      role:
        "Requirements Discovery, Lösungsarchitektur, Full-Stack-Entwicklung, Odoo-Integration, Workflow-Design, Deployment und Production Troubleshooting.",
      highlights: [
        "Rollenbasierte Interfaces für operative und administrative Nutzer",
        "Lieferzuweisungen und Statusmanagement",
        "Workflows für Annahme und Ablehnung durch Fahrer",
        "Kunden- und Standortinformationen",
        "Integration mit Odoo Sales, Inventory, Contacts und Lieferdatensätzen",
        "Custom Backend Endpoints",
        "Operative Benachrichtigungen",
        "Web- und Mobile User Experiences",
        "Produktionssupport für Software, Server, Netzwerke und Feldgeräte",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Flutter",
        "Python",
        "Odoo",
        "PostgreSQL",
        "REST APIs",
        "n8n",
      ],
      images: [
        {
          alt: "Dashboard für Liefermanagement",
          placeholder: "Dashboard für Liefermanagement",
        },
        {
          alt: "Mobile App für Fahrer",
          placeholder: "Mobile App für Fahrer",
        },
        {
          alt: "Ansicht für Routenzuweisungen",
          placeholder: "Ansicht für Routenzuweisungen",
        },
      ],
      architecture: {
        nodes: [
          "Operative Nutzer",
          "PWA / Mobile App",
          "Custom API Layer",
          "Odoo",
          "n8n Automations",
          "Benachrichtigungen und operative Events",
        ],
      },
      outcome:
        "Verbindet operative Rollen, ERP-Datensätze und Feld-Workflows in einem Produktionssystem, ohne Details privater Repositories oder erfundene Metriken offenzulegen.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "WhatsApp Customer Automation",
      summary:
        "Ein Conversational Workflow, der Kunden über WhatsApp identifiziert und Messaging-Interaktionen mit ERP-Daten und Geschäftslogik verbindet.",
      categories: ["AI Workflow", "Conversational Agent", "Enterprise Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Kundenanfragen über WhatsApp mussten mit bestehenden Kundendatensätzen, operativen Informationen, Validierungsregeln und ERP-Workflows verbunden werden.",
      solution:
        "Ich habe einen Botpress-basierten Conversational Workflow entwickelt, der über Custom APIs und Webhooks mit Odoo integriert ist.",
      role:
        "Conversation Design, API-Entwicklung, Logik zur Kundenidentifikation, Odoo-Integration, Webhook Handling, Validierung, Testing und Troubleshooting.",
      highlights: [
        "Normalisierung von WhatsApp-Telefonnummern",
        "Kundenabgleich mit Odoo-Datensätzen",
        "Custom Webhook Endpoints",
        "Strukturierte API-Antworten",
        "Validierung von Geschäftsregeln",
        "Botpress Conversational Flows",
        "Abruf von ERP-Daten",
        "Fehlerbehandlung und Fallback-Logik",
        "KI-gestützte Kunden-Workflows",
      ],
      stack: ["Botpress", "Python", "Odoo", "REST APIs", "Webhooks", "JavaScript", "n8n"],
      images: [
        {
          alt: "WhatsApp-Konversationsworkflow",
          placeholder: "WhatsApp-Konversationsworkflow",
        },
        {
          alt: "Botpress Flow Canvas",
          placeholder: "Botpress Flow Canvas",
        },
        {
          alt: "Odoo-Antwort zur Kundensuche",
          placeholder: "Odoo-Antwort zur Kundensuche",
        },
      ],
      architecture: {
        nodes: [
          "WhatsApp User",
          "Botpress Agent",
          "Custom Webhook",
          "Odoo Customer Data",
          "Geschäftslogik",
          "Strukturierte Antwort",
        ],
      },
      outcome:
        "Verbindet Kunden-Messaging mit ERP-Identität, Validierung und strukturierten Antworten, während private Implementierungsdetails aus dem öffentlichen Portfolio herausgehalten werden.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "Ein operativer Routing-Workflow, der Lieferdatensätze unter Berücksichtigung von Fahrzeug-, Zeit-, Standort- und Service-Einschränkungen in strukturierte Routen transformiert.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Die Lieferplanung erforderte die Koordination geografischer Standorte, verfügbarer Fahrzeuge, Fahrerzuweisungen, Servicezeiten, Fulfillment-Status und Lagervorbereitung.",
      solution:
        "Ich habe Workflows gebaut, die Lieferdaten aus Odoo extrahieren, Optimierungseingaben vorbereiten, Routensequenzen berechnen und die Ergebnisse wieder mit operativen Lieferprozessen verbinden.",
      role:
        "Datenmodellierung, Backend-Entwicklung, Integrationsarchitektur, Implementierung von Optimierungsworkflows, ERP-Integration und operative Validierung.",
      highlights: [
        "Lieferjobs aus ERP-Datensätzen",
        "Fahrzeug- und Kapazitätsbeschränkungen",
        "Geografische Koordinaten",
        "Berechnungen von Servicezeiten",
        "Operative Zeitfenster",
        "Routensequenzierung",
        "Tracking von Distanz und Reisezeit",
        "Fahrerzuweisungen",
        "Integration mit Lieferbatches und operativem Status",
      ],
      stack: ["Python", "Odoo", "VROOM", "REST APIs", "n8n", "Mapping APIs", "PostgreSQL"],
      images: [
        {
          alt: "Karte zur Routenoptimierung",
          placeholder: "Karte zur Routenoptimierung",
        },
        {
          alt: "Ansicht für Routenzuweisungen",
          placeholder: "Ansicht für Routenzuweisungen",
        },
        {
          alt: "Odoo-Integrationsworkflow",
          placeholder: "Odoo-Integrationsworkflow",
        },
      ],
      architecture: {
        nodes: [
          "Odoo Deliveries",
          "Datentransformation",
          "Route Optimization Engine",
          "Routensequenz",
          "Fahrer- und Lager-Workflows",
        ],
      },
      outcome:
        "Verwandelt ERP-Lieferdatensätze in strukturierte Planungsworkflows mit Einschränkungen durch Fahrzeuge, Geografie, Servicezeit und operativen Status, ohne ungeprüfte Metriken zu behaupten.",
    },
  ],
};

export const productionSystemsContent: Record<Locale, ProductionSystemsContent> = {
  es: spanishProductionSystems,
  en: englishProductionSystems,
  de: germanProductionSystems,
};
