import { useEffect, useState } from "react";
import "../css/scrollProgress.css";
const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;