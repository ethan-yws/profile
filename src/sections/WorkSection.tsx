import { SectionTitle } from "../components/SectionTitle";
import type { WorkItem } from "../data/siteData";

type WorkSectionProps = {
  title: string;
  items: readonly WorkItem[];
};

export function WorkSection({ title, items }: WorkSectionProps) {
  return (
    <section id="work" className="content-section content-section--bold">
      <SectionTitle title={title} className="section-title" />
      <div className="content-columns">
        {items.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
            {item.label}{" "}
            {item.iconClass ? (
              <i className={item.iconClass} aria-hidden="true" />
            ) : null}
          </a>
        ))}
      </div>
    </section>
  );
}
