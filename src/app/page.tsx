const featuredProjects = [
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
];

const buildAreas = [
  "Next.js and React product sites",
  "Flutter and mobile operations apps",
  "Odoo modules and ERP integrations",
  "PWA admin tools and dashboards",
  "n8n automations and AI workflows",
  "Cloud, deployment, and server setup",
];

const research = [
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
];

const stack = [
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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sebastian Cervera Maltos">
          SCM
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#build">Build</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="section-label">Tech builder + applied AI research</p>
          <h1>Sebastian Cervera Maltos</h1>
          <p className="hero-text">
            I build software, automation, and AI-enabled systems for real
            operational problems: ERP workflows, internal tools, mobile apps,
            PWAs, and research prototypes that can become products.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#work">
              View selected work
            </a>
            <a
              className="button secondary"
              href="mailto:sebastiancerveramaltos@gmail.com"
            >
              Start a project
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Current focus">
          <div>
            <span>Current role</span>
            <strong>Head of Technology & AI</strong>
            <p>Grupo Frio, Guadalajara</p>
          </div>
          <div>
            <span>Core stack</span>
            <strong>Odoo, Next.js, Flutter, n8n</strong>
            <p>ERP, product engineering, automation, and AI workflows.</p>
          </div>
          <div>
            <span>Languages</span>
            <strong>Spanish, English, German</strong>
            <p>Native Spanish with C1 English and German.</p>
          </div>
        </aside>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2>Products, systems, and technical work with business context.</h2>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
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

      <section className="section build-section" id="build">
        <div className="section-heading">
          <p className="section-label">What I build</p>
          <h2>Practical software for teams that need operations to move.</h2>
        </div>
        <div className="build-grid">
          {buildAreas.map((area) => (
            <div className="build-card" key={area}>
              <span />
              <p>{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="research-band" id="research">
        <div className="section research-inner">
          <div className="section-heading">
            <p className="section-label">Applied AI / research</p>
            <h2>Research that stays close to reproducible systems.</h2>
          </div>
          <div className="research-grid">
            {research.map((item) => (
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
          <p className="section-label">Experience</p>
          <h2>From ERP consulting to product engineering and AI operations.</h2>
          <p>
            I have worked across Odoo consulting, custom software, deployment,
            automation, infrastructure, and technical enablement for companies
            building or improving their digital operations.
          </p>
        </div>
        <div className="timeline" aria-label="Experience timeline">
          <div>
            <span>2025 - Present</span>
            <strong>Head of Technology & AI, Grupo Frio</strong>
          </div>
          <div>
            <span>2024 - 2025</span>
            <strong>Software Developer Manager, Grupo Veniu</strong>
          </div>
          <div>
            <span>2023 - 2024</span>
            <strong>Freelance Full-Stack Developer</strong>
          </div>
        </div>
      </section>

      <section className="section stack-section">
        <p className="section-label">Stack</p>
        <div className="stack-list" aria-label="Technical stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Have an operations problem, product idea, or AI prototype?</h2>
          <p>
            I can help shape, build, and deploy the first useful version, then
            keep improving it with the team.
          </p>
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
        </div>
      </section>
    </main>
  );
}
