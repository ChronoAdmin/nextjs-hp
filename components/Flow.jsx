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
                    <h2>
                        要件定義
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis earum et illum fugit molestias incidunt vero voluptas expedita omnis dolorum.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span>2</span>
                <div className={styles.text}>
                    <h2>
                        お見積り
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis earum et illum fugit molestias incidunt vero voluptas expedita omnis dolorum.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <span>3</span>
                <div className={styles.text}>
                    <h2>
                        制作
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis earum et illum fugit molestias incidunt vero voluptas expedita omnis dolorum.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
