import { use, useEffect, useRef, useState } from "react";
import styles from "../../src/styles/HP/Hp.module.css";
import { gsap } from "gsap";
import { Roll } from "../../components/home/Roll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Loading } from "../../components/Loading";
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
  const titleBlogRef = useRef(null);
  const blogLeftRef = useRef(null);
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
        },
      });
    }
  }, [loading]);

  return (
    <div>
      {loading && <Loading title="Create New Hp"/>}

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
              <h2>Next.jsとは</h2>
              <p>
                Next.jsは、ReactをベースにしたオープンソースのJavaScriptフレームワークで、高速なWebアプリケーション開発やSEO対策に優れており、開発効率を向上させるための多くの便利な機能を提供しています。
              </p>
              <p>世界中で有名なサイトが使用しています。</p>
              <div className={styles.brands}>
                <Image
                  src="/brandLogo/image.webp"
                  width={200}
                  height={200}
                  alt="hulu-logo"
                />
                <Image
                  src="/brandLogo/image-3.webp"
                  width={200}
                  height={200}
                  alt="tiktok-logo"
                />
                <Image
                  src="/brandLogo/image-2.webp"
                  width={200}
                  height={200}
                  alt="nike-logo"
                />
              </div>
              <h2 className={styles.why}>なぜNextjsなのか</h2>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Next.js製ホームページ （点数）</th>
                    <th>素のHTML製ホームページ （点数）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>パフォーマンス</td>
                    <td>高速（SSR/SSGによるプリレンダリング） （10）</td>
                    <td>通常（ブラウザのレンダリング速度に依存） （5）</td>
                  </tr>
                  <tr>
                    <td>SEO 対策</td>
                    <td>
                      しやすい（サーバーサイドレンダリングにより、メタ情報やタイトルなどを柔軟に設定できる）（9）
                    </td>
                    <td>
                      難しい（クライアントサイドレンダリングでは、検索エンジンがサイトの内容を把握しづらい場合がある）（6）
                    </td>
                  </tr>
                  <tr>
                    <td>ユーザーエクスペリエンス</td>
                    <td>
                      高い（サーバーサイドレンダリングにより、初回表示以降の画面遷移がスムーズになる）（10）
                    </td>
                    <td>
                      低い（クライアントサイドレンダリングでは、初回表示以降の画面遷移が遅くなる場合がある）（5）
                    </td>
                  </tr>
                  <tr>
                    <td>ページの機能性</td>
                    <td>
                      高い（Next.js
                      は豊富な機能があり、サーバーサイドレンダリングにより、様々な機能を実装できる）（8）
                    </td>
                    <td>
                      低い（素の HTML では、JavaScript
                      を使わない限り、動的な機能を実装することができない）（4）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.left} ref={blogLeftRef}>
              <Image
                src="/images/blog.jpg"
                height={800}
                width={1280}
                alt="nextjsとは"
              />
              <p>Wthat’s Nextjs</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
