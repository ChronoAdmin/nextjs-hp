import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/Mv2.module.css";
import Image from "next/image";
import { gsap } from "gsap";


export const Mv2 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
    const textRef = useRef(null);

    useEffect(() => {
        if (!loading) {
          // title
          gsap.set(textRef.current, { opacity: 0 });
          gsap.from(textRef.current, {
            y: "50px",
          });
          gsap.to(textRef.current, {
            y: "0px",
            opacity: 1,
            duration: 2,
            delay: 2,
            ease: "power4.out",
          });
        }
      }, [loading]);
  return (
    <>
      <div className={styles.bgImg} id="mv">
        <Image
          src="/images/mv2.png"
          height={1080}
          width={1920}
          alt="blogページの背景画像"
          priority
        />
        <h1 ref={textRef}>Chrono Office</h1>
      </div>
    </>
  );
};
