import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../src/styles/About.module.css";
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'


export const About = () => {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <section className={styles.about} id="about">
        <div className={styles.title}>
            <h1>About</h1>
            <div className={styles.c_scrolldown}>
                <div className={styles.c_line}></div>
            </div>
        </div>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.imgBx}>
                <img src="/images/About/About_image1.jpg" alt="アバウトの説明画像" srcset="" />
              </div>
              <div className={styles.contentBx}>
                <div className={styles.content}>
                  <h2>Responsive Card</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint, in temporibus non similique facilis quis ullam fuga
                    iusto voluptates tempore!
                  </p>
                  <Link href="/" className={styles.content_A}>
                    ReadMore
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};
