// SSG
import Head from "next/head";
import Link from "next/link";
import { client } from "../../../../libs/client";
import { Posts } from "../../../../components/blog/allblog/Posts";
import styles from "@/styles/blog/allblog/Category.module.css";
import { Sidebar } from "../../../../components/blog/allblog/Sidebar";
import Image from "next/image";
import { Category } from "../../../../components/blog/Category";

export const getStaticProps = async (context) => {
  const id = context.params.catId;

  const categories = await client.get({
    endpoint: "categories",
    contentId: id,
  });
  // console.log("カテゴリー一覧ーーーーーーーー", categories);

  const categoriesAll = await client.get({ endpoint: "categories" });
  const categoriesAllRe = categoriesAll.contents;
  // console.log("カテゴリー一覧ーーーーーーーー", categories);

  const data = await client.get({ endpoint: "blog" });
  // console.log("ブログ記事一覧ーーーーーーーー", data);

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


  const filteredArticles = articles.filter(
    (article) => article.category && article.category.id === id
  );



  return {
    props: {
      articles: filteredArticles,
      categories: categories,
      categoriesAllRe,
      categoriesAllRe,
    },
  };
};

export const getStaticPaths = async () => {
  const categoryData = await client.get({ endpoint: "categories" });
  console.log("category!!!!!!!!!!!!",categoryData)
  const paths = categoryData.contents.map(
    (content) => `/blog/categories/${content.id}`
  );
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({
  articles,
  categoryData,
  categories,
  categoriesAllRe,
}) {

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
        <h1>{articles[0].category.name}</h1>
      </div>
      <div className={styles.wrap}>
        <div className={styles.main}>
          <div className={styles.posts}>
            <Posts allBlogData={articles} />
          </div>
          <div className={styles.side}>
            <Sidebar />
          </div>
        </div>
      <Category categories={categoriesAllRe} />
      </div>
    </>
  );
}
