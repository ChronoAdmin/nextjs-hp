import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src="/images/logo.png" width={500} height={300} alt="ChronoOfficeのロゴ画像"/>
          </div>
          <div className={styles.right}>
            <ul>
              <li><Link href="/">about</Link></li>
              <li><Link href="/">service</Link></li>
              <li><Link href="/">blog</Link></li>
              <li><Link href="/">flow</Link></li>
              <li><Link href="/">plan</Link></li>
              <li><Link href="/">contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
