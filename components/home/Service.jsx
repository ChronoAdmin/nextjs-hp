import styles from "../../src/styles/home/Service.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Ripples from 'react-ripples';


gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  // const titleRef = useRef(null);
  // const boxesRef = useRef(null);
  // useEffect(() => {
  //   gsap.set(titleRef.current, { opacity: 0, x: -100 });
  //   gsap.to(titleRef.current, {
  //     x: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power4.out",
  //     scrollTrigger: {
  //       trigger: "#service",
  //       start: "top center",
  //     },
  //   });

  //   gsap.set(Array.from(boxesRef.current.children), { opacity: 0, x: 200 });
  //   if (boxesRef.current) {
  //     gsap.to(Array.from(boxesRef.current.children), {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: "#service",
  //         start: "top 30%",
  //       },
  //     });
  //   } else {
  //     console.log("false");
  //   }
  // }, []);
  return (
    <>
      {/* <section className={styles.service} id="service">
        <div className={styles.title} ref={titleRef}>
          <h2>Service</h2>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.cards} ref={boxesRef}>
          <div className={styles.box}>
            <h2 className={styles.border_line}></h2>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <div className={styles.imgBox}>
                  <Image
                    src="/images/undraw/programming.svg"
                    width={500}
                    height={500}
                    alt="HP作成の素材です"
                  />
                </div>
                <div className={styles.text}>
                  <h2>HP作成</h2>
                  <p>
                    従来の作り方とは違う技術を用いてHP作成を行っておりますので、競合他社との差別化を図ることが可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.border_line}></h2>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
              <div className={styles.imgBox}>
                <Image
                  src="/images/undraw/blog.svg"
                  width={500}
                  height={500}
                  alt="Blog構築の素材です"
                />
              </div>
                <div className={styles.text}>
                  <h2>Blog構築</h2>
                  <p>
                    Blog機能を付けたいためだけにWordPressを導入する必要はありません。時代は
                    <span className={styles.blue}>HeadressCMS！</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h2 className={styles.border_line}></h2>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
              <div className={styles.imgBox}>
                <Image
                  src="/images/undraw/seo.svg"
                  width={500}
                  height={500}
                  alt="SEO対策の素材です"
                />
              </div>
                <div className={styles.text}>
                  <h2>SEO対策</h2>
                  <p>
                    高速表示 × ページコンポーネント
                    <br />
                    を利用してサイト点数大幅UP！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <Link href="/service">More Service</Link>
        </div>
      </section> */}
      <div className={styles.service}>
        {/* HP */}
        <div className={styles.service_box}>
          <div className={styles.text}>
            <h3>HP作成</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              enim nisi ullam odio perferendis laudantium.
            </p>
            <a href="/">
              more<span>→</span>
            </a>
          </div>
          <div className={styles.img_card}>
            <div className={styles.back}></div>
            <div className={styles.card}>
              <div className={styles.img_text}>
                <h4>格安で作れる理由</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores, temporibus.
                </p>
              </div>
              <div className={styles.img_box}>
                <img src="/images/nextjs.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* HP */}
        <div className={styles.service_box}>
          <div className={styles.text}>
            <h3>SEO対策</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              enim nisi ullam odio perferendis laudantium.
            </p>
            <a href="/">
              more<span>→</span>
            </a>
          </div>
          <div className={styles.img_card}>
            <div></div>
            <div className={styles.card}>
              <div className={styles.img_text}>
                <h4>サイトが高評価になるSEO対策方法</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores, temporibus.
                </p>
              </div>
              <div className={styles.img_box}>
                <Ripples color="rgba(255, 255, 255, 0.3)">
                <img src="/images/hp_imgs/img3_re.webp" alt="" />

                </Ripples>
              </div>
            </div>
          </div>
        </div>
        {/* HP */}
        <div className={styles.service_box}>
          <div className={styles.text}>
            <h3>リニューアル</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              enim nisi ullam odio perferendis laudantium.
            </p>
            <a href="/">
              more<span>→</span>{" "}
            </a>
          </div>
          <div className={styles.img_card}>
            <div></div>
            <div className={styles.card}>
              <div className={styles.img_text}>
                <h4>既存ホームページのリニューアルも受け付けております</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores, temporibus.
                </p>
              </div>
              <div className={styles.img_box}>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
