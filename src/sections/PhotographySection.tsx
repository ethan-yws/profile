import { SectionTitle } from "../components/SectionTitle";
import type { PhotoItem } from "../data/siteData";

type PhotographySectionProps = {
  title: string;
  items: readonly PhotoItem[];
  onOpenImage: (imageUrl: string, imageAlt: string) => void;
};

export function PhotographySection({
  title,
  items,
  onOpenImage
}: PhotographySectionProps) {
  return (
    <section id="photography" className="content-section content-section--bold">
      <SectionTitle title={title} className="section-title" />
      <div className="content-columns content-columns--photos">
        {items.map((item) => (
          <div key={item.src}>
            <button
              type="button"
              className="photo-button"
              onClick={() => onOpenImage(item.src, item.alt)}
              aria-label={`Open image: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} />
            </button>
            {item.caption ? <p>{item.caption}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
