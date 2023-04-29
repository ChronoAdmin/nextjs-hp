import { client } from "../../libs/client";
import { Mv } from "../../components/home/Mv";
import { About } from "../../components/home/About";
import { Service } from "../../components/home/Service";
import { Blog } from "../../components/Blog";
import { Flow } from "../../components/home/Flow";
import { Stack } from "../../components/home/Stack";
// import { Ec } from "../../components/home/Ec";
import { Contact } from "../../components/home/Contact";
import { useRouter } from "next/router";
import { Loading } from "../../components/Loading";
import { useEffect, useRef, useState } from "react";
import { Mv2 } from "../../components/home/Mv2";
import styles from "@/styles/home/index.module.css";
import Image from "next/image";
import hoverEffect from "hover-effect";
// import { useEffect } from "react";
// import { fetchDataFromApi } from "../../libs/api";

// let categoryUrls = fetchDataFromApi("api/categories?populate=*");
// console.log("Category URLs object:", categoryUrls);

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

  // let categoryUrls = await fetchDataFromApi("/api/categories?populate=*");

  // console.log(
  //   "Category URLs object:",
  //   categoryUrls.data[0].attributes.img.data.attributes.url
  // );
  // categoryUrls = categoryUrls.data
  //   .map((category) => {
  //     if (
  //       category.attributes &&
  //       category.attributes.img &&
  //       category.attributes.img.data
  //     ) {
  //       return {
  //         title: category.attributes.title,
  //         url: category.attributes.img.data.attributes.url,
  //       };
  //     }
  //     return null;
  //   })
  //   .filter((obj) => obj !== null && obj.url !== undefined);

  // 記事情報と商品情報を1つのpropsオブジェクトに含める
  return {
    props: {
      articles: articles,
      // categoryUrls,
    },
  };
};

export default function Home({ articles, categoryUrls }) {
  const router = useRouter();
  const handleFormSubmitSuccess = () => {
    router.push("/thanks");
  };

  // useEffect(() => {
  //   getCategories()
  // },[])
  // const getCategories = () => {
  //   fetchDataFromApi("api/categories?populate=*").then(res => console.log(res))
  // }

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

  return (
    <>
      {/* {loading && <Loading title="Chrono Office" />} */}
      <Mv2 />
      <div className="wrap">
        <div className="inner">
          <About />
          <Service />
          <div className={styles.widthArea}>
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
            <div className={styles.text}>
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
          <Blog articles={articles} />
          <Stack />
          <Flow />
        </div>
      </div>
      {/* <Contact onFormSubmitSuccess={handleFormSubmitSuccess} /> */}
      {/* <div className="category-urls">
        {categoryUrls.map((obj, index) => (
          <div key={index} className="category-url">
            <img
              src={process.env.NEXT_PUBLIC_DEV_URL + obj.url}
              alt={obj.title}
            />
            <h1>{obj.title}</h1>
          </div>
        ))}
      </div> */}
    </>
  );
}
