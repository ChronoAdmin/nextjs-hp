import React from "react";
import styles from "@/styles/ads/measures.module.css";
import Image from "next/image";

const Measures = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>4つの施策</h2>
          <span>We Perform Four Measures</span>
        </div>
        <div className={styles.boxs}>

          <div className={styles.box}>
            <div className={styles.subTitle}>
              <h3>A/Bテストによる広告の最適化</h3>
            </div>
            <div className={styles.img}>
              <Image src="/ads/ab.svg" width={200} height={200} />
            </div>
            <div className={styles.number}>01</div>
          </div>

          <div className={styles.box}>
          <div className={styles.subTitle}>
              <h3>ターゲット調査とニーズの探求</h3>
            </div>
            <div className={styles.img}>
            <Image src="/ads/nies.svg" width={200} height={200} />
            </div>
            <div className={styles.number}>02</div>

          </div>

          <div className={styles.box}>
          <div className={styles.subTitle}>
              <h3>配信結果を数値で可視化</h3>
              
            </div>
            <div className={styles.img}>
            <Image src="/ads/report.svg" width={200} height={200} alt="レポートのイラスト" />
            </div>
            <div className={styles.number}>04</div>

          </div>

          <div className={styles.box}>
          <div className={styles.subTitle}>
              <h3>投稿作業の代行</h3>
            </div>
            <div className={styles.img}>
            <Image src="/ads/post.svg" width={200} height={200} />
            </div>
            <div className={styles.number}>03</div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Measures;
