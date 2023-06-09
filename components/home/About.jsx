
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../src/styles/home/About.module.css";




export const About = () => {  

  return (
    <>
      <section className={styles.about} id="about" >
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <h2><span style={{color: "rgb(255, 0, 85)"}}>C</span>hrono<br />Office</h2>
            </div>
            <div className={styles.right} style={{padding:"2vw"}}>
              <h2>about</h2>
              <p>Chrono officeは、群馬県高崎市を中心に活動するホームページ制作会社です。<br />Next.jsとmicroCMSを用いた、素早く美しく機能的なWebサイトのを強みに活動しています。<br />他にも、お客様のビジネスの成功へのソリューションの提供、サイトを運用するうえでのアフターフォローなど。<br /><br />単なる制作会社として「Webサイトをつくるだけ」ではなく、<br />いつまでもお客様の役に立つ、「制作＋α」の価値を提供する存在に。<br /><br />私たちはお客様とともに、常に新しい価値を生み出すWebサイト制作・運用を目指しています。</p>
              <Link href=""><span>more</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
