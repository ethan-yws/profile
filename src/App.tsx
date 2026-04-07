import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { WorkSection } from "./sections/WorkSection";
import { ExperimentsSection } from "./sections/ExperimentsSection";
import { useThemePreference } from "./hooks/useThemePreference";
import { siteData } from "./data/siteData";

export default function App() {
  const { preference, setPreference } = useThemePreference();

  return (
    <div className="app-shell">
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
        <WorkSection title={siteData.work.title} items={siteData.work.items} />
        <ExperimentsSection
          title={siteData.experiments.title}
          items={siteData.experiments.items}
        />
      </main>
    </div>
  );
}
