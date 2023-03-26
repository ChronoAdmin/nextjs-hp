import styles from "../src/styles/Flow.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export const Flow = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0 });
    gsap.from(textRef.current, {
      y: "-50px",
    });
    gsap.to(textRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#flow",
        start: "top center",
        end: "center center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div className={styles.flow} id="flow" ref={textRef}>
        <div className={styles.flowArea}><Link href="/">Flow</Link></div>
        <div className={styles.contactArea}><Link href="/">Contact</Link></div>
      </div>
    </>
  );
};
