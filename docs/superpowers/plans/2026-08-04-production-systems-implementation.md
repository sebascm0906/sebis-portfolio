# Production Systems Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a localized architecture-first `Selected Production Systems` section to the portfolio homepage.

**Architecture:** Keep production systems data in a typed content module, render it through focused reusable Server Components, and style it with the existing global visual system. The page composition remains in `src/app/portfolio-page.tsx`, with the new section inserted after selected work and before build.

**Tech Stack:** Next.js App Router, React Server Components, TypeScript, CSS/Tailwind v4 global stylesheet, Node test runner, ESLint, Vercel-ready static build.

---

## File Structure

- Create `src/lib/production-systems-content.ts`
  - Owns `ProjectMetric`, `ProductionProjectImage`, `ProductionProject`, localized section labels, and the three project content arrays.
  - Imports `Locale` from `src/lib/portfolio-content.ts`.

- Create `src/components/production-systems-section.tsx`
  - Owns all reusable rendering pieces: `ProductionSystemsSection`, `ProductionProjectCaseStudy`, `ProjectTechnologyTags`, `ProjectArchitectureFlow`, `ProjectImageGallery`, and `ProjectMetrics`.
  - Accepts `locale: Locale` and reads typed content from `productionSystemsContent`.
  - Remains a Server Component; no client state is needed.

- Modify `src/app/portfolio-page.tsx`
  - Import and render `ProductionSystemsSection`.
  - Add a localized nav link to `#systems`.

- Modify `src/lib/portfolio-content.ts`
  - Add `systems` to localized `nav`.

- Modify `src/app/globals.css`
  - Add styles for the architecture-first system map, image placeholders, flows, responsive behavior, focus states, and reduced-motion handling.

- Modify `tests/i18n-routes.test.mjs`
  - Add string-level tests consistent with current repository style.
  - Validate content model, localized nav, section integration, private repository handling, and metrics gating.

## Task 1: Add Failing Tests For Production Systems Content

**Files:**
- Modify: `tests/i18n-routes.test.mjs`
- Test: `tests/i18n-routes.test.mjs`

- [ ] **Step 1: Write the failing tests**

Add tests similar to:

```js
const productionContentPath = new URL(
  "../src/lib/production-systems-content.ts",
  import.meta.url,
);
const productionSectionPath = new URL(
  "../src/components/production-systems-section.tsx",
  import.meta.url,
);
```

Add test:

```js
test("production systems content defines localized architecture-first case studies", async () => {
  const content = await readFile(productionContentPath, "utf8");

  assert.match(content, /export type ProjectMetric/);
  assert.match(content, /export type ProductionProject/);
  assert.match(content, /productionSystemsContent/);
  assert.match(content, /Selected Production Systems/);
  assert.match(content, /Delivery Operations Platform/);
  assert.match(content, /WhatsApp Customer Automation/);
  assert.match(content, /Route Planning and Fulfillment Automation/);
  assert.match(content, /Private production repository/);
  assert.match(content, /Forward Deployed Engineering/);
  assert.match(content, /Unternehmensintegrationen/);
});
```

Add test:

```js
test("production systems section renders metrics conditionally and avoids fake repository links", async () => {
  const section = await readFile(productionSectionPath, "utf8");

  assert.match(section, /function ProjectMetrics/);
  assert.match(section, /metrics\?\.length/);
  assert.match(section, /return null/);
  assert.match(section, /repositoryLabel/);
  assert.doesNotMatch(section, /github\.com/);
});
```

Add test:

```js
test("portfolio page includes production systems navigation and section", async () => {
  const content = await readFile(contentPath, "utf8");
  const page = await readFile(new URL("../src/app/portfolio-page.tsx", import.meta.url), "utf8");

  assert.match(content, /systems:/);
  assert.match(page, /href="#systems"/);
  assert.match(page, /<ProductionSystemsSection locale={locale}/);
});
```

- [ ] **Step 2: Run tests to verify RED**

Run:

```bash
npm test
```

Expected: FAIL because `src/lib/production-systems-content.ts` and `src/components/production-systems-section.tsx` do not exist, and `systems` is not in current nav content.

## Task 2: Add Typed Production Systems Content

**Files:**
- Create: `src/lib/production-systems-content.ts`
- Modify: `src/lib/portfolio-content.ts`
- Test: `tests/i18n-routes.test.mjs`

- [ ] **Step 1: Implement the typed content module**

Create `src/lib/production-systems-content.ts`:

```ts
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
  };
  projects: ProductionProject[];
};

const spanishProductionSystems: ProductionSystemsContent = {
  // Define localized section labels and all three approved projects.
};

const englishProductionSystems: ProductionSystemsContent = {
  // Define localized section labels and all three approved projects.
};

const germanProductionSystems: ProductionSystemsContent = {
  // Define localized section labels and all three approved projects.
};

export const productionSystemsContent: Record<Locale, ProductionSystemsContent> = {
  es: spanishProductionSystems,
  en: englishProductionSystems,
  de: germanProductionSystems,
};
```

In the actual implementation, define the three `ProductionSystemsContent` constants before exporting `productionSystemsContent` so no `const` binding is referenced before initialization. The code snippet above shows the declaration order; replace each abbreviated body with the full localized content.

Create three concrete `ProductionSystemsContent` constants:

- `spanishProductionSystems`
- `englishProductionSystems`
- `germanProductionSystems`

Each constant must include exactly these project ids:

- `delivery-operations-platform`
- `whatsapp-customer-automation`
- `route-planning-fulfillment-automation`

Use the project names, categories, stacks, architecture nodes, screenshot placeholder names, and qualitative outcomes from the approved spec. Localize explanatory fields (`summary`, `problem`, `solution`, `role`, `outcome`, section labels, and signal text) into Spanish, English, and German. Keep `metrics` omitted or `metrics: []` until real values exist.

- [ ] **Step 2: Add localized nav label**

Modify `PortfolioContent.nav` in `src/lib/portfolio-content.ts`:

```ts
nav: {
  work: string;
  systems: string;
  build: string;
  research: string;
  contact: string;
};
```

Set:

- ES: `systems: "Sistemas"`
- EN: `systems: "Systems"`
- DE: `systems: "Systeme"`

- [ ] **Step 3: Run tests to verify content passes**

Run:

```bash
npm test
```

Expected: remaining failures only for missing component/page integration if Task 3 is not implemented yet.

## Task 3: Build Reusable Production Systems Components

**Files:**
- Create: `src/components/production-systems-section.tsx`
- Test: `tests/i18n-routes.test.mjs`

- [ ] **Step 1: Implement component shell and section export**

Create `src/components/production-systems-section.tsx`:

```tsx
import type { Locale } from "@/lib/portfolio-content";
import {
  productionSystemsContent,
  type ProductionProject,
  type ProductionProjectImage,
  type ProjectMetric,
} from "@/lib/production-systems-content";

export function ProductionSystemsSection({ locale }: { locale: Locale }) {
  const content = productionSystemsContent[locale];

  return (
    <section className="production-systems-section" id="systems">
      <div className="section production-systems-inner">
        <div className="production-systems-heading">
          <div>
            <p className="section-label">{content.label}</p>
            <h2>{content.heading}</h2>
          </div>
          <p>{content.description}</p>
        </div>
        <div className="production-systems-signals" aria-label="Production systems signals">
          {content.signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
        <div className="production-projects">
          {content.projects.map((project, index) => (
            <ProductionProjectCaseStudy
              index={index}
              key={project.id}
              labels={content.labels}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Implement case study component**

Implement:

```tsx
function ProductionProjectCaseStudy({
  index,
  labels,
  project,
}: {
  index: number;
  labels: (typeof productionSystemsContent)[Locale]["labels"];
  project: ProductionProject;
}) {
  return (
    <article className="production-project" data-layout={index % 2 === 0 ? "standard" : "reversed"}>
      <div className="production-project-copy">
        <div className="production-project-kicker">
          <span>{project.status}</span>
          {project.repositoryLabel ? <span>{project.repositoryLabel}</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ProjectTechnologyTags items={project.categories} variant="category" />
      </div>
      <div className="production-project-system">
        <ProjectImageGallery images={project.images} placeholderLabel={labels.screenshotPlaceholder} />
        <ProjectArchitectureFlow label={labels.architecture} nodes={project.architecture?.nodes ?? []} />
      </div>
      <div className="production-project-details">
        <div>
          <h4>{labels.businessProblem}</h4>
          <p>{project.problem}</p>
        </div>
        <div>
          <h4>{labels.solution}</h4>
          <p>{project.solution}</p>
        </div>
        <div>
          <h4>{labels.myRole}</h4>
          <p>{project.role}</p>
        </div>
      </div>
      <div className="production-project-footer">
        <div>
          <h4>{labels.technicalHighlights}</h4>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{labels.stack}</h4>
          <ProjectTechnologyTags items={project.stack} />
          <ProjectMetrics metrics={project.metrics} />
          <h4>{labels.outcomes}</h4>
          <p>{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Implement helper components**

Add:

```tsx
function ProjectTechnologyTags({
  items,
  variant = "stack",
}: {
  items: string[];
  variant?: "stack" | "category";
}) {
  return (
    <div className={`production-tags ${variant}`} aria-label={variant === "stack" ? "Technology stack" : "Project categories"}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectArchitectureFlow({ label, nodes }: { label: string; nodes: string[] }) {
  if (!nodes.length) return null;

  return (
    <div className="architecture-flow" aria-label={label}>
      <h4>{label}</h4>
      <ol>
        {nodes.map((node) => (
          <li key={node}>{node}</li>
        ))}
      </ol>
    </div>
  );
}

function ProjectImageGallery({
  images,
  placeholderLabel,
}: {
  images: ProductionProjectImage[];
  placeholderLabel: string;
}) {
  return (
    <div className="project-image-gallery">
      {images.map((image) => (
        <figure className="project-image-placeholder" key={image.placeholder}>
          {image.src ? (
            <img alt={image.alt} src={image.src} />
          ) : (
            <div aria-label={image.alt} role="img">
              <span>{placeholderLabel}</span>
              <strong>{image.placeholder}</strong>
            </div>
          )}
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

function ProjectMetrics({ metrics }: { metrics?: ProjectMetric[] }) {
  if (!metrics?.length) {
    return null;
  }

  return (
    <dl className="project-metrics">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`}>
          <dt>{metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}
```

- [ ] **Step 4: Run tests**

Run:

```bash
npm test
```

Expected: component-related tests pass; page integration may still fail until Task 4.

## Task 4: Integrate Section Into Portfolio Page

**Files:**
- Modify: `src/app/portfolio-page.tsx`
- Test: `tests/i18n-routes.test.mjs`

- [ ] **Step 1: Import the section**

Add:

```tsx
import { ProductionSystemsSection } from "@/components/production-systems-section";
```

- [ ] **Step 2: Add nav link**

Insert after work:

```tsx
<a href="#systems">{content.nav.systems}</a>
```

- [ ] **Step 3: Render the section**

Insert after selected work section:

```tsx
<ProductionSystemsSection locale={locale} />
```

- [ ] **Step 4: Run tests**

Run:

```bash
npm test
```

Expected: all tests pass.

## Task 5: Style The Architecture-First Section

**Files:**
- Modify: `src/app/globals.css`
- Test: browser verification plus `npm run lint` and `npm run build`

- [ ] **Step 1: Add production systems base styles**

Add CSS after current selected work styles:

```css
.production-systems-section {
  border-top: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.46), rgba(241, 239, 231, 0.48)),
    var(--background);
}

.production-systems-inner {
  padding: clamp(72px, 10vw, 132px) 0;
}

.production-systems-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 0.65fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: end;
}

.production-systems-heading > p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.7;
}
```

- [ ] **Step 2: Add signal, project, and layout styles**

Add styles for:

- `.production-systems-signals`
- `.production-projects`
- `.production-project`
- `.production-project[data-layout="reversed"]`
- `.production-project-copy`
- `.production-project-system`
- `.production-project-kicker`
- `.production-project-details`
- `.production-project-footer`

Keep border radius at `0` or at most `8px` if any repeated card needs it. Prefer thin lines and white space over decorative effects.

- [ ] **Step 3: Add tags, placeholders, flow, and metrics styles**

Add styles for:

- `.production-tags`
- `.project-image-gallery`
- `.project-image-placeholder`
- `.architecture-flow`
- `.architecture-flow ol`
- `.architecture-flow li`
- `.project-metrics`
- `.production-project :focus-visible`

Architecture nodes should be readable and wrap vertically on small screens.

- [ ] **Step 4: Add responsive and reduced motion rules**

Extend existing media queries:

```css
@media (max-width: 820px) {
  .production-systems-heading,
  .production-project,
  .production-project[data-layout="reversed"],
  .production-project-footer {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

- [ ] **Step 5: Run lint and build**

Run:

```bash
npm run lint
npm run build
```

Expected: both exit 0.

## Task 6: Responsive And Public Verification

**Files:**
- No production files expected unless verification finds an issue.

- [ ] **Step 1: Start local dev server**

Run:

```bash
npm run dev
```

Expected: Next.js dev server starts on localhost, usually port `3000`.

- [ ] **Step 2: Verify localized HTML**

Run separate checks:

```bash
curl -s http://localhost:3000/es | rg "Selected Production Systems|Delivery Operations Platform|WhatsApp Customer Automation|Route Planning and Fulfillment Automation"
curl -s http://localhost:3000/en | rg "Selected Production Systems|Enterprise applications|Production deployments"
curl -s http://localhost:3000/de | rg "Selected Production Systems|Unternehmensintegrationen|Systeme"
```

Expected: each command finds matching localized content.

- [ ] **Step 3: Verify desktop and mobile in browser**

Use the in-app browser or Playwright-backed browser tooling:

- Desktop width around `1440px`: section should render as wide two-column system maps.
- Mobile width around `390px`: section should render single-column in logical order.
- Confirm no text overlaps, no tiny unreadable diagram labels, and no fake GitHub buttons.

- [ ] **Step 4: Stop local dev server**

Stop the dev server and confirm no process is listening on the port.

- [ ] **Step 5: Final verification**

Run:

```bash
npm test
npm run lint
npm run build
git status -sb
```

Expected:

- Tests pass.
- Lint exits 0.
- Build exits 0.
- Git status shows only intended files changed.

## Task 7: Commit Implementation

**Files:**
- All changed implementation files.

- [ ] **Step 1: Commit implementation**

Run:

```bash
git add src/lib/portfolio-content.ts src/lib/production-systems-content.ts src/components/production-systems-section.tsx src/app/portfolio-page.tsx src/app/globals.css tests/i18n-routes.test.mjs
git commit -m "Add selected production systems section"
```

## Optional Release Step: Push And Deploy After User Confirmation

Only run this release step if the user explicitly confirms pushing and production deploy after reviewing local implementation.

- [ ] **Step 1: Push commits**

Run:

```bash
git push origin main
```

- [ ] **Step 2: Deploy to Vercel**

Run:

```bash
npx vercel deploy --prod --yes
```

If the production deploy only aliases the default Vercel domain, explicitly set `sebis.dev` to the new deployment:

```bash
npx vercel alias set <deployment-url> sebis.dev
```

- [ ] **Step 3: Verify production**

Run:

```bash
curl -I https://sebis.dev/es
curl -s https://sebis.dev/es | rg "Selected Production Systems|Delivery Operations Platform"
```

Expected: HTTP 200 and section content present.
