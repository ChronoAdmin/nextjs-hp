import { useRef, useState } from "react";
import styles from "@/styles/home/BlogSlider.module.css";
import { gsap } from "gsap";

export const BlogSlider = ({ images }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const a = useRef(null)
  const b = useRef(null)

  const slideRight = () => {
    if (translateValue === -1) return;
    gsap.to(a, {
      x: (translateValue - 1) * 130,
      duration: 0.3,
    });
    gsap.to(b, {
        x: (translateValue - 1) * 130,
        duration: 0.3,
    });
    setTranslateValue(translateValue - 1);
  };

  const slideLeft = () => {
    if (translateValue === 1) return;
    gsap.to(a, {
      x: (translateValue + 1) * 130,
      duration: 0.3,
    });
    gsap.to(b, {
        x: (translateValue - 1) * 130,
        duration: 0.3,
    });
    setTranslateValue(translateValue + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.imageWrapper}
        style={{ transform: `translateX(${translateValue * 130}px)` }}
        ref={a}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider image ${index + 1}`}
            className={styles.image}
            style={{ transform: `translateX(${translateValue * 130}px)` }}

            ref={b}
          />
        ))}
      </div>
      <div>
        <button className={styles.button} onClick={slideLeft}>
          {"<"}
        </button>
        <button className={styles.button} onClick={slideRight}>
          {">"}
        </button>
      </div>
    </div>
  );
};
