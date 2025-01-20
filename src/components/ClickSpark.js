import React, { useEffect } from "react";
import "./ClickSpark.css";

const ClickSpark = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const spark = document.createElement("div");
      spark.className = "click-spark";

      // Position spark at the cursor tip
      spark.style.left = `${e.pageX}px`;
      spark.style.top = `${e.pageY}px`;

      spark.innerHTML = `
        <svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          stroke="var(--click-spark-color, currentColor)"
          transform="rotate(-20)"
        >
          ${Array.from(
            { length: 8 },
            () =>
              `<line x1="50" y1="30" x2="50" y2="4" stroke-dasharray="30" stroke-dashoffset="30" style="transform-origin: center" />`
          ).join("")}
        </svg>
      `;

      document.body.appendChild(spark);

      // Animate the sparks
      const animateSpark = () => {
        const sparks = [...spark.querySelectorAll("line")];
        const size = parseInt(sparks[0].getAttribute("y1"));
        const offset = `${size / 2}px`;

        const keyframes = (i) => {
          const deg = `calc(${i} * (360deg / ${sparks.length}))`;
          return [
            {
              strokeDashoffset: size * 3,
              transform: `rotate(${deg}) translateY(${offset})`,
            },
            {
              strokeDashoffset: size,
              transform: `rotate(${deg}) translateY(0)`,
            },
          ];
        };

        const options = {
          duration: 660,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "forwards",
        };

        sparks.forEach((spark, i) => spark.animate(keyframes(i), options));
      };

      animateSpark();

      // Remove spark after animation ends
      setTimeout(() => {
        spark.remove();
      }, 700); // Matches animation duration
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default ClickSpark;