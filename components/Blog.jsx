import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Blog = ({ articles }) => {
  const latestArticles = articles.slice(0, 5);
  const textRef = useRef(null);
  const boxesRef = useRef(null);

  // useEffect(() => {
  //   gsap.set(Array.from(boxesRef.current.children), { opacity: 0, y: 50 });
  //   if (boxesRef.current) {
  //     gsap.to(Array.from(boxesRef.current.children), {
  //       y: 0,
  //       opacity: 1,
  //       duration: 5,
  //       stagger: {
  //         each: 0.3,
  //         from: "random",
  //       },
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: "#wrap",
  //         start: "top 30%",
  //         // toggleActions: "play reverse play reverse",
  //       },
  //     });
  //   } else {
  //   }
  // }, []);

  return (
    <>
      <section className={styles.Light} id="Light" ref={textRef}>
        <div className={styles.title}>
          <h1>Blog</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.blog_list}>
          <div className={styles.blogs}>
            {latestArticles.map((article) => (
              <li key={article.id}>
                <div className={styles.data}>{article.publishedAt}</div>
                <Link href={`blog/${article.id}`} className={styles.main_li}>
                  {article.title}
                </Link>
              </li>
            ))}
            <div className={styles.more}>
              <Link href="/" className={styles.btn}>
                More Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={styles.wrap} id="wrap">
        <div className={styles.title}>
          <h2>Blog</h2>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>

        <div className={styles.postAreaWrap}>
          <ul className={styles.postArea} ref={boxesRef}>
            {latestArticles.map((article, index) => (
              <li
                key={article.id}
                className={`${styles.postList} ${
                  styles[`postList${index + 1}`]
                }`}
              >
                <a href="">
                  <div className={styles.img}>
                    <Image
                      src={
                        article.thumbnail
                          ? article.thumbnail.url
                          : "/images/mv2.webp"
                      }
                      alt={article.title}
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div className={styles.post}>
                    <p>{article.title}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
};
