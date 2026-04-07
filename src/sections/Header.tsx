import type { ThemePreference } from "../hooks/useThemePreference";

type HeaderProps = {
  themePreference: ThemePreference;
  onThemeChange: (theme: ThemePreference) => void;
};

const themeOptions: ThemePreference[] = ["light", "dark", "device"];

const themeIcons: Record<ThemePreference, string> = {
  light: "fas fa-sun",
  dark: "fas fa-moon",
  device: "fas fa-laptop",
};

export function Header({ themePreference, onThemeChange }: HeaderProps) {
  const currentIndex = themeOptions.indexOf(themePreference);
  const nextTheme = themeOptions[(currentIndex + 1) % themeOptions.length];

  return (
    <header className="topbar">
      <button
        type="button"
        className="theme-switch"
        aria-label={`Theme: ${themePreference}. Switch to ${nextTheme}.`}
        title={`Theme: ${themePreference}`}
        onClick={() => onThemeChange(nextTheme)}
      >
        <i className={themeIcons[themePreference]} aria-hidden="true" />
        <span className="sr-only">{themePreference}</span>
      </button>
    </header>
  );
}
