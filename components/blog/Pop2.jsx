import React from "react";
import styles from "@/styles/blog/Pop.module.css";

export const Pop = ({blogs}) => {
  return (
    <>
      <div className={styles.pop}>
        <a href="/">
          <img src="/images/blog/blogPop.jpg" alt="" />
          <div className={styles.ps}>
            <p>Why use Next.js?</p>
          </div>
        </a>
      </div>
    </>
  );
};
