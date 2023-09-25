import React, { useEffect, useRef } from "react";
import styles from "@/styles/home/About.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const About = () => {
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
        <div className={styles.about_text}>
          <div className={styles.left}>
            <div>
              <span>About</span>
              <h2>Chrono-Officeについて</h2>
            </div>
            <div className={styles.left_txt}>
              <p>2022年9月に設立</p>
              <p>
                群馬県を拠点に、大阪.京都.福岡県.でHP作成やSNS広告代行に始まり、
                <br />
                MEO対策やイベント企画まで幅広い業務を行っております。
              </p>
            </div>
          </div>
        </div>
        <div className={styles.about_imgs}>
          <div className={styles.imageContainer}>
            <img src="/images/About/about.svg" ref={imageRef}  alt="about" />
          </div>
          <div className={styles.imgTitle}>
            <h2>Low price & high quality</h2>
            <p>低価格高品質の提供でお客様のビジネスの成長を後押し致します。</p>
          </div>
        </div>
      </div>
    </>
  );
};
