import styles from "../src/styles/Service.module.css";

export const Service = () => {
  return (
    <>
      <section className={styles.service}>
        <div className={styles.title}>
          <h1>Service</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <img src="/images/About/About_image1.jpg" alt="" />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <img src="/images/About/About_image1.jpg" alt="" />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <span className={styles.border_line}></span>
            <div className={styles.inner}>
              <div className={styles.inputBox}>
                <img src="/images/About/About_image1.jpg" alt="" />
                <div className={styles.text}>
                  <span>Usernjjjame</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
