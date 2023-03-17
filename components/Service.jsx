import styles from "../src/styles/Service.module.css";
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


export const Service = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.set(cardRef.current, {opacity: 0});
    gsap.from(cardRef.current,{
      x: "-100px",
    })
    gsap.to(cardRef.current, {
      x: "0px",
      opacity: 1,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#service",
        start: "top center",
        end: "center center",
        toggleActions: "play reverse play reverse",
        scrub:true,
      }
    })},[]);
  return (
    <>
      <section className={styles.service} ref={cardRef} id="service">
        <div className={styles.title}>
          <h1>Service</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <img src="/images/About/About_image1.jpg" alt="" />
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
                <img src="/images/About/About_image1.jpg" alt="" />
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
                <img src="/images/About/About_image1.jpg" alt="" />
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
