import  { useEffect, useState } from "react";
import Lottie from "lottie-react";
import heroImg from "../assets/images/coding.png";

export default function HeroLottiePlayer() {
  const [animationData, setAnimationData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // Remote fallback Lottie JSON (free sample). Replace with local file if you add one.
    const url = "https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json";
  
    let cancelled = false;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network error fetching Lottie");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setAnimationData(json);
      })
      .catch((err) => {
        console.warn("Failed to load Lottie animation:", err);
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // show fallback image if load failed or still loading
  if (!animationData || failed) {
    return (
      <div className="hero-lottie" aria-hidden="true">
        <img src={heroImg} alt="Coding Illustration" style={{ width: "100%", maxWidth: 380 }} />
      </div>
    );
  }

  return (
    <div className="hero-lottie" aria-hidden="true">
      <Lottie animationData={animationData} loop autoplay style={{ width: "100%", maxWidth: 380 }} />
    </div>
  );
}
