import React, { useState } from "react";
import styles from "@/styles/home/HeroMain.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroMain = () => {
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  useEffect(() => {

    gsap.from(boxRef2.current, {
      y: "-50px",
    });
    gsap.to(boxRef2.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
    });

    gsap.from(boxRef3.current, {
      y: "-50px",
    });
    gsap.to(boxRef3.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: "power4.out",
    });

    gsap.from(boxRef4.current, {
      y: "-100px",
    });
    gsap.to(boxRef4.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      delay: 1.5,
      ease: "power4.out",
    });

  });

  return (
    <>
      <div className={styles.wrap} id="wrap">
        <div className={styles.img}>
          <Image
            src="/hero.webp"
            height={1080}
            width={1920}
            alt="heromain"
            ref={boxRef2}
            priority="true"
          />
        </div>
        <div className={styles.inner}>
          <Image src="/HatchfulExport-All/logo.png" height={300} width={300} className={styles.logo} ref={boxRef3} alt="logo" />
          <h1 ref={boxRef4}>Chrono-Office</h1>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
