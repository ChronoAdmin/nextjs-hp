import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";

const HoverEffectComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new hoverEffect({
        parent: containerRef.current,
        intensity: 0.3,
        image1: "/path/to/your/image1.jpg",
        image2: "/path/to/your/image2.jpg",
        displacementImage: "/path/to/your/displacement-image.png",
      });
    }
  }, [containerRef]);

  return <div ref={containerRef}></div>;
};

export default HoverEffectComponent;
