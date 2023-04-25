// SSG
import Head from "next/head";
import Link from "next/link";
import { client } from "../../../../libs/client";

export const getStaticProps = async (context) => {
  const id = context.params.catId;

  const categories = await client.get({ endpoint: "categories", contentId: id});
  console.log("カテゴリー一覧ーーーーーーーー",categories);

  const data = await client.get({ endpoint: "blog" });
  console.log("ブログ記事一覧ーーーーーーーー",data);


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


  return {
    props: {
      articles: articles,
    categories: categories,
    },
  };
};

export const getStaticPaths = async () => {
  const categoryData = await client.get({ endpoint: "categories" });
  const paths = categoryData.contents.map((content) => `/blog/categories/${content.id}`);
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({articles,categoryData}) {
  console.log("ブログ記事一覧ーーーーーーーー",articles);
  console.log(categoryData)
  return (
    <>
    <div style={{height:"100vh"}}>
      {categoryData}
      {articles[0].title}
      <h1>aaaaaaa</h1>
    </div>

    </>
  );
}
