import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@/styles/home/TextFade.module.css";

const TextFade = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const element2 = ref2.current;

    gsap.to(element, {
      x: "-500px",
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // when the top of the trigger hits the bottom of the viewport
        end: "bottom top", // when the bottom of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    gsap.to(element2, {
      x: "500px",
      scrollTrigger: {
        trigger: element2,
        start: "top bottom", // when the top of the trigger hits the bottom of the viewport
        end: "bottom top", // when the bottom of the trigger hits the top of the viewport
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
  }, []);

  return (
    <div className={styles.wrap}>
        <span ref={ref}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
        </span>
        <span ref={ref2}>
          Lorem dolor sit amet consectetur adipisicing elit. Iste, mollitia!
        </span>
    </div>
  );
};

export default TextFade;
