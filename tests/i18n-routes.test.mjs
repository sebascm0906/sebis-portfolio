import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const contentPath = new URL("../src/lib/portfolio-content.ts", import.meta.url);
const localePagePath = new URL("../src/app/[locale]/page.tsx", import.meta.url);
const rootPagePath = new URL("../src/app/page.tsx", import.meta.url);

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
