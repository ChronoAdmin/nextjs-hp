import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/blog/index.module.css";
import { News } from "../../../components/blog/News";
import { client } from "../../../libs/client";
import { Pop } from "../../../components/blog/Pop";
import { TakasakiBlog } from "../../../components/blog/TakasakiBlog";
import { Category } from "../../../components/blog/Category";
import { Sidebar } from "../../../components/blog/allblog/Sidebar";

export default function CSRBlog() {
  const [isLoading, setIsLoading] = useState(true);

  const [articles, setArticles] = useState([]);
  const [EventArticles, setEventArticles] = useState([]);
  const [TakasakiBlogArticles, setTakasakiBlogArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popPost, setPopPost] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 以下の処理は getStaticProps と同様にデータを取得し、整形します。
      // ただし、useState と setX 関数を使用して、取得したデータを各状態に設定します。
      const data = await client.get({ endpoint: "blog" });
      const fetchedArticles = data.contents.map((article) => {
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
      fetchedArticles.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      });
      const EventArticles = filterArticlesByCategory(
        fetchedArticles,
        "イベント"
      );
      const TakasakiBlogArticles = filterArticlesByCategory(
        fetchedArticles,
        "高崎Blog"
      );
      const popPost = filterArticlesByPop(fetchedArticles);
      const categoriesData = await client.get({ endpoint: "categories" });
      const fetchedCategories = categoriesData.contents;
      setArticles(fetchedArticles);
      setEventArticles(EventArticles);
      setTakasakiBlogArticles(TakasakiBlogArticles);
      setPopPost(popPost);
      setCategories(fetchedCategories);
      setRecentArticles(fetchedArticles.slice(0, 3));

      // データ取得が終わったら、ここでローディングを終了させます
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 9999,
        }}
      >
        ローディング中...
      </div>
    );
  }

  // getStaticProps で定義した絞り込み関数はそのまま使用できます。
  function filterArticlesByCategory(articles, categoryName) {
    return articles.filter(
      (article) => article.category && article.category.name === categoryName
    );
  }
  function filterArticlesByPop(articles) {
    return articles.filter((article) => article.pop === true);
  }

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
      <div className={styles.nextPage}>
        <div className={styles.main}>
          <div className={styles.posts}>
            <News
              titleEn="News"
              titleJa="新着情報"
              blogs={recentArticles}
              more={"/blog/allblog"}
            />
            <News
              titleEn="Event"
              titleJa="イベント情報"
              blogs={EventArticles}
              more={"/blog/cate/xnukvf597"}
            />
            <Pop blogs={articles} />
            <TakasakiBlog
              titleEn="Takasaki"
              titleJa="高崎Blog"
              blogs={TakasakiBlogArticles}
              more={"/blog/cate/wdhob3-z86"}
            />
          </div>
          <Sidebar posts={popPost} categories={categories} />
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
          <video src="/images/footer_video.mp4" autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
}
