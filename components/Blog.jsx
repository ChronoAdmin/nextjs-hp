import styles from "../src/styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Blog = ({ articles }) => {
  const latestArticles = articles.slice(0, 4);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0 });
    gsap.from(textRef.current, {
      y: "-50px",
    });
    gsap.to(textRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#Light",
        start: "top center",
        end: "center center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
  }, []);

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
            <Link href="/" className={styles.btn}>
              More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
