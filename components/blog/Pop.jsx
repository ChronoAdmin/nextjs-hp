import React from "react";
import styles from "@/styles/blog/Pop.module.css";
import Link from "next/link";

export const Pop = ({blogs}) => {
  return (
    <>
      <div className={styles.pop}>
        <Link href="/">
          <img src="/images/blog/chrono&ill.png" alt="" />
          <div className={styles.ps}>
          </div>
        </Link>
      </div>
    </>
  );
};
