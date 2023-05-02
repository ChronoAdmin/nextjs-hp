import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/Footer.module.css";
import { useRef } from "react";

export const Footer = ({ onFormSubmitSuccess }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    const resetForm = () => {
      nameRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    };
    e.preventDefault();

    let data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信成功");
        res.text().then((text) => console.log(text));
        onFormSubmitSuccess();
        resetForm(); // フォームをリセット

      } else {
        res.text().then((text) => console.error(`Error: ${text}`));
      }
    });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_video}>
          <video
            src="/images/footer_video.mp4"
            autoPlay
            loop
            muted
            playsInline={true}
            loading="lazy"
          ></video>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.logo}>
                <h3>Chrono Office</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ex totam dolore nam adipisci. Dicta nihil ipsum
                  earum maiores eaque!
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <h3>News <div className={styles.underline}><span></span></div></h3>
              <Link href="/">6/6 ILLイベント開催</Link>
              <Link href="/">nextjsでseoスコアUP</Link>
              <Link href="/">格安でHPを制作する方法</Link>
              <div className={styles.posts}>
                <Link href="/blog/allblog">記事一覧</Link>
              </div>
            </div>
            <div className={styles.col}>
              <h3>links <div className={styles.underline}><span></span></div></h3>
              <ul className={styles.links}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/hp">HP作成について</Link>
                </li>
                <li>
                  <Link href="/ec">EC構築について</Link>
                </li>
                <li>
                  <Link href="/blog">BLOG機能について</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h3>お問い合わせ <div className={styles.underline}><span></span></div></h3>
              <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <div>
                  <label htmlFor="name">氏名 or 社名</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    ref={nameRef}
                    required
                    // value={name}
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="phone">
                    電話番号
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    ref={phoneRef}
                    required
                  />
                </div>
                {/* <div>
                  <label className={styles.label} htmlFor="email">
                    e-mail
                  </label>
                  <input type="text" name="email" id="email" ref={emailRef} />
                </div> */}
                <div>
                  <label htmlFor="message">お問い合わせ内容</label>
                  <textarea
                    name="message"
                    id="message"
                    ref={messageRef}
                    required
                  />
                </div>
                <div className={styles.submitBtn}>
                  <button type="submit">送信</button>
                </div>
              </form>
            </div>
          </div>
          <hr style={{width: "90%", border: "0", borderBottom: "1px solid #ccc", margin: "20px auto"}} />
          <p className={styles.copy}>
            Chrono Office ©️ 2022 - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
