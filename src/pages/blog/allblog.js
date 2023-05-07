import React from "react";
import { client } from "../../../libs/client";
import Image from "next/image";
import styles from "@/styles/blog/allblog/allblog.module.css";
import { Posts } from "../../../components/blog/allblog/Posts";
import { Sidebar } from "../../../components/blog/allblog/Sidebar";

export const getStaticProps = async () => {
  // 記事一覧を取得して新着順に並び替え--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // 記事取得
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

  // 記事一覧を取得して新着順に並び替え--------------------------------------------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // 記事一覧を任意の条件で絞り込む関数--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // カテゴリー名で絞り込む関数
    function filterArticlesByCategory(articles, categoryName) {
      return articles.filter(
        (article) => article.category && article.category.name === categoryName
      );
    }

    // 人気記事で絞り込む関数
    function filterArticlesByPop(articles) {
      return articles.filter((article) => article.pop === true);
    }

  // 記事一覧を取得して新着順に並び替え--------------------------------------------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  // 絞り込む関数を使用する場所--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    // (イベント)
    const EventArticles = filterArticlesByCategory(articles, "イベント");
    //(高崎ブログ)
    const TakasakiBlogArticles = filterArticlesByCategory(articles, "高崎Blog");
    // 人気記事
    const popPost = filterArticlesByPop(articles);

  // 絞り込む関数を使用する場所--------------------------------------------------------↓↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  // カテゴリー情報を取得
  const categoriesData = await client.get({ endpoint: "categories" });
  const categories = categoriesData.contents;


  return {
    props: {
      articles: articles, //記事一覧データ（新着順に整形済み）
      EventArticles: EventArticles, //イベントタグのみの記事
      TakasakiBlogArticles: TakasakiBlogArticles, //高崎ブログタグのみの記事
      categories: categories, //カテゴリAPIの一覧
      popPost: popPost, //人気記事のデータ
    },
  };
};

function allblog({ articles, popPost,categories }) {
  console.log(popPost);
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
        <h1>ALL Post</h1>
      </div>
      <div className={styles.nextPage}>
      <div className={styles.main}>
        <div className={styles.posts}>
          <Posts allBlogData={articles} />
        </div>
          <Sidebar posts={popPost} categories={categories} />
      </div>
      </div>
    </>
  );
}

export default allblog;
