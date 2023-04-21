import React from "react";
import styles from "@/styles/blog/Category.module.css";
import Link from "next/link";

export const Category = ({ categories }) => {
  console.log("このデータがカテゴリーズだよーーーー：", categories);
  const imgArrayCategory = [
    "/images/blog/event_category.jpg",
    "/images/blog/blog_category.jpg",
    "/images/blog/code_category.jpg",
  ];

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <div className={styles.titleJa}>カテゴリー一覧</div>
        <div className={styles.titleEn}>Category</div>
      </div>
      <ul>
        {categories.map((categorie, index) => (
          <li key={categorie.id}>
            <Link href={`blog/categories/${categorie.id}`}>
              <div className={styles.catImg}>
                <img src={imgArrayCategory[index % imgArrayCategory.length]} alt="" />
              </div>
              <div className={styles.categoryName}>{categorie.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
