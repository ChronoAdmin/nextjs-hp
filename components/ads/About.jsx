import styles from "@/styles/ads/about.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const About = () => {
    
  const imageRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if we're in a browser environment
      const SimpleParallax = require("simple-parallax-js");
      const imageElement = imageRef.current;
      const parallaxInstance = new SimpleParallax(imageElement, {
        scale: 1.35,
        delay: 1,
      });
      // Clean up function
      return () => {
        parallaxInstance.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>SNS広告代行</h2>
          <span>Managed the SNS Advertisement</span>
        </div>
        <div className={styles.box}>
          <div className={styles.description}>
            <p>
              Chrono Officeでは、<span className={styles.F}>F</span>acebookや
              <span className={styles.I}>I</span>
              nstagramをはじめとするSNS広告の制作・運用も担っております。
            </p>
            <p>
              単なる制作にとどまらず、広告の最適化、データの可視化・分析など、更なる集客向上に向けてのアフターフォローも万全です。
            </p>
          </div>
          <span className={styles.border}></span>
          <div className={styles.img}>
            <img
              src="/images/ads_imgs/about.jpg"
              height={960}
              width={640}
              ref={imageRef}
            />
          </div>
        </div>
        <div className={styles.text}>
          <p>Low Cost Effective Advertising</p>
          <Link href="/">お問い合わせ</Link>
        </div>
      </div>
    </>
  );
};

export default About;
