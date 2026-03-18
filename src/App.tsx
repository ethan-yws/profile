import { useEffect, useState } from "react";
import { ImageModal } from "./sections/ImageModal";
import { BioSection } from "./sections/BioSection";
import { ContactSection } from "./sections/ContactSection";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { PhotographySection } from "./sections/PhotographySection";
import { WorkSection } from "./sections/WorkSection";
import { useLoadingScreen } from "./hooks/useLoadingScreen";
import { useScrolledHeader } from "./hooks/useScrolledHeader";
import {
  navigation,
  socialLinks,
  siteData
} from "./data/siteData";

export default function App() {
  const isLoading = useLoadingScreen();
  const isScrolled = useScrolledHeader();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div id="loading" aria-label="Page loading">
          <div id="spinner" />
        </div>
      ) : null}

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      <Header
        logo={siteData.logo}
        isScrolled={isScrolled}
        navigation={navigation}
      />
      <main>
        <HeroSection
          intro={siteData.hero.intro}
          ctaHref={siteData.hero.ctaHref}
          ctaLabel={siteData.hero.ctaLabel}
          socialLinks={socialLinks}
        />
        <WorkSection title={siteData.work.title} items={siteData.work.items} />
        <BioSection
          title={siteData.bio.title}
          paragraphs={siteData.bio.paragraphs}
        />
        <PhotographySection
          title={siteData.photography.title}
          items={siteData.photography.items}
          onOpenImage={(src, alt) => setSelectedImage({ src, alt })}
        />
        <ContactSection
          title={siteData.contact.title}
          contactItems={siteData.contact.details}
          socialLinks={socialLinks}
        />
      </main>
      <footer id="footer" />
    </>
  );
}
