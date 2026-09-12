import Image from "next/image";

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
        <div className="production-systems-signals" aria-label={content.labels.signalsAriaLabel}>
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
    <article className="production-project" id={project.id} data-layout={!project.architecture?.nodes.length ? "gallery" : index % 2 === 0 ? "standard" : "reversed"}>
      <div className="production-project-copy">
        <div className="production-project-kicker">
          <span>{project.status}</span>
          {project.repositoryLabel ? <span>{project.repositoryLabel}</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ProjectTechnologyTags
          ariaLabel={labels.categoryAriaLabel}
          items={project.categories}
          variant="category"
        />
      </div>
      <div className="production-project-system">
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
      <ProjectImageGallery images={project.images} />
      <details className="production-project-disclosure">
        <summary>{labels.technicalDetails}<span aria-hidden="true">+</span></summary>
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
            <ProjectTechnologyTags ariaLabel={labels.stackAriaLabel} items={project.stack} />
            <ProjectMetrics metrics={project.metrics} />
            <h4>{labels.outcomes}</h4>
            <p>{project.outcome}</p>
          </div>
        </div>
      </details>
    </article>
  );
}

function ProjectTechnologyTags({
  ariaLabel,
  items,
  variant = "stack",
}: {
  ariaLabel: string;
  items: string[];
  variant?: "stack" | "category";
}) {
  return (
    <div className={`production-tags ${variant}`} aria-label={ariaLabel}>
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
}: {
  images: ProductionProjectImage[];
}) {
  const availableImages = images.filter((image) => image.src);
  if (!availableImages.length) return null;
  const landscape = availableImages.every((image) => (image.width ?? 960) > (image.height ?? 640));

  return (
    <div className="project-image-gallery app-screenshot-gallery" data-format={landscape ? "landscape" : "portrait"} data-single={availableImages.length === 1}>
      {availableImages.map((image) => (
        <figure className="app-screenshot" key={image.src}>
          {image.src ? (
            <a href={image.src} target="_blank" rel="noreferrer">
            <Image
              alt={image.alt}
              height={image.height ?? 640}
              sizes={availableImages.length === 1 ? "(max-width: 1152px) 100vw, 1120px" : landscape ? "(max-width: 900px) 85vw, 760px" : "(max-width: 520px) 72vw, 240px"}
              src={image.src}
              width={image.width ?? 960}
            />
            </a>
          ) : null}
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
