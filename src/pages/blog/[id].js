// SSG
import Head from "next/head";
import Link from "next/link";
import { client } from "../../../libs/client";
import styles from "../../styles/BlogContents.module.css";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  console.log(context);

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <>
    <Head>
      <title>{blog.title}</title>
      <meta name="description" content={blog.description} />
    </Head>
      <main className={styles.main}>
        <Link href="/" className={styles.back}>
          Topへ戻る
        </Link>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publisheadAt}>{blog.publisheadAt}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
          className={styles.post}
        ></div>
      </main>
    </>
  );
}
