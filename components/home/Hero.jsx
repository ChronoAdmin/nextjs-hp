import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "@/styles/home/Hero.module.css";
import { Power2, Power3, gsap } from "gsap";

export const Hero = () => {
  const animateChrono = () => {
    const targetWidth = window.innerWidth <= 768 ? "60%" : "800px";
    gsap.to(chronoRef.current, {
      delay: 1.5,
      duration: 2,
      width: targetWidth,
      ease: "power4.out",
    });
  };


  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textH1Ref = useRef(null);
  const nameRef = useRef(null);
  const chronoRef = useRef(null);
  const navRef = useRef(null);
  const infoRef = useRef(null);
  useEffect(() => {
    
    animateChrono();

    gsap.to(leftRef.current, {
      width: "50%",
      delay: 0.8,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(rightRef.current, {
      delay: 0.8,
      duration: 2,

      width: "50%",
      ease: "power4.out",
    });
    gsap.fromTo(
      textH1Ref.current,
      { x: 1000 }, 
      { x: 0, duration: 2, ease: "power4.out", delay: 2 }
    );
    gsap.fromTo(
      navRef.current.children,
      { x: 1000 }, 
      { x: 0, duration: 2, ease: "power4.out", delay: 2,stagger: 0.3, } 
    );
    gsap.to(infoRef.current, {
      opacity: 1,
      delay: 0.6,
      duration: 2,
      y: 0,
      ease: "power4.out",
    });
    const handleResize = () => {
      animateChrono();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.left} ref={leftRef}></div>
        <div className={styles.right} ref={rightRef}></div>

        <div className={styles.content}>
          <div className={styles.img_wrap}>
            <img className={styles.chrono} ref={chronoRef} src="/hero.jpg" />
          </div>
        </div>

        <div className={styles.info} ref={infoRef}>
          <ul>
            <li>chrono.official@outlook.jp</li>
            <li>@chrono</li>
          </ul>
        </div>

        <div className={styles.text} ref={textH1Ref}>
          <h1>chrono-office</h1>
          <p>HomePage Creator</p>
        </div>

        <div className={styles.name} ref={nameRef}>
          chrono-office
        </div>

        <div className={styles.bottomnav}>
          <ul ref={navRef}>
            <li>about</li>
            <li>teck</li>
            <li>case</li>
            <li>service</li>
          </ul>
        </div>
      </div>
    </>
  );
};
