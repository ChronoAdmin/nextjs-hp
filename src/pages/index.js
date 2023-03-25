import styles from "../styles/Home.module.css";
import Link from "next/link";
import { client } from "../../libs/client";
import Head from "next/head";
import { Mv } from "../../components/Mv";
import { About } from "../../components/About";
import { Service } from "../../components/Service";
import { Blog } from "../../components/Blog";
import { Flow } from "../../components/Flow";
import { Video } from "../../components/Video";
import { Stack } from "../../components/Stack";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";

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
  articles.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  console.log(articles);
  return {
    props: {
      articles: articles,
    },
  };
};

export default function Home({ articles }) {
  return (
    <>
      <Navigation />
      <Mv />
      <div className="wrap">
        <div className="inner">
          <About />
          <Service />
          <Blog articles={articles} />
        </div>
        <div className="bgChange">
          <div className="inner">
            <Flow />
          </div>
        </div>
        <Stack />
        {/* <Plan /> */}
      </div>
      <div className="com">
        <p>...Comming Soon</p>
      </div>
      <Footer />
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}
