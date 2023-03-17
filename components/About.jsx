import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "../src/styles/About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0 });
    gsap.from(textRef.current, {
      y: "-50px",
    });
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
        scrub: true,
      },
    });
  }, []);
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
            <Image src="/images/About/About_image1.jpg" width={500} height={500}/>

            </div>
            <div className={styles.contentBx}>
              <div className={styles.content}>
                <h2>Chrono Office</h2>
                <p>
                  私たちは関東エリアを中心にHP制作事業を営んでいる企業です。創業以来、クライアントのニーズに合わせた高品質なウェブサイトの制作に取り組んできました。私たちのチームには、豊富な経験と専門知識を持つデザイナーや開発者がいます。
                </p>
                <p className={styles.none}>
                  私たちは常に最新技術にも目を向け、常にクライアントにとって最適なソリューションを提供することに注力しています。私たちの使命は、ビジネスの成長を支援するウェブサイトの制作に貢献することです。
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
