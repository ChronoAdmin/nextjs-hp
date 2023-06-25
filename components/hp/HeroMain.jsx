import React, { useEffect } from "react";
import styles from "@/styles/hp/HeroMain.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const HeroMain = () => {
  useEffect(() => {
    // 794px以上の場合のみアニメーションを適用する
    if (window.innerWidth > 794) {
      const lenis = new Lenis({ duration: 1.1 });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.registerPlugin(ScrollTrigger);
      const gsapAnim = gsap.utils.toArray(`.${styles.section}`);

      gsapAnim.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
          yPercent: 100,
          ease: "none",
        });
      });
    }
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <section
          className={`${styles.section} ${styles.section1}`}
          id="section1"
        >
          <div className={styles.paraWrap}>
            <div className={styles.leftColumn}>
              <ul>
                <li>Create</li>
                <li>New</li>
                <li>HP</li>
              </ul>
            </div>
            <div className={styles.title}>
              <h1>あなたの夢をコードに変える</h1>
              <h2>最先端のホームページ制作でビジネスを加速</h2>
            </div>
            <div className={styles.typing}>
              <h3>Your Dream = code + MyStack 😊</h3>
            </div>
          </div>
        </section>

        <section className={`${styles.section}  ${styles.section2}`}>
          <div className={styles.paraWrap}>
            <div className={styles.leftColumn}>
              <ul>
                <li>Highly</li>
                <li>rated</li>
                <li>sites</li>
              </ul>
            </div>
            <div className={styles.title}>
              <h1>SEOに優れたホームページ</h1>
              <h2>NetxJsを使用し、サイト評価の向上化やSEO対策を行います。</h2>
            </div>
            <div className={styles.typing}>
              <h3>Highly rated sites = NextJs 😊</h3>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section}  ${styles.section3}`}
          id="section3"
        >
          <div className={styles.paraWrap}>
            <div className={styles.leftColumn}>
              <ul>
                <li>LowPrice</li>
                <li>High</li>
                <li>Quality</li>
              </ul>
            </div>
            <div className={styles.title}>
              <h1>低価格高品質</h1>
              <h2>開発速度の向上化で制作コスト削減</h2>
            </div>
            <div className={styles.typing}>
              <h3>LowPrice + High Quality 😊</h3>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section}  ${styles.section4}`}
          id="section4"
        >
          <div className={styles.paraWrap}>
            <div className={styles.leftColumn}>
              <ul>
                <li>Sustainable</li>
                <li>Sites</li>
              </ul>
            </div>
            <div className={styles.title}>
              <h1>持続可能なホームページ</h1>
              <h2>作成して終わりではなく、長期的なサポートを</h2>
            </div>
            <div className={styles.typing}>
              <h3>SustainableSites = Long Term Support 😊</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroMain;
