import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
}
