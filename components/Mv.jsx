import Link from "next/link";
import React from "react";
import styles from "../src/styles/mv.module.css";

export const Mv = () => {
  return (
    <div className={styles.mv}>
      <video autoPlay loop muted playsInline>
        <source src="/images/名称未設定のデザイン.mp4" type="video/mp4" />
      </video>
      <h1>Chrono Office Design Create</h1>
      <Link href="/contact" className={styles.contact}>
        Contact
      </Link>
    </div>
  );
};


export const getStaticProps = async () => {
  return {
    props: {},
  };
};