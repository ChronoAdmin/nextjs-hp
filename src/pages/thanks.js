// pages/thanks.js
import Link from "next/link";
import styles from "../styles/Thanks.module.css";

const Thanks = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせありがとうございます</h1>
      <p className={styles.subtitle}>
        担当者が確認次第、折り返しのご連絡をさせていただきます
      </p>
      <Link href="/" style={{display:"block",marginTop:"40px", color:"rgb(255, 0, 85"}}>HOMEに戻る</Link>
    </div>
  );
};

export default Thanks;
// getInitialPropsを使用してnavPositionを指定
Thanks.getInitialProps = async () => {
  return { navPosition: "none" };
};
