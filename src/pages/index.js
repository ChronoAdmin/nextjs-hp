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
import { Ec } from "../../components/home/Ec";
// import { useEffect } from "react";
// import { fetchDataFromApi } from "../../libs/api";

// let categoryUrls = fetchDataFromApi("api/categories?populate=*");
// console.log("Category URLs object:", categoryUrls);

// SSG
export const getStaticProps = async () => {
  // 記事情報
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

  // let categoryUrls = await fetchDataFromApi("/api/categories?populate=*");

  // console.log(
  //   "Category URLs object:",
  //   categoryUrls.data[0].attributes.img.data.attributes.url
  // );
  // categoryUrls = categoryUrls.data
  //   .map((category) => {
  //     if (
  //       category.attributes &&
  //       category.attributes.img &&
  //       category.attributes.img.data
  //     ) {
  //       return {
  //         title: category.attributes.title,
  //         url: category.attributes.img.data.attributes.url,
  //       };
  //     }
  //     return null;
  //   })
  //   .filter((obj) => obj !== null && obj.url !== undefined);

  // 記事情報と商品情報を1つのpropsオブジェクトに含める
  return {
    props: {
      articles: articles,
      // categoryUrls,
    },
  };
};

export default function Home({ articles, categoryUrls }) {
  // useEffect(() => {
  //   getCategories()
  // },[])
  // const getCategories = () => {
  //   fetchDataFromApi("api/categories?populate=*").then(res => console.log(res))
  // }
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
      </div>
      <Roll />
      <Ec />
      <Footer />
      {/* <div className="category-urls">
        {categoryUrls.map((obj, index) => (
          <div key={index} className="category-url">
            <img
              src={process.env.NEXT_PUBLIC_DEV_URL + obj.url}
              alt={obj.title}
            />
            <h1>{obj.title}</h1>
          </div>
        ))}
      </div> */}
    </>
  );
}
