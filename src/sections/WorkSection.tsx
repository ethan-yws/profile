import { SectionTitle } from "../components/SectionTitle";
import type { WorkItem } from "../data/siteData";

type WorkSectionProps = {
  title: string;
  items: readonly WorkItem[];
  onSelectItem: (item: WorkItem) => void;
};

export function WorkSection({
  title,
  items,
  onSelectItem,
}: WorkSectionProps) {
  return (
    <section id="work" className="portfolio-section">
      <SectionTitle title={title} level={2} className="portfolio-section__title" />
      <div className="project-grid">
        {items.map((item) => (
          <button
            key={`${item.title}-${item.tone}`}
            type="button"
            className={`project-card project-card--${item.tone}`}
            aria-label={item.title}
            onClick={() => onSelectItem(item)}
          >
            <div className="project-card__badge">{item.badge}</div>
            <div className="project-card__body">
              <p className="project-card__title">{item.title}</p>
              <p className="project-card__note">{item.note}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
