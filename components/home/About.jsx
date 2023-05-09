import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../src/styles/home/About.module.css";
import { gsap } from "gsap";
import Vivus from "vivus";
import SvgFile1 from "../../public/images/svg1.svg"; // <-- SVGファイルをインポート
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentsRef = useRef(null);

  useEffect(() => {
    // title
    gsap.set(titleRef.current, { opacity: 0 });
    gsap.from(titleRef.current, {
      y: "-50px",
    });
    gsap.to(titleRef.current, {
      y: "0",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%",
        end: "bottom center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });

    // subtitle
    gsap.set(subtitleRef.current, { opacity: 0 });
    gsap.from(subtitleRef.current, {
      x: "-50px",
    });
    gsap.to(subtitleRef.current, {
      x: "0",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#subtitle",
        start: "top 80%",
        end: "bottom center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });

    // コンテンツ
    gsap.set(contentsRef.current, { opacity: 0 });
    gsap.from(contentsRef.current, {
      y: "50px",
    });
    gsap.to(contentsRef.current, {
      y: "0",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#contents",
        start: "top 80%",
        end: "bottom center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
    
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={styles.about} id="about" >
        <div className={styles.title} ref={titleRef} id="title">
          <h2>About</h2>
          <div className={styles.c_scrolldown}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        {/* <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
            <Image src="/HatchfulExport-All/logo.png" width={600} height={600} alt="Chrono-Officeのlogo画像"/>

            </div>
            <div className={styles.contentBx}>
              <div className={styles.content}>
                <h1>Chrono Office <br />高速でSEOに強いホームページを</h1>
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
        </div> */}
        <div className={styles.container}>
          <h3 className={styles.about_sub_title} ref={subtitleRef} id="subtitle">
            <span style={{color:"#b50c45"}}>C</span>hrono-Office / クロノオフィス
          </h3>
          <div className={styles.wrap} ref={contentsRef} id="contents">
            <div className={styles.text_inner}>
              <ul>
                <li>
                  <Link href="/hp/#nextcard_text">
                    <span>HP制作について</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hp/#seo">
                    <span>SEO対策</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hp/#blogcard_text">
                    <span>blog構築</span>
                  </Link>
                </li>
              </ul>
              <div className={styles.button}>
                <Link href="/hp">more</Link>
              </div>
            </div>
            <div className={styles.img_inner}>
              <Image src="HatchfulExport-All/linkedin_banner_image_2.png" alt="chrono-officeのロゴ" height={auto} width={auto} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
