import axios from "axios";
import styles from "../../src/styles/Contact.module.css";
import { useRef, useState } from "react";


export const Contact = () => {
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };
  
    await fetch("api/contact", {
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
      } else {
        res.text().then((text) => console.error(`Error: ${text}`));
      }
    });
  };
  
      
  return (
    <>
      <div className={styles.contact} id="Contact">
        <div className={styles.card}>
          <div className={styles.left}>
            <p>Welcome,</p>
            <p>Contact us for more information</p>
          </div>
          <div className={styles.right}>
            <form
              onSubmit={(e) => handleSubmit(e)}
            >
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
              <div>
                <label className={styles.label} htmlFor="email">
                  e-mail
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" id="message" ref={messageRef} required />
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">送信</button>
              </div>
            </form>
            {/* {status && <p>{status}</p>} */}
          </div>
        </div>
      </div>
    </>
  );
};
