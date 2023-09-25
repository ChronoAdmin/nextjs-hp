import React from "react";
import styles from "@/styles/ads/plan.module.css";

const Plan = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>料金プラン</h2>
          <span>Price Plan</span>
        </div>

        <div className={`${styles.container} ${styles.group}`}>
          <div className={styles.grid_1_5}>
            <h2 style={{color: "#5063c6"}}>お試し</h2>
            <h3>
              <span className={styles.uppercase}>Free</span>
            </h3>
            <p>まずは無料広告体験</p>
            <ul>
              <li>・当社インスタアカウントをフォローが条件です。</li>
              <li>・１投稿分の広告のみとなります。</li>
              <li>・初めて広告を出す方にオススメ。</li>
            </ul>
            <a href="/" className={styles.button}>
              申し込み
            </a>
          </div>
          <div className={styles.grid_1_5}>
            <h2 style={{color: "#ca38a6"}}>ライト</h2>
            <h3>
              <span className={styles.small}>月額</span>5万円
            </h3>
            <p>広告運用の時間がない方向け</p>
            <ul>
              <li>・掲載する広告の画像や動画は<br />ご用意していただきます。</li>
              <li>・契約期間は1ヶ月~です。</li>
              <li>・素材はあるが、広告を出す時間や<br />知識がない方にオススメ。</li>
            </ul>
            <a href="/" className={styles.button}>
            申し込み
            </a>
          </div>
          <div className={styles.grid_1_5}>
            <h2 style={{color: "#ff8c48"}}>プロ</h2>
            <h3>
            <span className={styles.small}>月額</span>10万円
            </h3>
            <p>クリエイティブから運用まで丸投げ</p>
            <ul>
              <li>・画像や動画の準備は必要ありません。</li>
              <li>・契約期間は1ヶ月~です。</li>
              <li>・素材や画像作成から日々の運用まで丸投げしたい方にオススメ。</li>
            </ul>
            <a href="/" className={styles.button}>
            申し込み
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
