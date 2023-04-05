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
import { Contact } from "../../components/home/Contact";
import styles from "../styles/Contact.module.css";
import { useRef } from "react";

// import { useEffect } from "react";
// import { fetchDataFromApi } from "../../libs/api";

// let categoryUrls = fetchDataFromApi("api/categories?populate=*");
// console.log("Category URLs object:", categoryUrls);

// SSG
export const getStaticProps = async () => {
  // 記事情報A
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
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };
  
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信成功");
        res.text().then((text) => console.log(text));
      } else {
        res.text().then((text) => console.error(`Error: ${text}`));
      }
    });
  };
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
      <div className={styles.contact} id="Contact">
        <div className={styles.card}>
          <div className={styles.left}>
            <p>Welcome,</p>
            <p>Contact us for more information.</p>
          </div>
          <div className={styles.right}>
            <form
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label htmlFor="name">氏名 or 社名</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={nameRef}
                  required
                  // value={name}
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="phone">
                  電話番号
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  ref={phoneRef}  
                  required                
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="email">
                  e-mail
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" id="message" ref={messageRef} required />
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">送信</button>
              </div>
            </form>
            {/* {status && <p>{status}</p>} */}
          </div>
        </div>
      </div>
      {/* <Contact /> */}
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
