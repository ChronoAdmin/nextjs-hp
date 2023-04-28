import Head from "next/head";
import React from "react";
import styles from "@/styles/ec/signin.module.css";
import Header from "../../../components/ec/Header";
import Link from "next/link";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className={styles.wrap}>
        <Header />
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="email">E-mail address</label>
            <input type="email" name="" id="email" placeholder="e-mail" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="pass">Password</label>
            <input type="password" name="" id="pass" placeholder="password" />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.login_button}>
              Login
            </button>
            <p>
            アカウントをお持ちでない方は
              <Link href="/ec/register">こちら</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

// getInitialPropsを使用してnavPositionを指定
signin.getInitialProps = async () => {
  return { navPosition: "none" };
};
