import React from 'react'
import styles from "@/styles/blog/TakasakiBlog.module.css";
import Link from 'next/link';
import Image from 'next/image';

export const TakasakiBlog = ({titleJa,titleEn,blogs,more}) => {
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
                      <Image src={blog.thumbnail.url} alt={blog.title} width={1920} height={1080} />
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
        <Link href={more}>
          <span>他の記事</span>
        </Link>
      </div>
    </div>
  )
}
