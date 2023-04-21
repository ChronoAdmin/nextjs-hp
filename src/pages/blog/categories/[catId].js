// SSG
import Head from "next/head";
import Link from "next/link";
import { client } from "../../../../libs/client";

export const getStaticProps = async (context) => {
  const id = context.params.catId;

  const data = await client.get({ endpoint: "categories", contentId: id});
  console.log("コンテキストーーーーーーーー",data);

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/blog/categories/${content.id}`);
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({blog}) {
  return (
    <>
    <div style={{height:"100vh"}}>
      {blog.name}
    </div>

    </>
  );
}
