type ImageModalProps = {
  image: {
    src: string;
    alt: string;
  } | null;
  onClose: () => void;
};

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div
      id="magnify"
      className={image ? "magnify-open animated fadeIn" : ""}
      style={{ display: image ? "flex" : "none" }}
      role="dialog"
      aria-modal="true"
      aria-label={image?.alt ?? "Expanded image"}
    >
      <button type="button" className="magnify-close" onClick={onClose}>
        <i className="fas fa-times" aria-hidden="true" />
      </button>
      <div
        id="img_here"
        style={
          image
            ? { backgroundImage: `url("${image.src}")` }
            : { backgroundImage: "none" }
        }
      />
    </div>
  );
}
