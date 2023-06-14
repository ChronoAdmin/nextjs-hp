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
              <h3 className={styles.planTitle}>無料体験</h3>
              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  インスタアカウントのフォロー
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  ターゲット層の絞り込み
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  成果の確認
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  無料お試し
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                  <span>0</span>円
                </h3>
                <Link href="#aaa" className={styles.cta}>
                  無料お試し
                </Link>
              </div>
            </div>

            <div className={styles.plan} id="aaa">
              <h3 className={styles.planTitle}>新規契約</h3>
              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  無料お見積もり
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  広告の出稿/分析
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  成果の確認
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  お見積もり
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                  <span>50</span>円/c
                </h3>
                <Link href="#aaa" className={styles.main_cta}>
                無料見積もり
                </Link>
              </div>
            </div>

            <div className={styles.plan}>
              <h3 className={styles.planTitle}>新規契約</h3>
              <ul className={styles.features}>
                <li>
                  <BsCheck className={styles.check} />
                  無料お見積もり
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  広告の出稿/分析
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  成果の確認
                </li>
                <li>
                  <BsCheck className={styles.check} />
                  お見積もり
                </li>
              </ul>
              <div className={styles.last}>
                <h3>
                <span>50</span>円/c
                </h3>
                <Link href="#aaa" className={styles.main_cta}>
                  無料見積もり
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
