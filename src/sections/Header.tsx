type HeaderProps = {
  logo: string;
  isScrolled: boolean;
  navigation: Array<{
    href: string;
    label: string;
  }>;
};

export function Header({ logo, isScrolled, navigation }: HeaderProps) {
  return (
    <header
      id="header"
      className={`animated slideInDown ${isScrolled ? "header-scrolled" : ""}`}
      style={{ animationDelay: "1.8s" }}
    >
      <div className="header-inner">
        <div id="logo">{logo}</div>
        <nav id="navigation" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
