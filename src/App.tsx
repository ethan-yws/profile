import { useEffect, useState } from "react";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";
import { ExperimentsSection } from "./sections/ExperimentsSection";
import { WorkModal } from "./sections/WorkModal";
import { useThemePreference } from "./hooks/useThemePreference";
import { siteData, type WorkItem } from "./data/siteData";

export default function App() {
  const { preference, setPreference } = useThemePreference();
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="app-shell">
      <WorkModal item={selectedWork} onClose={() => setSelectedWork(null)} />
      <Header
        themePreference={preference}
        onThemeChange={setPreference}
      />
      <main className="portfolio-layout">
        <HeroSection
          name={siteData.name}
          intro={siteData.intro}
          socialLinks={siteData.socialLinks}
        />
        <WorkSection
          title={siteData.work.title}
          items={siteData.work.items}
          onSelectItem={setSelectedWork}
        />
        <ExperimentsSection
          title={siteData.experiments.title}
          items={siteData.experiments.items}
        />
      </main>
    </div>
  );
}
