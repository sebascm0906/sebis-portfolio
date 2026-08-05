import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const contentPath = new URL("../src/lib/portfolio-content.ts", import.meta.url);
const localePagePath = new URL("../src/app/[locale]/page.tsx", import.meta.url);
const rootPagePath = new URL("../src/app/page.tsx", import.meta.url);
const productionContentPath = new URL(
  "../src/lib/production-systems-content.ts",
  import.meta.url,
);
const productionSectionPath = new URL(
  "../src/components/production-systems-section.tsx",
  import.meta.url,
);

test("portfolio content defines Spanish, English, and German views", async () => {
  const content = await readFile(contentPath, "utf8");

  assert.match(content, /export const locales = \["es", "en", "de"\] as const;/);
  assert.match(content, /es:\s*{/);
  assert.match(content, /en:\s*{/);
  assert.match(content, /de:\s*{/);
  assert.match(content, /Constructor tech \+ research aplicado en AI/);
  assert.match(content, /Tech builder \+ applied AI research/);
  assert.match(content, /Tech Builder \+ angewandte KI-Forschung/);
});

test("locale route statically renders all supported language paths", async () => {
  const route = await readFile(localePagePath, "utf8");

  assert.match(route, /generateStaticParams/);
  assert.match(route, /renderPortfolioPage\(locale\)/);
  assert.match(route, /notFound\(\)/);
});

test("root route renders the Spanish view by default", async () => {
  const root = await readFile(rootPagePath, "utf8");

  assert.match(root, /renderPortfolioPage\("es"\)/);
});

test("portfolio exposes Letterboxd follow copy and profile link", async () => {
  const content = await readFile(contentPath, "utf8");
  const page = await readFile(new URL("../src/app/portfolio-page.tsx", import.meta.url), "utf8");

  assert.match(content, /letterboxdLabel/);
  assert.match(content, /Me encantan las pelis/);
  assert.match(content, /I love movies/);
  assert.match(content, /Ich liebe Filme/);
  assert.match(page, /https:\/\/letterboxd\.com\/sebasBalls\//);
});

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

test("production systems section renders metrics conditionally and avoids fake repository links", async () => {
  const section = await readFile(productionSectionPath, "utf8");

  assert.match(section, /function ProjectMetrics/);
  assert.match(section, /metrics\?\.length/);
  assert.match(section, /return null/);
  assert.match(section, /repositoryLabel/);
  assert.doesNotMatch(section, /github\.com/);
});

test("production systems section localizes accessible helper labels", async () => {
  const content = await readFile(productionContentPath, "utf8");
  const section = await readFile(productionSectionPath, "utf8");

  assert.match(content, /signalsAriaLabel/);
  assert.match(content, /stackAriaLabel/);
  assert.match(content, /categoryAriaLabel/);
  assert.match(content, /Indicadores de sistemas en producción/);
  assert.match(content, /Produktionssystem-Signale/);
  assert.match(section, /content\.labels\.signalsAriaLabel/);
  assert.match(section, /labels\.stackAriaLabel/);
  assert.match(section, /labels\.categoryAriaLabel/);
  assert.doesNotMatch(section, /aria-label="Production systems signals"/);
  assert.doesNotMatch(section, /"Technology stack"/);
  assert.match(section, /\{`\$\{placeholderLabel\}: \$\{image\.placeholder\}`\}/);
});

test("portfolio page includes production systems navigation and section", async () => {
  const content = await readFile(contentPath, "utf8");
  const page = await readFile(new URL("../src/app/portfolio-page.tsx", import.meta.url), "utf8");

  assert.match(content, /systems:/);
  assert.match(page, /href="#systems"/);
  assert.match(page, /<ProductionSystemsSection locale={locale}/);
});
