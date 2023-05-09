import React from "react";
import styles from "@/styles/blog/posts/NextCP.module.css";
import Image from "next/image";
import { Sidebar } from "../../../components/blog/allblog/Sidebar";

export const NextCP = ({ data,posts,categories }) => {
//   console.log("data---------------------", data.title);
//   console.log(data);
  return (
    <>
      <div className={styles.nextPage}>
        <h1 className={styles.pageTitle}>stack blog</h1>
        <div className={styles.main}>
          <div className={styles.contents}>
            <div className={styles.imgBox}>
              <div className={styles.blogImg}>
                {data.thumbnail ? (
                  <Image
                    src={data.thumbnail.url}
                    alt={data.title}
                    width={980}
                    height={540}
                  />
                ) : (
                  <Image src="/images/mv2.webp" height={300} width={1000} alt="仮サムネ" />
                )}
              </div>
              <div className={styles.title}>{data.title}</div>
            </div>
            {/* <div className={styles.index}>
              <p className={styles.indexTitle}>index</p>
              <p dangerouslySetInnerHTML={{
                __html: `${data.index}`,
              }}></p>
            </div> */}
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: `${data.body}`,
              }}
            ></div>
          </div>
          <div className={styles.side}>
          <Sidebar posts={posts} categories={categories}/>
          </div>
        </div>
      </div>
    </>
  );
};
