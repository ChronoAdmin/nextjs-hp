import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "../src/styles/About.module.css";
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


export const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, {opacity: 0});
    gsap.from(textRef.current,{
      y: "-50px",
    })
    gsap.to(textRef.current, {
      y: "0px",
      opacity: 1,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center center",
        toggleActions: "play reverse play reverse",
        scrub:true,
      }
    })},[]);
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <section className={styles.about} id="about" ref={textRef}>
        <div className={styles.title}>
            <h1>About</h1>
            <div className={styles.c_scrolldown}>
                <div className={styles.c_line}></div>
            </div>
        </div>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.imgBx}>
                <img src="/images/About/About_image1.jpg" alt="アバウトの説明画像" srcset="" />
              </div>
              <div className={styles.contentBx}>
                <div className={styles.content}>
                  <h2>Responsive Card</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint, in temporibus non similique facilis quis ullam fuga
                    iusto voluptates tempore!
                  </p>
                  <Link href="/" className={styles.content_A}>
                    ReadMore
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};
