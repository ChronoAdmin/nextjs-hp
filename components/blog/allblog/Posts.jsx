import React from "react";
import styles from "@/styles/blog/allblog/Posts.module.css";
import Image from "next/image";
import Link from "next/link";

export const Posts = ({ allBlogData }) => {
  console.log(allBlogData);
  return (
    <>
      <ul className={styles.postList}>
        {allBlogData.map((data) => (
          <li key={data.id}>
            <Link href={`/blog/${data.id}`}>
              <div className={styles.postImg}>
                {data.thumbnail ? (
                  <Image
                    src={data.thumbnail.url}
                    alt={data.title}
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <div className={styles.notThumbnail}>no</div>
                )}
              </div>
              <div className={styles.contents}>
                <div className={styles.spanArea}>
                  <span className={styles.date}>{data.publishedAt}</span>
                  <span className={styles.cat}>
                    {data.category && (
                      <span className={styles.category}>
                        {data.category.name}
                      </span>
                    )}
                    {data.categoryChild && (
                      <span className={styles.category}>
                        {data.categoryChild.title}
                      </span>
                    )}
                  </span>
                </div>
                <h2 className={styles.title}>{data.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
