import styles from "/src/styles/Navigation.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { useRouter } from "next/router"; // 1. useRouter をインポート
export const Navigation = () => {
  const listRef = useRef(null);
  const router = useRouter(); // 2. 現在のルートを取得

  // navi
  const handleItemClick = (event) => {
    const currentItem = event.currentTarget;
    const items = Array.from(listRef.current.children);
    items.forEach((item) => item.classList.remove(styles.active));
    currentItem.classList.add(styles.active);
  };
  return (
    <div className={styles.navigation}>
      <ul ref={listRef}>
        <li
          className={`${styles.list} ${
            router.pathname === "/" ? styles.active : ""
          }`}
          onClick={handleItemClick}
        >
          <Link href="/">
            <span className={styles.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            router.pathname === "/hp" ? styles.active : ""
          }`}
          onClick={handleItemClick}
        >
          <Link href="/hp">
            <span className={styles.icon}>
              <ion-icon name="desktop-outline"></ion-icon>
            </span>
            <span className={styles.text}>HP作成</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            router.pathname === "/ec" ? styles.active : ""
          }`}
          onClick={handleItemClick}
        >
          <Link href="/ec">
            <span className={styles.icon}>
              <ion-icon name="bag-check-outline"></ion-icon>
            </span>
            <span className={styles.text}>ECサイト</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            router.pathname === "/ec" ? styles.active : ""
          }`}
          onClick={handleItemClick}
        >
          <Link href="/ec">
            <span className={styles.icon}>
              <ion-icon name="pricetags-outline"></ion-icon>
            </span>
            <span className={styles.text}>Blog構築</span>
          </Link>
        </li>
        <li
          className={`${styles.list} ${
            router.pathname === "/ec" ? styles.active : ""
          }`}
          onClick={handleItemClick}
        >
          <Link href="/ec">
            <span className={styles.icon}>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className={styles.text}>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
