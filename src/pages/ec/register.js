import Head from "next/head";
import React, { useState } from "react";
import styles from "@/styles/ec/signin.module.css";
import Header from "../../../components/ec/Header";
import Link from "next/link";


export default function Register() {

    const initState = {name: "", email:"", password: "", cf_password: "",}
    const [userData, setUserData] = useState(initState)
    const {name, email, password,cf_password} = userData

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        
    }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className={styles.wrap}>
        <Header />
        <form className={styles.form} onSubmit={handleSubmit}>

          {/* 名前 */}
          <div className={styles.form_group}>
            <label htmlFor="name">name</label>
            <input type="text"  id="name"
            name="name" value={name} onChange={handleChangeInput} />
          </div>

          {/* メールアドレス */}
          <div className={styles.form_group}>
            <label htmlFor="email">E-mail address</label>
            <input type="email"  id="email"
            name="email" value={email} onChange={handleChangeInput} />
          </div>

          {/* パスワード */}
          <div className={styles.form_group}>
            <label htmlFor="pass">Password</label>
            <input type="password"  id="pass"
            name="password" value={password} onChange={handleChangeInput} />
          </div>

          {/* 確認用パスワード */}
          <div className={styles.form_group}>
            <label htmlFor="pass2">Password(確認用)</label>
            <input type="password"  id="pass2"
            name="cf_password" value={cf_password} onChange={handleChangeInput} />
          </div>

          {/* 登録ボタン */}
          <div className={styles.buttons}>
            <button type="submit" className={styles.login_button}>
              アカウント作成
            </button>
            <p>
              すでにアカウントをお持ちの方は
              <Link href="/ec/signin">こちら</Link>
            </p>
          </div>

        </form>
      </div>
    </>
  );
}

// getInitialPropsを使用してnavPositionを指定
Register.getInitialProps = async () => {
  return { navPosition: "none" };
};
