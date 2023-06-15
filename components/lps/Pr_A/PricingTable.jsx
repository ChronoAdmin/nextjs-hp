import React from "react";
import styles from "@/styles/lps/pr_a/pricingTable.module.css";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";

const PricingTable = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>料金プラン</h2>
          <p>※無料体験で作成する広告はおひとり様１つまでとさせて頂きます。</p>
          <p>※広告の予算は別途かかりますのでご了承ください。</p>
        </div>
        <div className={styles.pricingTable}>
          <div className={styles.boxs}>
            <div className={styles.plan}>
              <h3 className={styles.planTitle}>Hobby</h3>
              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  ターゲット層の選定
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  広告デザイン作成
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  成果の確認
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                  <span>0</span>円
                </h3>
                <Link
                  href="instagram://user?username=chrono_office_pr"
                  className={styles.cta}
                >
                  無料お試し
                </Link>
              </div>
            </div>

            <div className={styles.plan} id="aaa">
              <h3 className={styles.planTitle}>Business</h3>
              <span className={styles.den}>Hobbyプランに加え</span>
              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  本投稿までの修正無制限
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  広告分析ツールの使用
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  ターゲット数無制限
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                  <span>50</span>円/click ※1
                </h3>
                <Link href="/contact" className={styles.main_cta}>
                  無料見積もり
                </Link>
              </div>
            </div>

            <div className={styles.plan}>
              <h3 className={styles.planTitle}>Advanced</h3>
              <span className={styles.den}>Businessプランに加え</span>

              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  誘導先のLP作成
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  LPのアナリティクス診断
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                  約<span>5</span>万円 ※2
                </h3>
                <Link href="/contact" className={styles.main_cta}>
                  無料見積もり
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tyuui}>
          <p>※1上限設定で料金プランも変更できますので、まずはご相談を</p>
          <p>※2ページ数やライティングなどによって変動します</p>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
