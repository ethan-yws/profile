import { SocialLinks } from "../components/SocialLinks";
import type { SocialLink } from "../data/siteData";

type HeroSectionProps = {
  name: string;
  intro: string;
  socialLinks: readonly SocialLink[];
};

export function HeroSection({ name, intro, socialLinks }: HeroSectionProps) {
  const [firstName, ...rest] = name.split(" ");

  return (
    <section className="profile-intro">
      <h1 className="profile-intro__name">
        <span>{firstName}</span>
        <span>{rest.join(" ")}</span>
      </h1>
      <p className="profile-intro__summary">{intro}</p>
      <SocialLinks
        items={socialLinks}
        className="profile-intro__socials"
        listClassName="social-list"
        linkClassName="social-link"
      />
    </section>
  );
}
