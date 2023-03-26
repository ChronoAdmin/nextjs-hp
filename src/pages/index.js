import { client } from "../../libs/client";
import { Mv } from "../../components/home/Mv";
import { About } from "../../components/home/About";
import { Service } from "../../components/home/Service";
import { Blog } from "../../components/Blog";
import { Flow } from "../../components/home/Flow";
import { Stack } from "../../components/home/Stack";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import { Roll } from "../../components/home/Roll";

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
          <div className="inner">
            <Flow />
          </div>
        <Stack />
        {/* <Plan /> */}
      </div>
      {/* <div className="com">
        <p>...Comming Soon</p>
      </div> */}
      <Roll />
      <Footer />
    </>
  );
}
