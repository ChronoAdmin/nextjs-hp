import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/ec/index.module.css";
import Layout from "../../../components/Layout";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import * as wanakana from "wanakana";
import { Items } from "../../../components/ec/Items";
import Header from "../../../components/ec/Header";

export default function Home() {
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
        <title>EC page</title>
      </Head>
      <div className={styles.wrap}>
        <Header />
        <main className={styles.main}>
          <Items />
          <div>
            <h1>リニューアル中です...</h1>
            <h2>技術担当が頑張ってくれています...</h2>
          </div>
        </main>
      </div>
    </>
  );
}
// getInitialPropsを使用してnavPositionを指定
Home.getInitialProps = async () => {
  return { navPosition: "none" };
};
