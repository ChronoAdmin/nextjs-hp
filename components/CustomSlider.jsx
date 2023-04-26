import React, { useEffect, useRef, useState } from "react";
import styles from '@/styles/hp/CustomSlider.module.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";


export const CustomSlider = ({ images, interval, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (interval) {
      const timer = setInterval(() => {
        handleNext();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [interval, currentIndex]);

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "blur(1px)",
          }}
        />
      </AnimatePresence>
      <div
        className={styles.card}
        style={{
          pointerEvents: "none",
        }}
      >
        <h3>{texts[currentIndex]}</h3>
      </div>
    </div>
  );
};
