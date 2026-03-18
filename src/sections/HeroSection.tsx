import rightCover from "../../imgs/rightCover.jpg";
import { PrimaryButton } from "../components/PrimaryButton";
import { SocialLinks } from "../components/SocialLinks";
import type { SocialLink } from "../data/siteData";

type HeroSectionProps = {
  intro: string;
  ctaHref: string;
  ctaLabel: string;
  socialLinks: readonly SocialLink[];
};

export function HeroSection({
  intro,
  ctaHref,
  ctaLabel,
  socialLinks
}: HeroSectionProps) {
  return (
    <section id="top_part" className="hero-shell">
      <div
        id="about"
        className="animated slideInLeft"
        style={{ animationDelay: "2s" }}
      >
        <h2 id="intro">{intro}</h2>
        <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
        <SocialLinks
          items={socialLinks}
          className="hero-socials"
          listClassName="social-list"
          linkClassName="social"
          itemClassName="animated zoomIn"
        />
      </div>
      <div
        id="rightImage"
        className="animated jackInTheBox"
        style={{
          animationDelay: "2.2s",
          backgroundImage: `linear-gradient(0deg, rgba(89, 209, 165, 0.8), rgba(89, 209, 165, 0.3)), url("${rightCover}")`
        }}
      />
    </section>
  );
}
