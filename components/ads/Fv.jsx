import styles from "@/styles/ads/Fv.module.css";
import Image from "next/image";

const Fv = () => {
  return (
    <>
      {/* wrap = 全体の箱 */}
      <div className={styles.wrap}>
        {/* logo_text = logoとtextの箱 */}
        <div className={styles.logo_text}>
          <div className={styles.insta}>
            <div className={styles.logo}>
              <Image src="/ads/instagram.svg" height={300} width={300} />
            </div>
            <div className={styles.text}>Instagram</div>
          </div>

          <div className={styles.facebook}>
            <div className={styles.logo}>
            <Image src="/ads/facebook.svg" height={300} width={300} />
            </div>
            <div className={styles.text}>Facebook</div>
          </div>

          <h1 className={styles.fv_h1}>Advertisement</h1>
        </div>
      </div>
    </>
  );
};

export default Fv;
