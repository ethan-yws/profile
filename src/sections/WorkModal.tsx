import type { WorkItem } from "../data/siteData";

type WorkModalProps = {
  item: WorkItem | null;
  onClose: () => void;
};

export function WorkModal({ item, onClose }: WorkModalProps) {
  if (!item) {
    return null;
  }

  return (
    <div
      className="work-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      onClick={onClose}
    >
      <div
        className={`work-modal__panel work-modal__panel--${item.tone}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="work-modal__close"
          onClick={onClose}
          aria-label="Close work details"
        >
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <div className="work-modal__header">
          <p className="work-modal__badge">{item.badge}</p>
          <h3 id="work-modal-title" className="work-modal__title">
            {item.title}
          </h3>
          <p className="work-modal__meta">
            {item.company} / {item.period}
          </p>
          <p className="work-modal__summary">{item.summary}</p>
        </div>

        <div className="work-modal__content">
          <div className="work-modal__section">
            <p className="work-modal__label">Highlights</p>
            <ul className="work-modal__list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="work-modal__section">
            <p className="work-modal__label">Tech Stack</p>
            <div className="work-modal__stack">
              {item.techStack.map((tech) => (
                <span key={tech} className="work-modal__chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
