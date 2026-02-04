import React, { Suspense, useEffect, useState } from "react";
const LazyPlayer = React.lazy(() => import("./HeroLottiePlayer"));
import heroImg from "../assets/images/Coding-pana.png";

export default function HeroLottie() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.querySelector(".hero");
    if (!el) {
      setShow(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reduced motion or not yet in viewport -> show static fallback image
  const fallback = <img src={heroImg} alt="Coding Illustration" style={{ width: "100%", maxWidth: 380 }} />;

  if (prefersReduced) return fallback;

  return show ? (
    <Suspense fallback={fallback}>
      <LazyPlayer />
    </Suspense>
  ) : (
    fallback
  );
}
