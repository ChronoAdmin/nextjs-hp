import styles from "../styles/Home.module.css";
import Link from "next/link";
import { client } from "../../libs/client";
import Head from "next/head";
import { Mv } from "../../components/Mv";
import { About } from "../../components/About";
import { Service } from "../../components/Service";
import { Light } from "../../components/Light";

// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import { Flow } from "../../components/Flow";
import { Video } from "../../components/Video";

export const Gsap = () => {};

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  // console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>NextJs Chrono</title>
      </Head>
      <Mv />
      <div className="wrap">
        <div className="inner">
          <About />
          <Service />
          <Light blog={blog} />
          {/* <div className={styles.blog_list}>
            {blog.map((blog) => (
              <li key={blog.id}>, 
                <Link href={`blog/${blog.id}`} className={styles.main_li}>
                  <div>{blog.title}</div>
                </Link>
              </li>
            ))}
          </div> */}
        </div>
        <div className="bgChange">
          <div className="inner">
            <Flow />
          </div>
        </div>
        <div className="bgChange2">
            <Video />
        </div>
        <div className="bgChange3"></div>
      </div>
    </>
  );
}
