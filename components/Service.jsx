import styles from "../src/styles/Service.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  const titleRef = useRef(null);
  const boxesRef = useRef(null);
  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 0, x: -100 });
    gsap.to(titleRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#service",
        start: "top center",
        // toggleActions: "play reverse play reverse",
      },
    });

    gsap.set(Array.from(boxesRef.current.children), { opacity: 0, x: 200 });
    if (boxesRef.current) {
      console.log("true");
      gsap.to(Array.from(boxesRef.current.children), {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#service",
          start: "top 30%",
          // toggleActions: "play reverse play reverse",
        },
      });
    } else {
      console.log("false");
    }
  }, []);
  return (
    <>
      <section className={styles.service} id="service">
        <div className={styles.title} ref={titleRef}>
          <h1>Service</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.cards} ref={boxesRef}>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <Image
                  src="/images/About/About_image1.webp"
                  width={500}
                  height={500}
                  alt="Aboutの写真です"
                />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <Image
                  src="/images/About/About_image1.webp"
                  width={500}
                  height={500}
                  alt="Aboutの写真です"
                />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <Image
                  src="/images/About/About_image1.webp"
                  width={500}
                  height={500}
                  alt="Aboutの写真です"
                />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
