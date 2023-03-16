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
        <title>Chrono-Office | HP制作</title>
      </Head>
      <Mv />
      <div className="wrap">
        <div className="inner">
          <About />
          <Service />
          <Light blog={blog} />
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
