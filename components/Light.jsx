import gsap, { TweenMax } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "../src/styles/Light.module.css";

export const Light = ({ articles }) => {
  const latestArticles = articles.slice(0, 4);
  {latestArticles.map((article) => (
      title = article.title
    ))}

  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <section className={styles.Light}>
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
