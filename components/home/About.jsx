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
  const rightRef = useRef(null);



  useEffect(() => {
    gsap.to(rightRef.current, {
      delay: 1.5,
      duration: 2,
      backgroundColor: "#b3b4af",
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
       
        toggleActions: "play reverse play reverse",
        scrub: 1
      }
    });
  
    
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={styles.about} id="about" >
        {/* <div className={styles.title} ref={titleRef} id="title">
          <h2>About</h2>
          <div className={styles.c_scrolldown}>
            <div className={styles.c_line}></div>
          </div>
        </div> */}
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
        {/* <div className={styles.container}>
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
              <Image src="HatchfulExport-All/linkedin_banner_image_2.png" alt="chrono-officeのロゴ" height={"500"} width={"1000"} />
            </div>
          </div>
        </div> */}
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <h2><span style={{color: "rgb(255, 0, 85)"}}>C</span>hrono<br />Office</h2>
              <img src="/HatchfulExport-All/logo_transparent.png" alt="" />
            </div>
            <div className={styles.right} style={{padding:"2vw"}} ref={rightRef}>
              <h2>about</h2>
              <p>Chrono officeは、群馬県高崎市を中心に活動するホームページ制作会社です。<br />Next.jsとmicroCMSを用いた、素早く美しく機能的なWebサイトのを強みに活動しています。<br />他にも、お客様のビジネスの成功へのソリューションの提供、サイトを運用するうえでのアフターフォローなど。<br /><br />単なる制作会社として「Webサイトをつくるだけ」ではなく、<br />いつまでもお客様の役に立つ、「制作＋α」の価値を提供する存在に。<br /><br />私たちはお客様とともに、常に新しい価値を生み出すWebサイト制作・運用を目指しています。</p>
              <a href=""><span>more</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
