import React from 'react'
import styles from "@/styles/blog/TakasakiBlog.module.css";
import Link from 'next/link';

export const TakasakiBlog = ({titleJa,titleEn,blogs}) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.titleJa}>{titleJa}</div>
        <div className={styles.titleEn}>{titleEn}</div>
      </div>
      <div className={styles.blogs}>
        <ul>
          {blogs &&
            blogs.slice(0, 4).map((blog) => (
              <li key={blog.id}>
                <Link href={`blog/${blog.id}`}>
                  <div className={styles.blogImg}>
                    {blog.thumbnail ? (
                      <img src={blog.thumbnail.url} alt={blog.title} />
                    ) : (
                      <div className={styles.noImage}>No Image...</div>
                    )}
                  </div>
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
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.more}>
        <a href="/">
          <span>他の記事</span>
        </a>
      </div>
    </div>
  )
}
