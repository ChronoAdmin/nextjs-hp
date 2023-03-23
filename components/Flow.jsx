import styles from "../src/styles/Flow.module.css";

export const Flow = () => {
  return (
    <>
      <div className={styles.flow}>
        <div className={styles.title}>
          <h1>Flow</h1>
          <div className={styles.c_scrolldown}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span>1</span>
            <div className={styles.text}>
              <h2>コンセプト決定</h2>
              {/* <p>HPの目的やターゲットユーザーを明確にし、設計方針を決める。</p> */}
            </div>
          </div>
          <div className={styles.card}>
            <span>2</span>
            <div className={styles.text}>
              <h2>要件定義</h2>
              {/* <p>
                クライアントの要望をヒアリングし、機能やコンテンツの具体的な仕様を決定する。
              </p> */}
            </div>
          </div>
          {/* <div className={styles.card}>
            <span>3</span>
            <div className={styles.text}>
              <h2>ワイヤーフレーム作成</h2>
              <p>
                HPのレイアウトや構成をプランニングするための設計図を作成する。
              </p>
            </div>
          </div> */}
          <div className={styles.card}>
            <span>4</span>
            <div className={styles.text}>
              <h2>デザイン制作</h2>
              {/* <p>
                色やデザイン、UI/UXを決定し、コンテンツの視覚的な表現を行う。
              </p> */}
            </div>
          </div>
          <div className={styles.card}>
            <span>5</span>
            <div className={styles.text}>
              <h2>コーディング</h2>
              {/* <p>
                デザインに基づいて、HTML、CSS、JavaScript等でHPを構築する。{" "}
              </p> */}
            </div>
          </div>
          <div className={styles.card}>
            <span>6</span>
            <div className={styles.text}>
              <h2>テストと修正</h2>
              {/* <p>
                クロスブラウザ動作確認や機能テストを行い、不具合や修正点を洗い出し修正する。{" "}
              </p> */}
            </div>
          </div>
          <div className={styles.card}>
            <span>7</span>
            <div className={styles.text}>
              <h2>デプロイと公開 </h2>
              {/* <p>
              サーバーにアップロードし、ドメインと紐付けて公開する。
              </p> */}
            </div>
          </div>
          {/* <div className={styles.card}>
            <span>8</span>
            <div className={styles.text}>
              <h2>メンテナンスとサポート</h2>
              <p>
              定期的な更新や、トラブルの解決、問い合わせ対応など、長期的にサイトをサポートする。
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
