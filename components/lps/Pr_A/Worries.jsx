import React from "react";
import styles from "@/styles/lps/pr_a/worries.module.css";
import Image from "next/image";

const Worries = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.down}>
          <Image src="/lps/pr_a/down.svg" height={300} width={200} alt="ダウン" />
        </div>
        <div className={styles.title}>
          <h2>こんなお悩みありませんか？</h2>
        </div>
        <div className={styles.worries_list}>
          <ul>
            <li>
              <p>お店のInstagramを始めてみたけど、フォロワーが伸びない...</p>
            </li>
            <li>
              <p>広告は出せたけど成果が出ない...</p>
            </li>
            <li>
              <p>広告ツールの使い方や見方がわからない...</p>
            </li>
            <li>
              <p>自社ECサイトの売り上げが中々伸びない...</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Worries;
