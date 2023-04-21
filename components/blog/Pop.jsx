import React from "react";
import styles from "@/styles/blog/Pop.module.css";
import Link from "next/link";
import Image from "next/image";

export const Pop = ({blogs}) => {
  return (
    <>
      <div className={styles.pop}>
        <Link href="/">
          <Image src="/images/blog/chrono&ill.png" alt="" width={1920} height={1080} />
          <div className={styles.ps}>
          </div>
        </Link>
      </div>
    </>
  );
};
