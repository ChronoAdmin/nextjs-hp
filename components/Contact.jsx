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
            <Image
              src="/images/stack/micro.webp"
              width={1920}
              height={1080}
              alt="microCMSの素材画像"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.next_container}>
            <div className={styles.img_container}>
              <div className={styles.next_img}>
                <div className={styles.txt}>
                  <p>
                    Next.jsは、Reactフレームワークをベースにしたツールです。これを使うと、サイトの表示スピードが速くなり、SEO（検索エンジン最適化）もしやすくなります。また、開発の効率も上がります。
                    <br />
                    さらに、Vercelというクラウドプラットフォームで簡単かつ高速にデプロイできます。
                    <br />
                    つまり、Next.jsを使うと、高速・SEO対策・開発効率がアップするので、HP制作におすすめです。
                  </p>
                </div>
              </div>
              <div className={styles.desc}>NextJs</div>
            </div>
          </div>
          <div className={styles.cms_container}>
            <div className={styles.img_container}>
              <div className={styles.cms_img}>
                <div className={styles.txt}>
                  <p>
                    microCMSで投稿した記事をNext.jsのブログページに組み込むことで、コンテンツ管理が簡単になります。
                  </p>
                  <p>
                    記事の更新や編集を、CMS側で行うことができるため、デザインの変更や修正に影響を与えることなく、記事の追加・変更が可能です。
                  </p>
                  <p>
                    また、microCMSのAPI機能を利用することで、サイトの表示速度が高速化され、SEOの向上も期待できます。
                  </p>
                  <p>
                    Next.jsとmicroCMSを組み合わせることで、簡単で高速なブログページが作れます。
                  </p>
                </div>
              </div>
              <div className={styles.desc}>microCMS</div>
            </div>
          </div>
          <div className={styles.compare}>
            <h2>←NextJsを使用した場合 / 従来の技術を使用した場合→</h2>
            <p>(ページの内容は一緒です)</p>
            <div className={styles.compareImgs}>
            <Image src="/images/stack/next.google.png" width={1916} height={898}/>
            <Image src="/images/stack/next.google.png" width={1916} height={898}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
