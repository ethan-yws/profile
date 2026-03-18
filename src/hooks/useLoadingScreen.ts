import { useEffect, useState } from "react";

const LOADING_DURATION_MS = 1650;

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return isLoading;
}
