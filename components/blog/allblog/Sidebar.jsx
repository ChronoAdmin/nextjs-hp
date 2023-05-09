import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/blog/allblog/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";

export const Sidebar = ({ posts, categories }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.box}>
          <span></span>
          <div className={styles.title}>Popular Posts</div>
          <ul className={styles.posts}>
            {posts.map((i) => (
              <li key={i.id}>
                <a href={`/blog/${i.id}`}>
                  <div className={styles.post_img}>
                    <Image src={i.thumbnail.url} height={500} width={500} alt="人気記事のサムネイル" />
                  </div>
                  <p className={styles.post_title}>{i.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.box}>
          <span></span>

          <div className={styles.title}>Categories</div>
          <ul className={styles.category}>
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`/blog/cate/${category.id}`}>
                  <AiFillFolder className={styles.icon1} />
                  <AiFillFolderOpen className={styles.icon2} />
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className={styles.cm}>広告</div>
        <div className={styles.profile}></div> */}
      </div>
    </>
  );
};
