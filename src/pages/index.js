import { client } from "../../libs/client";
import { About } from "../../components/home/About";
import { Blog } from "../../components/Blog";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/home/index.module.css";
import Image from "next/image";
import hoverEffect from "hover-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Hero } from "../../components/home/Hero";
import Circle from "../../components/Circle";
import { TopLoading } from "../../components/home/TopLoading";
import { Accordion } from "../../components/home/Accordion";
import HeroMain from "../../components/home/HeroMain";
gsap.registerPlugin(ScrollTrigger);


// SSG
export const getStaticProps = async () => {
  // 記事情報A
  const data = await client.get({ endpoint: "blog" });
  const articles = data.contents.map((article) => {
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
  articles.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  // 記事情報と商品情報を1つのpropsオブジェクトに含める
  return {
    props: {
      articles: articles,
      // categoryUrls,
    },
  };
};

export default function Home({ articles, categoryUrls }) {
  const textRef = useRef(null);
  const router = useRouter();
  const handleFormSubmitSuccess = () => {
    router.push("/thanks");
  };
  const mvRef = useRef(null);

  useEffect(() => {
    if (mvRef.current) {
      new hoverEffect({
        parent: mvRef.current,
        intensity: 0.3,
        image1: "/images/width1.webp",
        image2: "/images/width2.webp",
        displacementImage: "/images/map.png",
      });
    }
  }, [mvRef]);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0 });
    gsap.from(textRef.current, {
      y: "50px",
    });
    gsap.to(textRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#width",
        start: "top 80%",
        end: "center center",
      },
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
    {loading ? <TopLoading /> : null}

    <Circle />
    {!loading ? <HeroMain /> : null}
      <div className="wrap">
        <div className="inner">
          <div className={styles.widthArea} >
            <div className={styles.img}>
              <div ref={mvRef} className={styles.imgref}></div>
              <div className={styles.imgText}>
                <h3>
                  <span>C</span>hrono 0ffice
                </h3>
                <h4>
                  AIを事業に取り込み
                  <br />
                  皆様のビジネスの手助けを
                </h4>
                <p>
                  マーケティングやターゲット層の特定において、AI技術を駆使しています。
                </p>
                <p>
                  要件定義を適切に行い、効率的な制作プロセスに取り組むことで、プロジェクトの完成までのスピードを最適化します。{" "}
                </p>
              </div>
            </div>
            <div className={styles.text} id="width" ref={textRef}>
              <div className={styles.logo}>
                <Image
                  src="/HatchfulExport-All/logo_transparent.png"
                  width={500}
                  height={500}
                  alt="logo"
                />
              </div>
              <div className={styles.logo_text}>
                <p>当社のロゴは、六角形をベースに5本の斜め線が分かれて配置されています。</p>
                <p>六角形は安定感やバランスを表し、斜め線はダイナミックなエネルギーと前進を象徴しています。</p>
                <p>ホームページ制作会社として、私たちはお客様のニーズに適応し、革新的で効果的なデザインを提供することを目指しています。</p>
                <p>このロゴは、私たちが持つ創造性と技術力を象徴し、お客様に信頼感と期待感を与えるデザインとなっています。</p>
              </div>
            </div>
          </div>
          <About />
          <Blog articles={articles} />
          <Accordion />
        </div>
      </div>
    </>
  );
}
