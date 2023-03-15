import gsap, { TweenMax } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "../src/styles/Light.module.css";

export const Light = ({ blog }) => {

  // 公開日時をフォーマット
  const articles = blog.map((article) => {
    const date = new Date(article.publishedAt);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${year}/${month}/${day}`;
    return {
      ...article,
      publishedAt: formattedDate,
    };
  });
  console.log(articles);

  // ここからhtml
  return (
    <>
      <section className={styles.Light}>
        <div className={styles.title}>
          <h1>Blog</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.blog_list}>
          <div className={styles.blogs}>
            {articles.map((article) => (
              <li key={article.id}>
                <div>{article.publishedAt}</div>
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
