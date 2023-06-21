import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


export const Blog = ({ articles }) => {
  gsap.registerPlugin(ScrollTrigger);

  const latestArticles = articles.slice(0, 5);

  return (
    <>
      <div className={styles.wrap} id="blog">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2>
              <span style={{ color: "rgb(255, 0, 85)" }}>B</span>log
            </h2>
          </div>
          <div
            className={styles.right}
            style={{ padding: "2vw" }}
          >
            <div className={styles.grid}>
              <div className={styles.list}>
                {latestArticles.map((latestArticle) => (
                  <div key={latestArticle.id}>
                    <Link href={`/blog/${latestArticle.id}`}>
                      <div className={styles.post}>
                        <div className={styles.data}>
                          {latestArticle.publishedAt}
                        </div>
                        <div className={styles.txt} id="txt">{latestArticle.title}</div>
                      </div>
                      <div className={styles.bb}>
                        <div className={styles.bb_hover}></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/blog" className={styles.more}>
              <span>Blog More</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
