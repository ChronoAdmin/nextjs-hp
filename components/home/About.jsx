import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../src/styles/home/About.module.css";
import { gsap } from "gsap";
import Vivus from "vivus";
import SvgFile1 from "../../public/images/svg1.svg"; // <-- SVGファイルをインポート

export const About = () => {
  const textRef = useRef(null);
  const svgRef = useRef(null); // <-- 追加: SVG要素用のref

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
      // delay: 2,
      ease: "power4.out",
    });
    if (svgRef.current) {
      // 追加: Vivusアニメーション
      new Vivus("animated-svg", {
        type: "oneByOne",
        duration: 200,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={styles.about} id="about" ref={textRef}>
        <div className={styles.title}>
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
          <h3 className={styles.about_sub_title}>
            <span style={{color:"#b50c45"}}>C</span>hrono-Office / クロノオフィス
          </h3>
          <div className={styles.wrap}>
            <div className={styles.text_inner}>
              <ul>
                <li>
                  <a href="">
                    <span>lorem ffca</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>lorem hcsah</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>lorem iicsac</span>
                  </a>
                </li>
              </ul>
              <div className={styles.button}>
                <a href="">more</a>
              </div>
            </div>
            <div className={styles.img_inner}>
              <img src="HatchfulExport-All/linkedin_banner_image_2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
