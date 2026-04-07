import { SectionTitle } from "../components/SectionTitle";
import type { ExperimentPlaceholder } from "../data/siteData";

type ExperimentsSectionProps = {
  title: string;
  items: readonly ExperimentPlaceholder[];
};

export function ExperimentsSection({
  title,
  items,
}: ExperimentsSectionProps) {
  return (
    <section id="experiments" className="portfolio-section">
      <SectionTitle title={title} level={2} className="portfolio-section__title" />
      <ul className="experiments-list">
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="experiment-item">
            <div className="experiment-item__icon" aria-hidden="true">
              <i className={item.iconClass} />
            </div>
            <div className="experiment-item__content">
              <p className="experiment-item__title">
                {item.title}, <span>{item.year}</span>
              </p>
              <p className="experiment-item__summary">{item.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
