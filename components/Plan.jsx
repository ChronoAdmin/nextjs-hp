import styles from "../src/styles/Plan.module.css";
import planBg from '/public/images/Plan/plan_bg.jpg';
import Image from "next/image";


export const Plan = () => {
  return (
    <>
      <div className={styles.plan}>
        <h2 className={styles.title}>料金</h2>
        <div className={styles.price}>~50万円</div>
        <div className={styles.circles}>
          <div className={styles.circle}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
          <div className={styles.circle}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
          <div className={styles.circle}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
        </div>
      </div>
    </>
  );
};
