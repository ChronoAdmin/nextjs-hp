import styles from "../src/styles/Contact.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Contact = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //     setCount(count + 1);
  //   }, []);

  return (
    <>
      <div className={styles.contact}>
        <h1>技術スタック</h1>
        <div className={styles.imgs}>
          <div className={styles.nextImg}>
            <Image
              src="/images/stack/nextjs-1024x512.webp"
              width={1920}
              height={1080}
              alt="Nextjsの素材画像"
            />
          </div>
          <div className={styles.otherImg}>
            <Image src="/images/stack/micro.webp" width={1920} height={1080} alt="microCMSの素材画像" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.next_container}>
            <div className={styles.img_container}>
              <div className={styles.next_img}></div>
              <div className={styles.desc}>NextJs</div>
              <div className={styles.txt}>
                Lortxem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam officiis dicta, rerum fuga blanditiis!
              </div>
            </div>
          </div>
          <div className={styles.cms_container}>
            <div className={styles.img_container}>
              <div className={styles.cms_img}></div>
              <div className={styles.desc}>microCMS</div>
              <div className={styles.txt}>
                <h2>aaaaa</h2>
                Lortxem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam officiis dicta, rerum fuga blanditiis!
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gifs}>
          <div>
            <a href="/sample/" id="sample1">
              sample
            </a>
          </div>
          <div>
            <Link href="/sample/" id="sample2">
              sample2
            </Link>
          </div>
        </div>
        {/* <button onClick={() => setCount(count + 1)}>Click ME {count}</button> */}
      </div>
    </>
  );
};
