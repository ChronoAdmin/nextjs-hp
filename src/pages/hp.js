import { use, useEffect, useRef, useState } from "react";
import styles from "../../src/styles/HP/Hp.module.css";
import { gsap } from "gsap";
import { Roll } from "../../components/home/Roll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function Hp() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const textEnRef = useRef(null);
  const textJaRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);
  const titleBlogRef = useRef(null)
  const blogLeftRef = useRef(null)
  useEffect(() => {
    if (!loading) {
      // 英語
      gsap.set(textEnRef.current, { opacity: 0 });
      gsap.from(textEnRef.current, {
        y: "50px",
      });
      gsap.to(textEnRef.current, {
        y: "0px",
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      });

      // 日本語
      gsap.set(textJaRef.current, { opacity: 0 });
      gsap.from(textJaRef.current, {
        y: "50px",
      });
      gsap.to(textJaRef.current, {
        y: "0px",
        opacity: 1,
        duration: 2,
        delay: 2,
        ease: "power4.out",
      });

      // line
      gsap.from(lineRef.current, {
        height: "0%",
      });
      gsap.to(lineRef.current, {
        height: "120%",
        opacity: 1,
        duration: 2,
        delay: 2,
        ease: "power4.out",
      });

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

      //   タイトル(Blog)
      gsap.set(titleBlogRef.current, { opacity: 0 });
      gsap.from(titleBlogRef.current, {
        y: "50px",
      });
      gsap.to(titleBlogRef.current, {
        y: "0px",
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#blog",
          start: "top center",
          end: "bottom center",
        },
      });

      //   BLOG LEFT
      gsap.set(blogLeftRef.current, { opacity: 0 });
      gsap.from(blogLeftRef.current, {
        width: "0px",
      });
      gsap.to(blogLeftRef.current, {
        width: "80%",
        opacity: 1,
        duration: 2.5,
        delay: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#blog",
          start: "top center",
          end: "bottom center",
        },
      });
    }
  }, [loading]);

  return (
    <div>
      {loading && (
        <div className={styles.loaderContainer}>
          <h1>Create New Hp</h1>
          <div className={styles.loader}>
            <div></div>
          </div>
        </div>
      )}
      <div className={`${styles.content} ${!loading ? styles.visible : ""}`}>
        <div className={styles.mv}>
          <div className={styles.line} ref={lineRef}></div>
          <div className={styles.en}>
            <h2 ref={textEnRef}>
              Experience digital excellence with our sleek and sophisticated
              solutions
            </h2>
            <p>produce By Chrono</p>
          </div>
          <h3 ref={textJaRef}>
            洗練されたソリューションで、デジタルの卓越性を体感
          </h3>
        </div>
        <section id="service" className={styles.service}>
          <div className={styles.inner}>
            <div className={styles.title} ref={titleRef}>
              <h2>Create HomePage</h2>
              <h3>新しくHPを作成</h3>
            </div>
            <Roll />
          </div>
        </section>
        <section id="blog" className={styles.blog}>
          <div className={styles.inner}>
            <div className={styles.title} ref={titleBlogRef}>
              <h2>With Nextjs</h2>
              <h3>高速なHP</h3>
            </div>
          </div>
          <div className={styles.blogBox}>

          <div className={styles.right}>
            <h2>次世代の制作方法</h2>
          </div>
          <div className={styles.left} ref={blogLeftRef}><Image src="/images/blog.jpg" height={800} width={1280} alt="nextjsとは"/><p>Wthat's Nextjs</p></div>
          </div>
        </section>
      </div>
    </div>
  );
}







