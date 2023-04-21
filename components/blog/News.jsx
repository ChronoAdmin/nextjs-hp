import React from "react";
import styles from "@/styles/blog/News.module.css";
import Image from "next/image";
import Link from "next/link";


export const News = ({ titleJa, titleEn, blogs,more }) => {
  // console.log(blogs);

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.titleJa}>{titleJa}</div>
        <div className={styles.titleEn}>{titleEn}</div>
      </div>
      <div className={styles.blogs}>
        <ul>
          {blogs &&
            blogs.slice(0, 3).map((blog) => (
              <li key={blog.id}>
                <Link href={`blog/${blog.id}`}>
                  <div className={styles.blogImg}>
                    {blog.thumbnail ? (
                      <img src={blog.thumbnail.url} alt={blog.title} />
                    ) : (
                      <div className={styles.noImage}>No Image...</div>
                    )}
                  </div>
                  <div>
                    <span>{blog.publishedAt}</span>
                    {blog.category && (
                      <span className={styles.category}>
                        {blog.category.name}
                      </span>
                    )}
                    {blog.categoryChild && (
                      <span className={styles.category}>
                        {blog.categoryChild.name}
                      </span>
                    )}
                    <p className={styles.blogTitle}>{blog.title}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.more}>
        <a href={more}>
          <span>他の記事</span>
        </a>
      </div>
    </div>
  );
};
