import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 1000;
const SCROLL_THRESHOLD = 80;

export function useScrolledHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      const shouldEnableDesktopBehavior =
        window.innerWidth >= DESKTOP_BREAKPOINT;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsScrolled(shouldEnableDesktopBehavior && scrollTop > SCROLL_THRESHOLD);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("resize", updateScrolled);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, []);

  return isScrolled;
}
