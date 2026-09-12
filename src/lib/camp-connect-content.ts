import type { Locale } from "@/lib/portfolio-content";

export const campConnectUrl = "https://apps.apple.com/app/id6790863408";

type CampConnectContent = {
  label: string;
  status: string;
  summary: string;
  access: string;
  cta: string;
  galleryLabel: string;
  source: string;
  detailsLabel: string;
  caseStudy: { title: string; text: string }[];
  screens: { name: "activities" | "schedule" | "campers"; caption: string; alt: string }[];
};

export const campConnectContent: Record<Locale, CampConnectContent> = {
  es: {
    detailsLabel: "Aportación, reto y resultado",
    caseStudy: [
      {
            "title": "Punto de partida",
            "text": "Listas manuales y una app creada con una plataforma de arrastrar y soltar. Sus limitaciones hacían tedioso el alta de grupos y no había mensajería para anuncios."
      },
      {
            "title": "Mi aportación",
            "text": "Despliegues para App Store y Android, definición del roadmap de funciones, parte del frontend móvil y desarrollo del frontend y backend del portal web de administradores."
      },
      {
            "title": "Reto técnico",
            "text": "Endurecimiento del backend mediante validación de tipos de campos y manejo de operaciones concurrentes en la base de datos."
      },
      {
            "title": "Resultado",
            "text": "Mayor control del campamento."
      }
],
    label: "Producto publicado · iOS",
    status: "App Store · No listada",
    summary: "La operación diaria del campamento, en una app. Camp Connect reúne actividades, horarios y listas de campistas para el personal y los administradores autorizados.",
    access: "Publicada en la App Store con acceso por enlace directo. El uso de la app requiere una cuenta autorizada del campamento.",
    cta: "Ver en la App Store",
    galleryLabel: "Camp Connect en uso",
    source: "Capturas de la ficha de App Store",
    screens: [
      { name: "activities", caption: "Actividades y cupos", alt: "Pantalla de actividades de Camp Connect, con periodos y cupos para tiro con arco, natación y vela." },
      { name: "schedule", caption: "Agenda semanal", alt: "Agenda de Camp Connect con horarios, actividades y navegación entre semanas." },
      { name: "campers", caption: "Listas de campistas", alt: "Lista de campistas de Camp Connect con búsqueda y filtros por grupo y edad." },
    ],
  },
  en: {
    detailsLabel: "Contribution, challenge, and outcome",
    caseStudy: [
      {
            "title": "Starting point",
            "text": "Manual lists and an app built with a drag-and-drop platform. Platform limitations made group setup tedious, and announcement messaging was unavailable."
      },
      {
            "title": "My contribution",
            "text": "Deployments for the App Store and Android, the feature roadmap, parts of the mobile frontend, and frontend and backend development of the web administration portal."
      },
      {
            "title": "Technical challenge",
            "text": "Backend hardening through field-type validation and handling concurrent database operations."
      },
      {
            "title": "Outcome",
            "text": "Greater control over camp operations."
      }
],
    label: "Released product · iOS",
    status: "App Store · Unlisted",
    summary: "Daily camp operations, in one app. Camp Connect brings activities, schedules, and camper lists together for authorized staff and administrators.",
    access: "Published on the App Store through a direct link. Using the app requires an authorized camp account.",
    cta: "View on the App Store",
    galleryLabel: "Inside Camp Connect",
    source: "Screenshots from the App Store listing",
    screens: [
      { name: "activities", caption: "Activities and capacity", alt: "Camp Connect activities screen showing periods and capacity for archery, swimming, and sailing." },
      { name: "schedule", caption: "Weekly schedule", alt: "Camp Connect agenda with times, activities, and navigation between weeks." },
      { name: "campers", caption: "Camper lists", alt: "Camp Connect camper list with search and filters for group and age." },
    ],
  },
  de: {
    detailsLabel: "Beitrag, Herausforderung und Ergebnis",
    caseStudy: [
      {
            "title": "Ausgangslage",
            "text": "Manuelle Listen und eine mit einer Drag-and-drop-Plattform erstellte App. Die Einschränkungen erschwerten das Anlegen von Gruppen; eine Nachrichtenfunktion für Ankündigungen fehlte."
      },
      {
            "title": "Mein Beitrag",
            "text": "Bereitstellung für den App Store und Android, Planung der Funktions-Roadmap, Teile des mobilen Frontends sowie Frontend- und Backend-Entwicklung des Webportals für die Verwaltung."
      },
      {
            "title": "Technische Herausforderung",
            "text": "Härtung des Backends durch Validierung der Feldtypen und Behandlung gleichzeitiger Datenbankoperationen."
      },
      {
            "title": "Ergebnis",
            "text": "Bessere Kontrolle über den Camp-Betrieb."
      }
],
    label: "Veröffentlichtes Produkt · iOS",
    status: "App Store · Nicht gelistet",
    summary: "Der Camp-Alltag in einer App. Camp Connect bündelt Aktivitäten, Zeitpläne und Teilnehmerlisten für autorisierte Mitarbeitende und die Camp-Verwaltung.",
    access: "Im App Store über einen direkten Link verfügbar. Die Nutzung erfordert ein autorisiertes Camp-Konto.",
    cta: "Im App Store ansehen",
    galleryLabel: "Einblicke in Camp Connect",
    source: "Screenshots aus dem App-Store-Eintrag",
    screens: [
      { name: "activities", caption: "Aktivitäten und Plätze", alt: "Aktivitätenansicht von Camp Connect mit Zeitblöcken und Plätzen für Bogenschießen, Schwimmen und Segeln." },
      { name: "schedule", caption: "Wochenplan", alt: "Camp-Connect-Agenda mit Uhrzeiten, Aktivitäten und Navigation zwischen Wochen." },
      { name: "campers", caption: "Teilnehmerlisten", alt: "Teilnehmerliste von Camp Connect mit Suche und Filtern nach Gruppe und Alter." },
    ],
  },
};
