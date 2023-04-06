// pages/thanks.js
import styles from "../styles/Thanks.module.css";

const Thanks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせありがとうございます</h1>
      <p className={styles.subtitle}>
        担当者が確認出来次第折り返しのご連絡をさせていただきます
      </p>
    </div>
  );
};

export default Thanks;
