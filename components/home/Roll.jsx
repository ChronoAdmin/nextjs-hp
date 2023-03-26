import styles from "../../src/styles/home/Roll.module.css";
export const Roll = () => {
  return (
    <>
      <div className={styles.Roll}>
      <video src="/images/roll.mp4" autoPlay loop muted />
        <div className={styles.box}>
          <div>
            <span><video src="/images/roll.mp4" autoPlay loop muted /></span>
            <span><video src="/images/roll.mp4" autoPlay loop muted /></span>
            <span><video src="/images/roll.mp4" autoPlay loop muted /></span>
          </div>
        </div>
      </div>
    </>
  );
};
