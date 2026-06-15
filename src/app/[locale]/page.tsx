import { notFound } from "next/navigation";
import { isLocale, locales, portfolioContent } from "@/lib/portfolio-content";
import { renderPortfolioPage } from "../portfolio-page";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = portfolioContent[locale];

  return {
    title: `${content.hero.title} | ${content.hero.label}`,
    description: content.hero.text,
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return renderPortfolioPage(locale);
}
