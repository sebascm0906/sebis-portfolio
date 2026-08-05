# Selected Production Systems Design

## Goal

Add a professional `Selected Production Systems` section to the portfolio homepage that demonstrates real production engineering experience across enterprise operations, ERP integrations, PWA/mobile workflows, AI agents, workflow automation, and technical ownership.

The section should support positioning for:

- Forward Deployed Engineer
- Solutions Engineer
- Full-Stack Engineer
- AI Engineer
- Technical Consultant

## Approved Direction

Use the architecture-first direction selected in the visual mockup.

The section should feel like a technical system map and startup-style case study, not a generic grid of small project cards. It should preserve the current site language: Geist typography, warm light background, thin borders, restrained green accent, clear whitespace, and minimal motion.

## Placement

Render the section on the main portfolio page after the existing selected work section and before the build section.

Update navigation to include the new section where appropriate. Keep the existing sections unless a small label change improves clarity.

## Localization

The section must appear in all three current views:

- Spanish (`/` and `/es`)
- English (`/en`)
- German (`/de`)

Project names, technology stack labels, and role-oriented terms can remain in English when they work better internationally. Supporting copy, section descriptions, labels, and explanatory text should be localized.

## Section Header Content

English source content:

- Eyebrow: `REAL-WORLD ENGINEERING`
- Title: `Selected Production Systems`
- Description: `Enterprise applications, integrations, and automated workflows designed around real operational constraints. I work across requirements discovery, architecture, implementation, deployment, and production troubleshooting.`

Signals:

- `Production deployments`
- `Enterprise integrations`
- `Web, PWA and mobile`
- `AI-assisted workflows`

Do not invent metrics.

## Data Model

Production project content should live in a typed data structure, not inline JSX.

```ts
type ProjectMetric = {
  value: string;
  label: string;
};

type ProductionProjectImage = {
  src?: string;
  alt: string;
  caption?: string;
  placeholder: string;
};

type ProductionProject = {
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
```

If `metrics` is missing or empty, the metrics component must render nothing.

## Projects

### Delivery Operations Platform

Categories:

- `Production System`
- `PWA`
- `Mobile Application`

Status/context:

- `Production System`
- `Private production repository`

Summary:

`A role-based delivery platform connecting dispatch, warehouse operations, drivers, and ERP records through web and mobile interfaces.`

Business problem:

`Delivery coordination depended on fragmented ERP records, manual communication, warehouse preparation, route assignments, and field updates. Different operational roles needed access to different information and actions.`

Solution:

`Built a role-based PWA and mobile workflow integrated with Odoo to manage delivery orders, driver assignments, route status, customer information, fulfillment progress, and field activity.`

My role:

`Requirements discovery, solution architecture, full-stack development, Odoo integration, workflow design, deployment, and production troubleshooting.`

Technical highlights:

- Role-based interfaces for operational and administrative users
- Delivery assignments and status management
- Driver acceptance and rejection workflows
- Customer and location information
- Integration with Odoo Sales, Inventory, Contacts, and delivery records
- Custom backend endpoints
- Operational notifications
- Web and mobile user experiences
- Production support across software, servers, networks, and field devices

Stack:

- Next.js
- TypeScript
- Flutter
- Python
- Odoo
- PostgreSQL
- REST APIs
- n8n

Architecture flow:

`Operational Users -> PWA / Mobile App -> Custom API Layer -> Odoo -> n8n Automations -> Notifications and Operational Events`

Screenshot placeholders:

- Delivery management dashboard
- Driver mobile application
- Route assignment view

Outcome:

Use qualitative wording only. Explain that it connects operational roles, ERP records, and field workflows in one production system.

### WhatsApp Customer Automation

Categories:

- `AI Workflow`
- `Conversational Agent`
- `Enterprise Integration`

Status/context:

- `Production Workflow`
- `Private production repository`

Summary:

`A conversational workflow that identifies customers through WhatsApp and connects messaging interactions with ERP data and business logic.`

Business problem:

`Customer requests received through WhatsApp needed to be connected with existing customer records, operational information, validation rules, and ERP workflows.`

Solution:

`Developed a Botpress-based conversational workflow integrated with Odoo through custom APIs and webhooks.`

My role:

`Conversation design, API development, customer identification logic, Odoo integration, webhook handling, validation, testing, and troubleshooting.`

Technical highlights:

- WhatsApp phone-number normalization
- Customer matching against Odoo records
- Custom webhook endpoints
- Structured API responses
- Business-rule validation
- Botpress conversational flows
- ERP data retrieval
- Error handling and fallback logic
- AI-assisted customer workflows

Stack:

- Botpress
- Python
- Odoo
- REST APIs
- Webhooks
- JavaScript
- n8n

Architecture flow:

`WhatsApp User -> Botpress Agent -> Custom Webhook -> Odoo Customer Data -> Business Logic -> Structured Response`

Screenshot placeholders:

- WhatsApp conversation workflow
- Botpress flow canvas
- Odoo customer lookup response

Outcome:

Use qualitative wording only. Explain that it connects customer messaging with ERP identity, validation, and structured responses.

### Route Planning and Fulfillment Automation

Categories:

- `Optimization`
- `Workflow Automation`
- `ERP Integration`

Status/context:

- `Production Workflow`
- `Private production repository`

Summary:

`An operational routing workflow that transforms delivery records into structured routes using vehicle, time, location, and service constraints.`

Business problem:

`Delivery planning required coordinating geographic locations, available vehicles, driver assignments, service times, fulfillment status, and warehouse preparation.`

Solution:

`Built workflows that extract delivery data from Odoo, prepare optimization inputs, calculate route sequences, and connect the results back to operational delivery processes.`

My role:

`Data modeling, backend development, integration architecture, optimization workflow implementation, ERP integration, and operational validation.`

Technical highlights:

- Delivery jobs generated from ERP records
- Vehicle and capacity constraints
- Geographic coordinates
- Service-time calculations
- Operating time windows
- Route sequencing
- Distance and travel-time tracking
- Driver assignments
- Integration with delivery batches and operational status

Stack:

- Python
- Odoo
- VROOM
- REST APIs
- n8n
- Mapping APIs
- PostgreSQL

Architecture flow:

`Odoo Deliveries -> Data Transformation -> Route Optimization Engine -> Route Sequence -> Driver and Warehouse Workflows`

Screenshot placeholders:

- Route optimization map
- Route assignment view
- Odoo integration workflow

Outcome:

Use qualitative wording only. Explain that it turns ERP delivery records into structured planning workflows constrained by vehicles, geography, service time, and operational status.

## Components

Create reusable components, preferably under `src/components/`:

- `ProductionSystemsSection`
- `ProductionProjectCaseStudy`
- `ProjectTechnologyTags`
- `ProjectArchitectureFlow`
- `ProjectImageGallery`
- `ProjectMetrics`

Keep components server-compatible unless a client-only interaction becomes necessary. The approved design does not require client state.

## Visual Behavior

Desktop:

- Wide case study blocks.
- Two-column system-map layout.
- Alternate text and visual emphasis between projects when it helps rhythm.
- Screenshot placeholder should be large enough to inspect.
- Architecture flow should be visible without reading a paragraph.

Mobile:

- Single-column layout.
- Logical order: title, description, visual, details, stack.
- No tiny text.
- Diagrams should wrap vertically and remain legible.

## Screenshot Placeholders

Do not use fake screenshots that could be confused with real evidence.

Each placeholder should clearly say what real image belongs there, for example:

- `Replace with: Delivery management dashboard`
- `Replace with: Driver mobile application`
- `Replace with: WhatsApp conversation workflow`
- `Replace with: Route optimization map`

Future real screenshots can be added through the typed `images` array.

## Accessibility

Requirements:

- Semantic `section`, `article`, `figure`, `figcaption`, and heading hierarchy.
- Descriptive alt text for future screenshots.
- Clear visible focus states for links.
- Adequate color contrast.
- Keyboard-safe links and no fake GitHub buttons.
- Respect `prefers-reduced-motion`.

## SEO

Include natural indexable text for:

- full-stack development
- Forward Deployed Engineering
- enterprise integrations
- AI agents
- workflow automation
- Odoo
- Next.js
- Python
- TypeScript
- production systems
- mobile applications
- PWA development

Avoid keyword stuffing.

## Testing And Verification

Use TDD for implementation.

Add tests that verify:

- The content model includes the production systems section for all locales.
- The three production project names are present.
- The components render the metrics block only when metrics exist.
- The portfolio page includes the production section anchor.
- Private repositories are labeled without fake GitHub links.

Run:

- `npm test`
- `npm run lint`
- `npm run build`

Also perform responsive visual verification locally at desktop and mobile widths.
