import React from "react";
import styles from "@/styles/lps/pr_a/userVoice.module.css";
import Image from "next/image";
import { AiOutlineRise } from "react-icons/ai";

const UserVoice = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.voices}>
            <h2>ユーザーの声</h2>
            <div className={styles.voice}>
              <div className={styles.comment}>
                <p>
                  イベントを開催するにあたってインスタ広告を作成して頂きました。低予算にも関わらずフォローに繋がってイベントの認知度も向上できました！
                </p>
              </div>
              <div className={styles.user}>
                <div>
                  <Image src="/lps/pr_a/userVoice.svg" width={50} height={50} alt='a' />
                </div>
                <span>群馬県/イベントプランナー</span>
                <span>
                  綿引<span>様</span>
                </span>
              </div>
            </div>
            <div className={styles.voice}>
              <div className={styles.comment}>
                <p>
                  最近はSNSが強いと聞いて自社用のアカウントを作成しましたが、集客に繋げる方法がわからずに放置状態でした。そこで代行で広告をお願いしたところ予約が20%増えたので広告の効果を実感できました！
                </p>
              </div>
              <div className={styles.user}>
                <div>
                  <Image
                    src="/lps/pr_a/userVoiceUm.svg"
                    width={50}
                    height={50}
                    alt='a'
                  />
                </div>
                <span>埼玉県/飲食店経営</span>
                <span>
                  吉田<span>様</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inner}>
          <div className={styles.voices}>
            <h2>低予算でインプレッション数UP</h2>
            <div className={styles.imgs}>
              <div className={styles.adImg}>
                <Image src="/lps/pr_a/achive1.png" height={900} width={1880} alt="ユーザーの声" />
              </div>
              <div className={styles.upImg}>
                <span>
                  少ない広告費で集客数
                  <AiOutlineRise />
                </span>
                <Image src="/lps/pr_a/up.svg" height={300} width={300} alt="実績" />
              </div>
            </div>
            <div className={styles.up}>
              <h3>
                \ 広告費<span>755円</span> & 3日間でインプレッション数
                <span>16910</span>回UP! /
              </h3>
              <h3>
                \ 広告費<span>755円</span> & 3日間で<br />インプレッション数
                <span>16910</span>回UP! /
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserVoice;
