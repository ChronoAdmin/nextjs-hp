import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/blog/allblog/Categories.module.css";
import { client } from "../../../../libs/client";
import { Sidebar } from "../../../../components/blog/allblog/Sidebar";
import { Posts } from "../../../../components/blog/allblog/Posts";
import { Category } from "../../../../components/blog/Category";

export const getStaticProps = async (context) => {
  // クリックされた記事のidと合致するidを持つカテゴリーデータを取得--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  const id = context.params.cate;
  const category = await client.get({
    endpoint: "categories",
    contentId: id,
  });


  // クリックされた記事のidと合致するidを持つ記事データを取得--------------------------------------------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
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
  // すべての記事のカテゴリーを調べ、クリックされたカテゴリーと同じカテゴリーを持つ記事のみをfilter--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  const filteredArticles = articles.filter(
    (article) => article.category && article.category.id === id
  );

  // すべての記事のカテゴリーを調べ、クリックされたカテゴリーと同じカテゴリーを持つ記事のみをfilter--------------------------------------------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 
 
 
  const allData = await client.get({ endpoint: "blog"});
  const popData = allData.contents

  function filterArticlesByPop(popData) {
    return popData.filter(
      (article) => article.pop === true
    );
  }

  const popPost = filterArticlesByPop(popData)

  const categories = await client.get({ endpoint: "categories" });


  return {
    props: {
      category: category,
      filteredArticles: filteredArticles,
      popPost:popPost,
      categories: categories.contents,
    },
  };
};



//path生成--------------------------------------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

export const getStaticPaths = async () => {
  const categoryData = await client.get({ endpoint: "categories" });
  const paths = categoryData.contents.map(
    (content) => `/blog/cate/${content.id}`
  );
  return {
    paths,
    fallback: false,
  };
};

//path生成--------------------------------------------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export default function cate({category,filteredArticles,popPost, categories }) {
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
        <h1>{category.name}</h1>
      </div>


      <div className={styles.nextPage}>
        <h1 className={styles.pageTitle}>stack blog</h1>
        <div className={styles.main}>
          <div className={styles.posts}>
            <Posts allBlogData={filteredArticles} />
          </div>
          <Sidebar posts={popPost} categories={categories}/>
        </div>
      </div>

    </>
  );
}







