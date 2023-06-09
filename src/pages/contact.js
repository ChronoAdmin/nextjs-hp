import React, { useEffect, useRef } from "react";
import styles from "@/styles/contact/index.module.css";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function Contact() {
  const emailRef = useRef(null);
  const router = useRouter();

  const handleFormSubmitSuccess = () => {
    router.push("/thanks");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: emailRef.current.value,
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
        handleFormSubmitSuccess();
      } else {
        res.text().then((text) => console.error(`Error: ${text}`));
      }
    });
  };



  const bg_img_ref = useRef(null);
  const front_img_ref = useRef(null);
  const nav_ref = useRef(null);
  const h2_ref = useRef(null);
  const h3_ref = useRef(null);
  const bg_ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bg_img_ref.current,
      { width: 0 },
      { width: "100%", duration: 2, ease: "power3.out", delay: 1 }
    );
    gsap.fromTo(
      front_img_ref.current,
      { width: 0 },
      { width: "300px", duration: 2.2, ease: "power4.out", delay: 1.2 }
    );
    gsap.fromTo(
      nav_ref.current,
      { y: "50px", opacity: 0 },
      { y: 0, duration: 2, ease: "power4.out", delay: 2, opacity: 1 }
    );
    gsap.fromTo(
      h2_ref.current,
      { y: "50px", opacity: 0 },
      { y: 0, duration: 2, ease: "power4.out", delay: 2.3, opacity: 1 }
    );
    gsap.fromTo(
      h3_ref.current,
      { y: "50px", opacity: 0 },
      { y: 0, duration: 2, ease: "power4.out", delay: 3, opacity: 1 }
    );
    gsap.fromTo(
      bg_ref.current,
      { width: "100%" },
      { width: "0%", duration: 2, ease: "power3.out", delay: 1 }
    );
  },[]);

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapeer} ${styles.hero_image_wrapper}`}>
          <div className={styles.bg_img} ref={bg_img_ref}>
            <Image src="/hero.jpg" width={1000} height={800} />
          </div>
          <div className={styles.front_img} ref={front_img_ref}>
            <Image src="/hero.jpg" width={500} height={500} />
          </div>
        </div>
        <div className={`${styles.wrapeer} ${styles.content_wrapper}`}>
          <div className={styles.bg} ref={bg_ref}></div>
          <nav ref={nav_ref}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              <Link href="/">@chrono</Link>
            </p>
          </nav>
          <header className={styles.header}>
            <div className={styles.h2} ref={h2_ref}>
              <h2>subscribe</h2>
            </div>
            <div className={styles.h3} ref={h3_ref}>
              <h3>to get access</h3>
            </div>
            <div className={styles.form_wrapper}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  ref={emailRef}
                  placeholder="your email"
                />
                <button type="submit">subscribe</button>
              </form>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores aut voluptatem nostrum, expedita rem quia sed delectus
                in at doloribus?
              </p>
            </div>
          </header>
          <footer className={styles.footer}>
            <p>
              Welcome to the <span>club</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
