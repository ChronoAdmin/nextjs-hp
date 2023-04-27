import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/Mv2.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import hoverEffect from "hover-effect";

export const Mv2 = () => {
  const [loading, setLoading] = useState(true);
  const textRef = useRef(null);
  const mvRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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
  });

  useEffect(() => {
    if (mvRef.current) {
      new hoverEffect({
        parent: mvRef.current,
        intensity: 0.3,
        image1: "images/mv2.webp",
        image2: "images/blog/blogPop.webp",
        displacementImage: "images/map.png",
      });
    }
  }, [mvRef]);

  return (
    <>
      <div className={styles.bgImg} ref={mvRef} id="mv">
        {/* <Image
          src="/images/mv2.png"
          height={1080}
          width={1920}
          alt="blogページの背景画像"
          priority
        /> */}
        <h1 >Chrono Office</h1>
      </div>
    </>
  );
};
