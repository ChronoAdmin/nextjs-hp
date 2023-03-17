import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "../src/styles/mv.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Mv = () => {
  const titleRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  useEffect(() => {
    gsap.set(textRef1.current, { opacity: 0 });
    gsap.set(textRef2.current, { opacity: 0 });
    gsap.from(textRef1.current, {
      y: "-50px",
    });
    gsap.to(textRef1.current, {
      y: "0",
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#mv",
        start: "70% center",
        toggleActions: "play reverse play reverse",
        fastScrollEnd: true,
      },
      stagger: {
        from: "start",
        amount: 0.1,
      },
    });
    gsap.from(textRef2.current, {
      y: "-50px",
    });
    gsap.to(textRef2.current, {
      y: "0",
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#mv",
        start: "70% center",
        toggleActions: "play reverse play reverse",
        fastScrollEnd: true,
      },
      stagger: {
        from: "start",
        amount: 0.5,
      },
    });
    
  }, []);

  return (
    <div className={styles.mv} id="mv">
      <video autoPlay loop muted playsInline>
        <source src="/images/名称未設定のデザイン.mp4" type="video/mp4" />
      </video>
      <h1 ref={titleRef}>Chrono Office Design Create</h1>
      <Link href="/contact" className={styles.contact}>
        Contact
      </Link>
      <p ref={textRef1}>Lorem ipsum dolor sit amet.</p>
      <p ref={textRef2}>Lorem ipsum dolor sit amet.</p>
    </div>
  )}