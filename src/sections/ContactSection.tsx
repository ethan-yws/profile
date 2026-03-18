import { PrimaryButton } from "../components/PrimaryButton";
import { SectionTitle } from "../components/SectionTitle";
import { SocialLinks } from "../components/SocialLinks";
import type { ContactDetail, SocialLink } from "../data/siteData";

type ContactSectionProps = {
  title: string;
  contactItems: readonly ContactDetail[];
  socialLinks: readonly SocialLink[];
};

export function ContactSection({
  title,
  contactItems,
  socialLinks
}: ContactSectionProps) {
  return (
    <section id="contact" className="content-section">
      <SectionTitle title={title} className="section-title" />
      <div className="contact-grid">
        <div id="inner_div">
          <div id="inner_table">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-row">
                <div className="contact-row-label">
                  <i className={item.iconClass} aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
                {item.label === "Location" ? (
                  <div id="address">{item.value}</div>
                ) : (
                  <span>
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </span>
                )}
              </div>
            ))}
            <SocialLinks
              items={socialLinks}
              className="contact-socials"
              listClassName="social-list"
              linkClassName="social"
            />
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="name" aria-label="Name" required />
          <input type="email" placeholder="email" aria-label="Email" required />
          <textarea
            placeholder="your message"
            aria-label="Your message"
            required
            rows={5}
          />
          <PrimaryButton type="submit">
            send
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
}
