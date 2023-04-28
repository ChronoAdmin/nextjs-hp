import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/ec/Header.module.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";


export default function Header() {


  const [products, setProducts] = useState([]);
  const [hidden, setHidden] = useState(false);
  const prevScrollPos = useRef(0);
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHidden(
        prevScrollPos.current > currentScrollPos || currentScrollPos <= 0
      );
      prevScrollPos.current = currentScrollPos;
    };

    // ページ読み込み時にヘッダーを表示
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <Head>
        <title>Stayful</title>
      </Head>
      <div className={styles.wrap}>
        <header className={`${styles.header} ${hidden ? "" : styles.hidden}`}>
          <h2 className={styles.logo}>
            <Link href="/">
              <Image
                src="/HatchfulExport-All/logo_transparent.png"
                alt="Stayful Logo"
                width={500}
                height={500}
              />
            </Link>
          </h2>
          <div className={styles.inner}>
            <nav className={styles.nav}>
              <ul className={styles.navlist}>
                <li>
                  <Link href="/">ホーム</Link>
                </li>
                <li>
                  <Link href="/hp">HP制作</Link>
                </li>
                <li>
                  <Link href="/ec">EC構築</Link>
                </li>
                <li>
                  <Link href="/blog">ブログ</Link>
                </li>
                <li>
                  <Link href="/contact">お問い合わせ</Link>
                </li>
              </ul>
              <div className={styles.member}>
                <Link href="/ec/signin" className={styles.login}>
                  <div className={styles.login_icon}>
                    <AiOutlineUser />
                  </div>
                  <p>ログイン</p>
                </Link>
                <Link href="/" className={styles.cart}>
                  <div className={styles.cart_icon}>
                    <AiOutlineShoppingCart />
                  </div>
                  <p>カート</p>
                </Link>
              </div>
            </nav>
            <div className={styles.searchForm}>
              <input
                type="text"
                className={styles.input}
                placeholder="検索したいキーワードを入力してください"
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </div>
          </div>
        </header>
        <main className={styles.main}>
        </main>
      </div>
    </>
  );
}
// getInitialPropsを使用してnavPositionを指定
Header.getInitialProps = async () => {
  return { navPosition: "none" };
};
