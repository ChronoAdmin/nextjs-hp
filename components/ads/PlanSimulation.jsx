import React, { useState } from "react";
import styles from "@/styles/ads/planSimulation.module.css";
import { AiOutlineCheckSquare } from "react-icons/ai";

const PlanSimulation = () => {
  const [plan, setPlan] = useState("hobby");
  const [testPrice, setTestPrice] = useState(0);
  const [budget, setBudget] = useState(null);
  const [duration, setDuration] = useState(null);

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleTestPriceChange = (event) => {
    setTestPrice(parseFloat(event.target.value));
  };

  const handleBudgetChange = (event) => {
    setBudget(parseFloat(event.target.value));
  };

  const handleDurationChange = (event) => {
    setDuration(parseFloat(event.target.value));
  };

  return (
    <>
      <div className={styles.wrap}>
        <h2>料金シミュレーション</h2>
        <div className={styles.simulationBoxs}>
          <div className={styles.planBox}>
            <label>
              <input
                type="radio"
                name="plan"
                value="hobby"
                checked={plan === "hobby"}
                onChange={handlePlanChange}
              />
              お試しプラン
            </label>
            <label>
              <input
                type="radio"
                name="plan"
                value="business"
                checked={plan === "business"}
                onChange={handlePlanChange}
              />
              ライトプラン
            </label>
            <label>
              <input
                type="radio"
                name="plan"
                value="enterprise"
                checked={plan === "enterprise"}
                onChange={handlePlanChange}
              />
              プロプラン
            </label>
          </div>
          {plan === "hobby" && (
            <div className={styles.container}>
              <ul>
                <li>
                  <AiOutlineCheckSquare />
                  <span>広告１つ作成</span>
                </li>
                <li>
                  <AiOutlineCheckSquare />
                  <span>ターゲット選定</span>
                </li>
                <li>
                  <AiOutlineCheckSquare />
                  <span>デザイン考案</span>
                </li>
                <li>
                  <AiOutlineCheckSquare />
                  <span>レポート作成</span>
                </li>
              </ul>
              <div className={styles.price}>
                <p>
                  初期費用<span>0万円</span> ＋ 月額<span>0万円</span>
                </p>
              </div>
              <div className={styles.desc}>
                <p>
                  インスタグラム広告素材となる画像から広告運用の設定、運用アドバイスまですべて対応させていただくプラン。社内で広告運用にかけるリソースが全くない場合にお勧めのプランです。
                </p>
              </div>
            </div>
          )}
          {plan === "business" && (
            <div className={styles.businessBox}>
              <div className={styles.container}>
                <ul>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>A/Bテスト作成</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告運用アドバイス</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告運用設定</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告テキスト作成</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告画像加工</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>月次報告レポート</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>mail相談</span>
                  </li>
                </ul>
                <div className={styles.price}>
                  <p>
                    初期費用<span>2万円</span> ＋ 月額<span>5万円</span>
                  </p>
                </div>
                <div className={styles.desc}>
                  <p>
                  インスタグラム広告素材の画像はご用意いただきますが、広告文章作成から広告運用の設定、運用アドバイスまで対応させていただくプラン。社内で広告クリエイティブとなる画像のご用意が可能な場合にお勧めのプランです。                  </p>
                </div>
              </div>
            </div>
          )}

          {plan === "enterprise" && (
            <div>
              <div className={styles.container}>
                <ul>
                <li>
                    <AiOutlineCheckSquare />
                    <span>広告画像用意</span>
                  </li>
                <li>
                    <AiOutlineCheckSquare />
                    <span>A/Bテスト作成</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告運用アドバイス</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告運用設定</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告テキスト作成</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>広告画像加工</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>月次報告レポート</span>
                  </li>
                  <li>
                    <AiOutlineCheckSquare />
                    <span>mail相談</span>
                  </li>
                </ul>
                <div className={styles.price}>
                  <p>
                    初期費用<span>2万円</span> ＋ 月額<span>10万円</span>
                  </p>
                </div>
                <div className={styles.desc}>
                  <p>
                    インスタグラム広告素材となる画像から広告運用の設定、運用アドバイスまですべて対応させていただくプラン。社内で広告運用にかけるリソースが全くない場合にお勧めのプランです。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlanSimulation;
