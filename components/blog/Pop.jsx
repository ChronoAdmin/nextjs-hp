import React from "react";
import styles from "@/styles/blog/Pop.module.css";

export const Pop = ({blogs}) => {
  return (
    <>
      <div className={styles.pop}>
        <a href="/">
          <img src="/images/blog/chrono&ill.png" alt="" />
          <div className={styles.ps}>
          </div>
        </a>
      </div>
    </>
  );
};
