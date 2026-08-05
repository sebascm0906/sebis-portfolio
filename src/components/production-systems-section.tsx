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

function ProjectTechnologyTags({
  items,
  variant = "stack",
}: {
  items: string[];
  variant?: "stack" | "category";
}) {
  return (
    <div
      className={`production-tags ${variant}`}
      aria-label={variant === "stack" ? "Technology stack" : "Project categories"}
    >
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
            <Image
              alt={image.alt}
              height={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 960px"
              src={image.src}
              width={960}
            />
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
