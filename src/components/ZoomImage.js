import React, { useState } from "react";
import "/Users/aniruddhkapileshwari/Desktop/Deepa-pot/deepa-portfolio/src/components/projects/Promain.css";

const ZoomImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Percentage of x position
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Percentage of y position
    setZoomPosition({ x, y });
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`image-container ${isZoomed ? "zoomed" : ""}`}
      onClick={handleImageClick}
      onMouseMove={isZoomed ? handleMouseMove : null}
    >
      <img src={src} alt={alt} />
      {isZoomed && (
        <div
          className="zoom-overlay"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;