import React from "react";
import styles from "@/styles/ContactForm.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.text}>
                <h3>無料お見積もり</h3>
            </div>
          <div className={styles.container}>
            <form className={styles.form}>
              <div className={styles.descr}>Contact us</div>
              <div className={styles.input}>
                <input required="" autoComplete="off" type="text" />
                <label htmlFor="name">Name</label>
              </div>

              <div className={styles.input}>
                <input
                  required=""
                  autoComplete="off"
                  name="email"
                  type="text"
                />
                <label htmlFor="email">E-mail</label>
              </div>

              <div className={styles.input}>
                <textarea
                  required=""
                  cols="30"
                  rows="1"
                  id="message"
                  placeholder="簡単なお問い合わせ内容"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button className={styles.button}>お問い合わせ</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
