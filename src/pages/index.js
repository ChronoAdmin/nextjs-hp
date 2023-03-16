import styles from "../styles/Home.module.css";
import Link from "next/link";
import { client } from "../../libs/client";
import Head from "next/head";
import { Mv } from "../../components/Mv";
import { About } from "../../components/About";
import { Service } from "../../components/Service";
import { Light } from "../../components/Light";
import { Flow } from "../../components/Flow";
import { Video } from "../../components/Video";
import { Contact } from "../../components/Contact";

// SSG
export const getStaticProps = async () => {
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
  return {
    props: {
      articles: articles,
    },
  };
};

export default function Home({ articles }) {
  
  return (
    <>
      <Head>
        <title>Chrono-Office | HP制作</title>
      </Head>
      <Mv />
      <div className="wrap">
        <div className="inner">
          <About />
          <Service />
          <Light articles={articles} />
        </div>
        <div className="bgChange">
          <div className="inner">
            <Flow />
          </div>
        </div>
        <div className="bgChange2">
          <Video />
        </div>
        <Contact />
      </div>
    </>
  );
}
