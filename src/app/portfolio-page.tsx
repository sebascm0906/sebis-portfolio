import Image from "next/image";
import { NavigationShell } from "@/components/navigation-shell";
import { ProductionSystemsSection } from "@/components/production-systems-section";
import { CampConnectProject } from "@/components/camp-connect-project";
import { locales, portfolioContent, stack, type Locale } from "@/lib/portfolio-content";

export function renderPortfolioPage(locale: Locale) {
  const content = portfolioContent[locale];

  return (
    <main lang={locale}>
      <NavigationShell locale={locale} brand={
          <a className="brand" href="#top" aria-label="sebis · Sebastian Cervera Maltos">
          <Image src="/brand/sebis-symbol.png" width={36} height={36} alt="" />
          <span>sebis</span>
        </a>
        }>
        <div className="header-actions" id="portfolio-navigation">
          <nav aria-label={locale === "es" ? "Navegación principal" : locale === "de" ? "Hauptnavigation" : "Primary navigation"}>
            <a href="#work">{content.nav.work}</a>
            <a href="#systems">{content.nav.systems}</a>
            <a href="#build">{content.nav.build}</a>
            <a href="#research">{content.nav.research}</a>
            <a className="nav-contact" href="#contact">{content.nav.contact}<span aria-hidden="true">↗</span></a>
          </nav>
          <div className="language-switcher" aria-label="Language selector">
            {locales.map((option) => (
              <a
                aria-current={option === locale ? "page" : undefined}
                href={`/${option}`}
                key={option}
              >
                {option.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </NavigationShell>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="section-label">{content.hero.label}</p>
          <h1>{content.hero.title}</h1>
          <p className="hero-text">{content.hero.text}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              {content.hero.primaryCta}
            </a>
            <a
              className="button secondary"
              href="mailto:sebastiancerveramaltos@gmail.com"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label={content.focus.ariaLabel}>
          <figure className="profile-photo">
            <Image
              src="/images/profile/sebastian.png"
              alt="Sebastian Cervera Maltos"
              width={1280}
              height={960}
              sizes="(max-width: 820px) 100vw, 440px"
              preload
            />
          </figure>
          <div>
            <span>{content.focus.currentRoleLabel}</span>
            <strong>{content.focus.currentRole}</strong>
            <p>{content.focus.location}</p>
          </div>
          <div>
            <span>{content.focus.stackLabel}</span>
            <strong>{content.focus.stack}</strong>
            <p>{content.focus.stackText}</p>
          </div>
          <div>
            <span>{content.focus.languagesLabel}</span>
            <strong>{content.focus.languages}</strong>
            <p>{content.focus.languagesText}</p>
          </div>
        </aside>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-label">{content.selectedWork.label}</p>
          <h2>{content.selectedWork.heading}</h2>
        </div>
        <CampConnectProject locale={locale} />
        <div className="project-list">
          {content.selectedWork.projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span>{project.type}</span>
            </article>
          ))}
        </div>
      </section>

      <ProductionSystemsSection locale={locale} />

      <section className="section build-section" id="build">
        <div className="section-heading">
          <p className="section-label">{content.build.label}</p>
          <h2>{content.build.heading}</h2>
        </div>
        <div className="build-grid">
          {content.build.areas.map((area, index) => (
            <div className="build-card" key={area}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="research-band" id="research">
        <div className="section research-inner">
          <div className="section-heading">
            <p className="section-label">{content.research.label}</p>
            <h2>{content.research.heading}</h2>
          </div>
          <div className="research-grid">
            {content.research.items.map((item) => (
              <article className="research-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="experience-copy">
          <p className="section-label">{content.experience.label}</p>
          <h2>{content.experience.heading}</h2>
          <p>{content.experience.text}</p>
        </div>
        <div className="timeline" aria-label={content.experience.ariaLabel}>
          {content.experience.timeline.map((item) => (
            <div key={`${item.period}-${item.role}`}>
              <span>{item.period}</span>
              <strong>{item.role}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section stack-section">
        <p className="section-label">{content.stackLabel}</p>
        <div className="stack-list" aria-label="Technical stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="section-label">{content.contact.label}</p>
          <h2>{content.contact.heading}</h2>
          <p>{content.contact.text}</p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:sebastiancerveramaltos@gmail.com">
            sebastiancerveramaltos@gmail.com
          </a>
          <a
            className="button secondary"
            href="https://www.linkedin.com/in/sebasti%C3%A1n-cervera-maltos-379b0124b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="button secondary"
            href="https://github.com/sebascm0906"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button secondary letterboxd-button"
            href="https://letterboxd.com/sebasBalls/"
            target="_blank"
            rel="noreferrer"
          >
            {content.contact.letterboxdLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
