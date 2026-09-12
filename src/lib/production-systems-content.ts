import { colaboradoresContent } from "./colaboradores-content";
import type { Locale } from "./portfolio-content";

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProductionProjectImage = {
  src?: string;
  width?: number;
  height?: number;
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
    technicalDetails: string;
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
  label: "Ingeniería en producción",
  heading: "Sistemas que mueven operaciones.",
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
    technicalHighlights: "Aspectos técnicos",
    technicalDetails: "Explorar detalles técnicos",
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
      title: "Kold Field · Delivery Operations Platform",
      summary:
        "Aplicación de ventas y operación en campo integrada con Odoo. Permite registrar ventas sin conexión y sincronizarlas cuando vuelve la señal, con mayor control de las rutas y menores costos operativos.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "Los choferes usaban Simplify y notas de papel para registrar la operación. El objetivo era controlar ventas y rutas sin pagar suscripciones adicionales; el principal reto técnico fue el funcionamiento sin conexión.",
      solution:
        "Kold Field reúne el registro de ventas y el control de rutas con conexión a Odoo. Las ventas realizadas sin señal se guardan en una cola y se sincronizan al detectar que se recupera la conectividad.",
      role:
        "Arquitectura de la aplicación, parte de los estilos, funcionalidades de impresión, conectividad con Odoo y manejo de usuarios.",
      highlights: [
        "Cola de ventas para registrar operaciones sin conexión",
        "Sincronización con Odoo al detectar conectividad",
        "Funciones de impresión de tickets",
        "Gestión de usuarios y acceso a la aplicación",
        "Registro de ventas y seguimiento de rutas"
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
                "src": "/images/kold-field/route.png",
                "width": 415,
                "height": 906,
                "alt": "Kold Field: lista de clientes planificados y avance de la ruta.",
                "caption": "Ruta del día",
                "placeholder": "Ruta del día"
        },
        {
                "src": "/images/kold-field/map.png",
                "width": 421,
                "height": 912,
                "alt": "Kold Field: mapa con paradas y acceso a la navegación hacia el cliente.",
                "caption": "Mapa de paradas",
                "placeholder": "Mapa de paradas"
        },
        {
                "src": "/images/kold-field/sale.png",
                "width": 422,
                "height": 912,
                "alt": "Kold Field: registro de productos, pago y fotografía de entrega.",
                "caption": "Venta y evidencia",
                "placeholder": "Venta y evidencia"
        },
        {
                "src": "/images/kold-field/ticket.png",
                "width": 417,
                "height": 910,
                "alt": "Kold Field: ticket con detalle de venta y opción para abrir el PDF.",
                "caption": "Ticket de venta",
                "placeholder": "Ticket de venta"
        },
        {
                "src": "/images/kold-field/checkout.png",
                "width": 418,
                "height": 914,
                "alt": "Kold Field: resumen de visita completada y siguiente parada.",
                "caption": "Cierre de visita",
                "placeholder": "Cierre de visita"
        }
],
      architecture: {
        nodes: [
          "Ventas en campo",
          "Cola de ventas offline",
          "Detección de conectividad",
          "Sincronización con Odoo"
],
      },
      outcome:
        "Reducción de costos en suscripciones y notas foliadas impresas, junto con mayor control de la operación.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "Köld Bot · WhatsApp Customer Automation",
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
                "src": "/images/kold-bot/recommendations.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Recomendaciones de productos",
                "placeholder": "Recomendaciones de productos",
                "alt": "Köld Bot recomienda productos por WhatsApp para una reunión con amigos."
        },
        {
                "src": "/images/kold-bot/combos.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Detalle de combos",
                "placeholder": "Detalle de combos",
                "alt": "El bot detalla el contenido y precio de los combos solicitados."
        },
        {
                "src": "/images/kold-bot/customer.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Pedido e identificación del cliente",
                "placeholder": "Pedido e identificación del cliente",
                "alt": "El cliente pide productos en lenguaje natural y el bot solicita confirmar su identidad."
        },
        {
                "src": "/images/kold-bot/order.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Resumen y confirmación del pedido",
                "placeholder": "Resumen y confirmación del pedido",
                "alt": "El bot presenta cantidades, precios y total del pedido para confirmación del cliente."
        }
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
        "Conecta mensajería de clientes con identidad ERP, validación y respuestas estructuradas.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "Planeación territorial en Odoo para recuperar la atención a clientes recurrentes. En la primera semana de la nueva planeación, 56 clientes recibieron visita y 15 volvieron a comprar.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "La asignación por canal de venta y proximidad había dejado clientes recurrentes sin atención. El reto principal era mejorar la calidad de las zonas para cubrir a esos clientes.",
      solution:
        "Reorganicé las zonas considerando posición geográfica, canal de venta, capacidad de compra y ventana horaria. Desarrollé un diseñador de polígonos integrado en Odoo y tareas programadas para predicción de compra.",
      role:
        "Diseño de las zonas, desarrollo del frontend del diseñador de polígonos, integración de Leaflet en Odoo y creación de tareas programadas para predicción de compra.",
      highlights: [
        "Diseño de zonas orientado a la cobertura de clientes recurrentes",
        "Planeación por ubicación, canal, capacidad de compra y ventana horaria",
        "Frontend del diseñador de polígonos con Leaflet integrado en Odoo",
        "Tareas programadas para predicción de compra"
],
      stack: ["Odoo", "Leaflet", "Cron"],
      metrics: [{ value: "56", label: "clientes visitados en la primera semana" }, { value: "15", label: "clientes que volvieron a comprar en la primera semana" }],
      images: [
        {
                "src": "/images/route-planning/polygon-designer.png",
                "width": 2223,
                "height": 1057,
                "caption": "Planeación de territorios y polígonos",
                "alt": "Diseñador de polígonos de Grupo Frio con territorios, subpolígonos, clientes geolocalizados y resumen territorial.",
                "placeholder": "Planeación de territorios y polígonos"
        }
],
      architecture: {
        nodes: [
          "Clientes en Odoo",
          "Criterios de cobertura",
          "Zonas y polígonos en Leaflet",
          "Planeación territorial"
],
      },
      outcome:
        "En la primera semana tras reorganizar las zonas, 56 clientes recibieron visita y 15 volvieron a comprar.",
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
    technicalDetails: "Explore technical details",
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
      title: "Kold Field · Delivery Operations Platform",
      summary:
        "A field sales and operations app integrated with Odoo. Records sales offline and synchronizes them when connectivity returns, improving route control and reducing operating costs.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "Drivers used Simplify and paper notes to record operations. The goal was to control sales and routes without additional subscriptions; offline functionality was the main technical challenge.",
      solution:
        "Kold Field combines sales recording and route control with Odoo connectivity. Sales recorded without a signal are queued and synchronized when connectivity is detected again.",
      role:
        "Application architecture, selected styling, printing functionality, Odoo connectivity, and user management.",
      highlights: [
        "Offline sales queue",
        "Synchronization with Odoo when connectivity returns",
        "Receipt printing functionality",
        "User management and application access",
        "Sales recording and route tracking"
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
                "src": "/images/kold-field/route.png",
                "width": 415,
                "height": 906,
                "alt": "Kold Field: planned customer list and route progress.",
                "caption": "Daily route",
                "placeholder": "Daily route"
        },
        {
                "src": "/images/kold-field/map.png",
                "width": 421,
                "height": 912,
                "alt": "Kold Field: stop map and navigation to the customer.",
                "caption": "Stop map",
                "placeholder": "Stop map"
        },
        {
                "src": "/images/kold-field/sale.png",
                "width": 422,
                "height": 912,
                "alt": "Kold Field: products, payment, and delivery photo capture.",
                "caption": "Sale and delivery evidence",
                "placeholder": "Sale and delivery evidence"
        },
        {
                "src": "/images/kold-field/ticket.png",
                "width": 417,
                "height": 910,
                "alt": "Kold Field: itemized sales receipt with an option to open the PDF.",
                "caption": "Sales receipt",
                "placeholder": "Sales receipt"
        },
        {
                "src": "/images/kold-field/checkout.png",
                "width": 418,
                "height": 914,
                "alt": "Kold Field: completed visit summary and next stop.",
                "caption": "Visit checkout",
                "placeholder": "Visit checkout"
        }
],
      architecture: {
        nodes: [
          "Field sales",
          "Offline sales queue",
          "Connectivity detection",
          "Synchronization with Odoo"
],
      },
      outcome:
        "Reduced spending on subscriptions and preprinted numbered sales slips, with greater operational control.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "Köld Bot · WhatsApp Customer Automation",
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
                "src": "/images/kold-bot/recommendations.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Product recommendations",
                "placeholder": "Product recommendations",
                "alt": "Köld Bot recommends products on WhatsApp for a gathering with friends."
        },
        {
                "src": "/images/kold-bot/combos.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Combo details",
                "placeholder": "Combo details",
                "alt": "The bot lists the contents and prices of the requested combos."
        },
        {
                "src": "/images/kold-bot/customer.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Order and customer identification",
                "placeholder": "Order and customer identification",
                "alt": "The customer orders in natural language and the bot requests identity confirmation."
        },
        {
                "src": "/images/kold-bot/order.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Order summary and confirmation",
                "placeholder": "Order summary and confirmation",
                "alt": "The bot presents quantities, prices, and the order total for customer confirmation."
        }
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
        "Connects customer messaging with ERP identity, validation, and structured responses.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "Territory planning in Odoo to restore coverage for recurring customers. In the first week of the new plan, 56 customers received a visit and 15 purchased again.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Assignment by sales channel and proximity had left recurring customers unattended. The main challenge was improving zone quality to cover those customers.",
      solution:
        "Reorganized zones using geographic location, sales channel, purchasing capacity, and time windows. Built a polygon designer integrated into Odoo and scheduled tasks for purchase prediction.",
      role:
        "Zone design, polygon designer frontend development, Leaflet integration in Odoo, and scheduled tasks for purchase prediction.",
      highlights: [
        "Zone design focused on coverage of recurring customers",
        "Planning by location, sales channel, purchasing capacity, and time window",
        "Polygon designer frontend with Leaflet integrated into Odoo",
        "Scheduled tasks for purchase prediction"
],
      stack: ["Odoo", "Leaflet", "Cron"],
      metrics: [{ value: "56", label: "customers visited in the first week" }, { value: "15", label: "customers who purchased again in the first week" }],
      images: [
        {
                "src": "/images/route-planning/polygon-designer.png",
                "width": 2223,
                "height": 1057,
                "caption": "Territory and polygon planning",
                "alt": "Grupo Frio polygon designer with territories, subpolygons, geolocated customers, and a territory summary.",
                "placeholder": "Territory and polygon planning"
        }
],
      architecture: {
        nodes: [
          "Customers in Odoo",
          "Coverage criteria",
          "Zones and polygons in Leaflet",
          "Territory planning"
],
      },
      outcome:
        "In the first week after reorganizing the zones, 56 customers received a visit and 15 purchased again.",
    },
  ],
};

const germanProductionSystems: ProductionSystemsContent = {
  label: "REAL-WORLD ENGINEERING",
  heading: "Systeme für den operativen Alltag.",
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
    technicalDetails: "Technische Details ansehen",
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
      title: "Kold Field · Delivery Operations Platform",
      summary:
        "Eine mit Odoo integrierte App für Außendienst und Verkauf. Verkäufe werden offline erfasst und bei wiederhergestellter Verbindung synchronisiert, für bessere Routenkontrolle und geringere Betriebskosten.",
      categories: ["Production System", "PWA", "Mobile Application"],
      status: "Production System",
      repositoryLabel: "Private production repository",
      problem:
        "Die Fahrer nutzten Simplify und Papiernotizen zur Erfassung ihrer Arbeit. Ziel war die Kontrolle von Verkäufen und Routen ohne zusätzliche Abonnements; die größte technische Herausforderung war die Offline-Funktionalität.",
      solution:
        "Kold Field verbindet Verkaufserfassung und Routenkontrolle mit Odoo. Verkäufe ohne Netzverbindung werden in einer Warteschlange gespeichert und synchronisiert, sobald wieder eine Verbindung erkannt wird.",
      role:
        "Anwendungsarchitektur, Teile der Gestaltung, Druckfunktionen, Odoo-Anbindung und Benutzerverwaltung.",
      highlights: [
        "Warteschlange für Offline-Verkäufe",
        "Synchronisierung mit Odoo bei wiederhergestellter Verbindung",
        "Druckfunktionen für Verkaufsbelege",
        "Benutzerverwaltung und Anwendungszugang",
        "Verkaufserfassung und Routenverfolgung"
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
                "src": "/images/kold-field/route.png",
                "width": 415,
                "height": 906,
                "alt": "Kold Field: geplante Kundenbesuche und Routenfortschritt.",
                "caption": "Tagesroute",
                "placeholder": "Tagesroute"
        },
        {
                "src": "/images/kold-field/map.png",
                "width": 421,
                "height": 912,
                "alt": "Kold Field: Karte der Stopps mit Navigation zum Kunden.",
                "caption": "Karte der Stopps",
                "placeholder": "Karte der Stopps"
        },
        {
                "src": "/images/kold-field/sale.png",
                "width": 422,
                "height": 912,
                "alt": "Kold Field: Produkte, Zahlung und Lieferfoto erfassen.",
                "caption": "Verkauf und Liefernachweis",
                "placeholder": "Verkauf und Liefernachweis"
        },
        {
                "src": "/images/kold-field/ticket.png",
                "width": 417,
                "height": 910,
                "alt": "Kold Field: Verkaufsbeleg mit Positionen und PDF-Option.",
                "caption": "Verkaufsbeleg",
                "placeholder": "Verkaufsbeleg"
        },
        {
                "src": "/images/kold-field/checkout.png",
                "width": 418,
                "height": 914,
                "alt": "Kold Field: Zusammenfassung des abgeschlossenen Besuchs und nächster Stopp.",
                "caption": "Besuchsabschluss",
                "placeholder": "Besuchsabschluss"
        }
],
      architecture: {
        nodes: [
          "Verkäufe im Außendienst",
          "Offline-Verkaufswarteschlange",
          "Verbindungserkennung",
          "Synchronisierung mit Odoo"
],
      },
      outcome:
        "Geringere Kosten für Abonnements und vorgedruckte nummerierte Verkaufsbelege sowie bessere Kontrolle der Abläufe.",
    },
    {
      id: "whatsapp-customer-automation",
      title: "Köld Bot · WhatsApp Customer Automation",
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
                "src": "/images/kold-bot/recommendations.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Produktempfehlungen",
                "placeholder": "Produktempfehlungen",
                "alt": "Köld Bot empfiehlt über WhatsApp Produkte für ein Treffen mit Freunden."
        },
        {
                "src": "/images/kold-bot/combos.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Details der Produktpakete",
                "placeholder": "Details der Produktpakete",
                "alt": "Der Bot zeigt Inhalt und Preise der angefragten Produktpakete."
        },
        {
                "src": "/images/kold-bot/customer.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Bestellung und Kundenidentifikation",
                "placeholder": "Bestellung und Kundenidentifikation",
                "alt": "Der Kunde bestellt in natürlicher Sprache und der Bot fragt nach der Bestätigung seiner Identität."
        },
        {
                "src": "/images/kold-bot/order.jpg",
                "width": 738,
                "height": 1600,
                "caption": "Bestellübersicht und Bestätigung",
                "placeholder": "Bestellübersicht und Bestätigung",
                "alt": "Der Bot zeigt Mengen, Preise und Gesamtbetrag zur Bestätigung durch den Kunden."
        }
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
        "Verbindet Kunden-Messaging mit ERP-Identität, Validierung und strukturierten Antworten.",
    },
    {
      id: "route-planning-fulfillment-automation",
      title: "Route Planning and Fulfillment Automation",
      summary:
        "Gebietsplanung in Odoo, um die Betreuung wiederkehrender Kunden wiederherzustellen. In der ersten Woche der neuen Planung wurden 56 Kunden besucht und 15 kauften wieder.",
      categories: ["Optimization", "Workflow Automation", "ERP Integration"],
      status: "Production Workflow",
      repositoryLabel: "Private production repository",
      problem:
        "Die Zuordnung nach Vertriebskanal und Nähe hatte dazu geführt, dass wiederkehrende Kunden nicht mehr betreut wurden. Die größte Herausforderung war die Qualität der Gebiete und ihre Kundenabdeckung.",
      solution:
        "Neuordnung der Gebiete nach geografischer Lage, Vertriebskanal, Kaufkapazität und Zeitfenster. Entwicklung eines in Odoo integrierten Polygon-Editors und geplanter Aufgaben zur Kaufprognose.",
      role:
        "Gestaltung der Gebiete, Frontend-Entwicklung des Polygon-Editors, Leaflet-Integration in Odoo und geplante Aufgaben zur Kaufprognose.",
      highlights: [
        "Gebietsgestaltung mit Fokus auf wiederkehrende Kunden",
        "Planung nach Lage, Vertriebskanal, Kaufkapazität und Zeitfenster",
        "Polygon-Editor mit in Odoo integriertem Leaflet",
        "Geplante Aufgaben zur Kaufprognose"
],
      stack: ["Odoo", "Leaflet", "Cron"],
      metrics: [{ value: "56", label: "besuchte Kunden in der ersten Woche" }, { value: "15", label: "Kunden mit erneutem Kauf in der ersten Woche" }],
      images: [
        {
                "src": "/images/route-planning/polygon-designer.png",
                "width": 2223,
                "height": 1057,
                "caption": "Gebiets- und Polygonplanung",
                "alt": "Polygon-Editor von Grupo Frio mit Gebieten, Teilpolygonen, geolokalisierten Kunden und Gebietsübersicht.",
                "placeholder": "Gebiets- und Polygonplanung"
        }
],
      architecture: {
        nodes: [
          "Kunden in Odoo",
          "Kriterien zur Kundenabdeckung",
          "Gebiete und Polygone in Leaflet",
          "Gebietsplanung"
],
      },
      outcome:
        "In der ersten Woche nach der Neuordnung der Gebiete wurden 56 Kunden besucht und 15 kauften wieder.",
    },
  ],
};

export const productionSystemsContent: Record<Locale, ProductionSystemsContent> = {
  es: { ...spanishProductionSystems, projects: [spanishProductionSystems.projects[0], colaboradoresContent.es, ...spanishProductionSystems.projects.slice(1)] },
  en: { ...englishProductionSystems, projects: [englishProductionSystems.projects[0], colaboradoresContent.en, ...englishProductionSystems.projects.slice(1)] },
  de: { ...germanProductionSystems, projects: [germanProductionSystems.projects[0], colaboradoresContent.de, ...germanProductionSystems.projects.slice(1)] },
};
