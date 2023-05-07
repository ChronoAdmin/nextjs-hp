import React, { use, useEffect, useRef, useState } from "react";
import styles from "../../src/styles/HP/Hp.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Loading } from "../../components/Loading";
import Link from "next/link";
import hoverEffect from "hover-effect";
import { CustomSlider } from "../../components/CustomSlider";

gsap.registerPlugin(ScrollTrigger);

export default function Hp() {
  const sliderImages = [
    "images/hp_imgs/img1.webp",
    "images/hp_imgs/img1_re.webp",
    "images/hp_imgs/img2.webp",
    "images/hp_imgs/img3_re.webp",
    "images/hp_imgs/img3.webp",
    "images/hp_imgs/img2_re.webp",
  ];

  const titleRef = useRef(null);
  const linksRef = useRef(null);
  const mvRef = useRef(null);
  const mv2Ref = useRef(null);
  const mv3Ref = useRef(null);

  useEffect(() => {
    if (mvRef.current) {
      new hoverEffect({
        parent: mvRef.current,
        intensity: 0.3,
        image1: "images/hp_imgs/img1.webp",
        image2: "images/hp_imgs/img1_re.webp",
        displacementImage: "images/map.png",
      });
    }
  }, [mvRef]);
  useEffect(() => {
    if (mv2Ref.current) {
      new hoverEffect({
        parent: mv2Ref.current,
        intensity: 0.3,
        image1: "images/hp_imgs/img2.webp",
        image2: "images/hp_imgs/img3_re.webp",
        displacementImage: "images/map.png",
      });
    }
  }, [mv2Ref]);
  useEffect(() => {
    if (mv3Ref.current) {
      new hoverEffect({
        parent: mv3Ref.current,
        intensity: 0.3,
        image1: "images/hp_imgs/img3.webp",
        image2: "images/hp_imgs/img2_re.webp",
        displacementImage: "images/map.png",
      });
    }
  }, [mv3Ref]);

  useEffect(() => {
    //   タイトル(Service)
    gsap.set(titleRef.current, { opacity: 0 });
    gsap.from(titleRef.current, {
      y: "50px",
    });
    gsap.to(titleRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
    });
  });

  return (
    <div>
      {/* {loading && <Loading title="Create New Hp" />} */}

      <div className={styles.bgImg}>
        <Image
          src="/images/hp_imgs/img8.webp"
          height={1080}
          width={1920}
          alt="blogページの背景画像"
          priority
        />
        <h1>Create HomePage</h1>
      </div>
      <div className={styles.wrap}>
        <section id="service" className={styles.service}>
          <div className={styles.inner}>
            <div className={styles.title} ref={titleRef}>
              <h2>Create HomePage</h2>
              <h3>新しくHPを作成</h3>
            </div>
            <div className={styles.hps} ref={linksRef}>
              {/* Links for services here */}
            </div>
          </div>
        </section>
        <section id="service-card">
          <div className={styles.cards}>
            <div className={styles.textCard1} id="nextcard_text">
              <div className={styles.textCard1__inner}>
                <div className={styles.link}>
                  <Link href="/">Next.jsの利用</Link>
                </div>
                <h2>Modern Websites with Next.js</h2>
                <p>
                  他社を凌駕するNext.jsを活用したウェブサイト制作。スピードとデザイン性を兼ね備え、ビジネスに最適なソリューションを提供します。詳細を知りたい方は、お気軽にお問い合わせください。
                </p>
                <div className={styles.links}>
                  <Link href="/">More</Link>
                </div>
              </div>
            </div>
            <div
              className={styles.imgCard1}
              id="nextcard_img"
              ref={mvRef}
              style={{ height: "50vmax" }}
            >
              <div className={styles.imgText}>
                <span>NextJs.</span>
                <h2>
                  Speed & Flexibility <br />
                  Outperform Your Competitors
                </h2>
              </div>
            </div>
            <div
              className={styles.imgCard1}
              id="seocard_img"
              ref={mv2Ref}
              style={{ height: "50vmax" }}
            >
              <div className={styles.imgText}>
                <span style={{ color: "#b95409" }}>SEO.</span>

                <h2>
                  Maximize Visibility
                  <br />
                  Rise Above the Competition
                </h2>
              </div>
            </div>
            <div
              className={styles.textCard1}
              id="seocard_text"
              style={{ background: "#12161e" }}
            >
              <div
                className={styles.textCard1__inner}
                style={{ textAlign: "right" }}
              >
                <div className={styles.link}>
                  <Link href="/">SEO対策</Link>
                </div>
                <h2>Effective SEO for Increased Traffic</h2>
                <p style={{ textAlign: "left" }}>
                  独自のSEO対策で競合他社に差をつけます。集客力を高め、ビジネスチャンスを拡大する最適なプランを提案します。SEO対策について相談したい方は、お問い合わせください。
                </p>
                <div className={styles.links}>
                  <Link href="/">More</Link>
                </div>
              </div>
            </div>
            <div
              className={styles.textCard1}
              id="blogcard_text"
              style={{ background: "rgb(255, 213, 0)" }}
            >
              <div className={styles.textCard1__inner}>
                <div className={styles.link}>
                  <Link href="/">Blog構築</Link>
                </div>
                <h2>High-Speed Blogging with microCMS</h2>
                <p>
                  microCMSを活用した効率的なブログ構築で、他社との差別化を実現。情報発信力を強化し、競合他社に勝つためのプラットフォームを提供します。詳しくはお問い合わせください。
                </p>
                <div className={styles.links}>
                  <Link href="/">More</Link>
                </div>
              </div>
            </div>
            <div
              className={styles.imgCard1}
              id="blogard_img"
              ref={mv3Ref}
              style={{ height: "50vmax" }}
            >
              <div className={styles.imgText}>
                <span style={{ color: "yellow" }}>BLOG.</span>

                <h2>
                  Empower Your Content
                  <br />
                  Stay Ahead in the Game
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.inner}></div>
        {/* <CustomSlider
          images={[
            "images/hp_imgs/img1.webp",
            "images/hp_imgs/img2.webp",
            "images/hp_imgs/img3.webp",
          ]}
          interval={3000}
          texts={["HP", "SEO", "BLOG"]}
        /> */}
      </div>
    </div>
  );
}
