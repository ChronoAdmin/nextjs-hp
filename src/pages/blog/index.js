import Image from "next/image";
import React from "react";
import styles from "@/styles/blog/index.module.css";
import { News } from "../../../components/blog/News";
import { client } from "../../../libs/client";
import { Pop } from "../../../components/blog/Pop";
import { TakasakiBlog } from "../../../components/blog/TakasakiBlog";
import { Category } from "../../../components/blog/Category";

export const getStaticProps = async () => {
  // 記事情報
  const data = await client.get({ endpoint: "blog" });

  // 記事情報の投稿日時を整形
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

  //   整形した記事情報を新着順に並び替え
  articles.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  // 記事情報を任意のカテゴリー名で絞り込む関数
  function filterArticlesByCategory(articles, categoryName) {
    return articles.filter(
      (article) => article.category && article.category.name === categoryName
    );
  }
  // カテゴリーごとに記事をフィルタリング(イベント)
  const EventArticles = filterArticlesByCategory(articles, "イベント");
  // カテゴリーごとに記事をフィルタリング(高崎ブログ)
  const TakasakiBlogArticles = filterArticlesByCategory(articles, "高崎Blog");

  // カテゴリー情報を取得
    const categoriesData = await client.get({ endpoint: "categories" });
    const categories = categoriesData.contents;
    console.log(categories)

  return {
    props: {
      articles: articles,
      EventArticles: EventArticles,
      TakasakiBlogArticles: TakasakiBlogArticles,
      categories: categories,
    },
  };
};



export default function Blog({articles, EventArticles, TakasakiBlogArticles, categories}) {
  // 新着記事を３件分取得
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      <div className={styles.bgImg}>
        <Image
          src="/images/blog/blogBg.jpg"
          height={1080}
          width={1920}
          alt="blogページの背景画像"
          priority
        />
        <h1>Chrono Blog</h1>
      </div>

      <div className={styles.main}>
        <News titleEn="News" titleJa="新着情報" blogs={recentArticles} more={"/blog/allblog"} />
        <News titleEn="Event" titleJa="イベント情報" blogs={EventArticles} more={"/blog/categories/xnukvf597"} />
        <Pop blogs={articles} />
        <TakasakiBlog
          titleEn="Takasaki"
          titleJa="高崎Blog"
          blogs={TakasakiBlogArticles}
        />
        <Category categories={categories}/>
      </div>
    </>
  );
}
