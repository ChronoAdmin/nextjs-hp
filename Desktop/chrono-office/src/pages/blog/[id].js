// SSG
import Head from "next/head";
import Link from "next/link";
import { client } from "../../../libs/client";
import styles from "../../styles/BlogContents.module.css";
import { NextCP } from "../../../components/blog/posts/NextCP";
// import { Post } from "../../../components/blog/posts/post";

function removeInlineStyles(htmlString) {
  return htmlString.replace(/ style="[^"]*"/g, "");
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  console.log("data---------------------------",data)
  
  // bodyプロパティのインラインスタイルを削除
  const sanitizedBody = removeInlineStyles(data.body);
  // 新しいオブジェクトにサニタイズされたbodyプロパティをセット
  const sanitizedData = { ...data, body: sanitizedBody };

  const categories = await client.get({ endpoint: "categories" });

  const allData = await client.get({ endpoint: "blog"});
  const popData = allData.contents




  function filterArticlesByPop(popData) {
    return popData.filter(
      (article) => article.pop === true
    );
  }

  const popPost = filterArticlesByPop(popData)
  // console.log("人気記事ーーーーーーーーーーーーーーーーーーーーーーーーーー",popPost)


  return {
    props: {
      blog: sanitizedData, //クリックされた記事のデータ
      categories: categories.contents, //microCMSで作成してあるすべてのカテゴリーデータ
      popPosts:popPost
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog, categories,popPosts }) {

  // const isNextCategory = categories.some((category) => category.id === blog.category.id && category.name === "Nextjs"); // カテゴリーに"next"が含まれているかどうかをチェック

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>
      <NextCP data={blog} posts={popPosts} categories={categories} />
    </>
  );
}
