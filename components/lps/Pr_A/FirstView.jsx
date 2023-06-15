import React from "react";
import styles from "@/styles/lps/pr_a/firstView.module.css";
import Image from "next/image";
import Phone from "./Phone";
import Link from "next/link";

const FirstView = () => {
  return (
    <div className={styles.wrap}>
            <div className={styles.logo}>
                <Image src="/HatchfulExport-All/logo_transparent.png" width={500} height={600} alt="ロゴ" />
            </div>
      <div className={styles.contents}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.title}>
              <h1>
                INSTAGRAMで<br />集客や売り上げUPをさせませんか？
              </h1>
            </div>
            <div className={styles.cta}>
              <Link href="/contact">お見積もり</Link>
              <Link href="instagram://user?username=chrono_office_pr">無料で広告を作成</Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Phone />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
