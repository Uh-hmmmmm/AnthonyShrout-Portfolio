import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset scroll to top on route change, but preserve in-page hash targets and browser back/forward.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
