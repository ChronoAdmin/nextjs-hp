import React, { use, useEffect, useRef, useState } from "react";
import styles from "../../src/styles/HP/Hp.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Loading } from "../../components/Loading";
import Link from "next/link";
import hoverEffect from "hover-effect";

gsap.registerPlugin(ScrollTrigger);

export default function Hp() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  const imagePairs = [
    { image1: "images/hp_imgs/img1.webp", image2: "images/blog/blogPop_1.jpg" },
    { image1: "images/hp_imgs/img2.webp", image2: "images/blog/blogPop_2.jpg" },
    { image1: "images/hp_imgs/img3.webp", image2: "images/blog/blogPop_3.jpg" },
    { image1: "images/hp_imgs/img4.webp", image2: "images/blog/blogPop_4.jpg" },
  ];

  const titleRef = useRef(null);
  const titleBlogRef = useRef(null);
  const blogLeftRef = useRef(null);
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
    if (!loading) {
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
        scrollTrigger: {
          trigger: "#service",
          start: "top center",
          end: "bottom center",
        },
      });
    }
  }, [loading]);

  return (
    <div>
      {loading && <Loading title="Create New Hp" />}

      <div className={styles.bgImg}>
        <Image
          src="/images/blog/blogBg.jpg"
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
            <div className={styles.textCard1} id="card">
              <div className={styles.textCard1__inner}>
                <div className={styles.link}><Link href="/">hp制作のお問い合わせ</Link></div>
                <h2>Create Home Page With Next.Js</h2>
              </div>
            </div>
            <div
              className={styles.imgCard1}
              id="card"
              ref={mvRef}
              style={{ height: "50vmax" }}
            ></div>
            <div
              className={styles.imgCard1}
              id="card"
              ref={mv2Ref}
              style={{ height: "50vmax" }}
            ></div>
            <div
              className={styles.textCard1}
              id="card"
              style={{ background: "#12161e" }}
            >
              <div className={styles.textCard1__inner}>Text Content</div>
            </div>
            <div
              className={styles.textCard1}
              id="card"
              style={{ background: "rgb(255, 213, 0)" }}
            >
              <div className={styles.textCard1__inner}>Text Content</div>
            </div>
            <div
              className={styles.imgCard1}
              id="card"
              ref={mv3Ref}
              style={{ height: "50vmax" }}
            ></div>
          </div>
        </section>
      </div>
    </div>
  );
}
