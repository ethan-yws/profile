import { SectionTitle } from "../components/SectionTitle";
import type { WorkPlaceholder } from "../data/siteData";

type WorkSectionProps = {
  title: string;
  items: readonly WorkPlaceholder[];
};

export function WorkSection({ title, items }: WorkSectionProps) {
  return (
    <section id="work" className="portfolio-section">
      <SectionTitle title={title} level={2} className="portfolio-section__title" />
      <div className="project-grid">
        {items.map((item) => (
          <a
            key={`${item.title}-${item.tone}`}
            href={item.href}
            className={`project-card project-card--${item.tone}`}
            aria-label={item.title}
          >
            <div className="project-card__badge">{item.badge}</div>
            <div className="project-card__body">
              <p className="project-card__title">{item.title}</p>
              <p className="project-card__note">{item.note}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
