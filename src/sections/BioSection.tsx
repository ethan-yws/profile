import { SectionTitle } from "../components/SectionTitle";

type BioSectionProps = {
  title: string;
  paragraphs: string[];
};

export function BioSection({ title, paragraphs }: BioSectionProps) {
  return (
    <section id="bio" className="content-section content-section--bold">
      <SectionTitle title={title} className="section-title" />
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
