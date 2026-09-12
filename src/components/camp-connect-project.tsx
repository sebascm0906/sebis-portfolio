import Image from "next/image";
import { campConnectContent, campConnectUrl } from "@/lib/camp-connect-content";
import type { Locale } from "@/lib/portfolio-content";

export function CampConnectProject({ locale }: { locale: Locale }) {
  const content = campConnectContent[locale];

  return (
    <article className="camp-project" id="camp-connect" aria-labelledby="camp-connect-title">
      <div className="camp-project-heading">
        <div>
          <p className="section-label">{content.label}</p>
          <h3 id="camp-connect-title">Camp Connect<span>Staff</span></h3>
        </div>
        <p className="camp-status"><span aria-hidden="true" />{content.status}</p>
      </div>
      <div className="camp-project-intro">
        <p>{content.summary}</p>
        <div className="camp-store">
          <a className="button primary" href={campConnectUrl} target="_blank" rel="noreferrer">
            {content.cta}<span aria-hidden="true">↗</span>
          </a>
          <p>{content.access}</p>
        </div>
      </div>
      <div className="camp-gallery" role="group" aria-label={content.galleryLabel}>
        {content.screens.map((screen, index) => (
          <figure key={screen.name}>
            <a href={`/images/camp-connect/${screen.name}.webp`} target="_blank" rel="noreferrer">
              <Image
                src={`/images/camp-connect/${screen.name}.webp`}
                alt={screen.alt}
                width={600}
                height={1299}
                sizes="(max-width: 600px) 70vw, (max-width: 900px) 27vw, 260px"
              />
            </a>
            <figcaption><span aria-hidden="true">0{index + 1}</span>{screen.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="camp-source">{content.source}</p>
      <details className="production-project-disclosure camp-case-study">
        <summary>{content.detailsLabel}<span aria-hidden="true">+</span></summary>
        <dl>
          {content.caseStudy.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </details>
    </article>
  );
}
