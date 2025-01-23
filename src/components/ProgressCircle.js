import React, { useEffect, useRef } from "react";

const ProgressCircle = () => {
  const progressRef = useRef(null);
  const scrollToTopRef = useRef(null);

  // Update progress circle based on scroll
  const updateProgressCircle = () => {
    const progressElement = progressRef.current;
    const scrollToTopElement = scrollToTopRef.current;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.pageYOffset / totalHeight) * 283;
    progress = Math.min(progress, 283);

    if (progressElement) {
      progressElement.style.strokeDashoffset = 283 - progress;
    }

    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 10
    ) {
      scrollToTopElement.style.opacity = "1";
    } else {
      scrollToTopElement.style.opacity = "0";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgressCircle);
    window.addEventListener("resize", updateProgressCircle);

    updateProgressCircle();

    return () => {
      window.removeEventListener("scroll", updateProgressCircle);
      window.removeEventListener("resize", updateProgressCircle);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "10px",
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        style={{ width: "50px", height: "50px" }}
        className="progress-circle"
        viewBox="0 0 100 100"
      >
        <circle
          style={{
            fill: "transparent",
            stroke: "#ededed",
            strokeWidth: "5",
          }}
          className="progress-background"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <circle
          ref={progressRef}
          style={{
            fill: "none",
            stroke: "black",
            strokeWidth: "5",
            strokeDasharray: "283",
            strokeDashoffset: "283",
            transformOrigin: "center",
            transition: "stroke-dashoffset 0.3s ease",
          }}
          className="progress-circle-bar"
          cx="50"
          cy="50"
          r="45"
        ></circle>
      </svg>
      <div
        ref={scrollToTopRef}
        onClick={scrollToTop}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "opacity 0.3s ease",
          zIndex: "9998",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0",
        }}
        className="scroll-to-top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "20px", height: "20px", stroke: "white" }}
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;