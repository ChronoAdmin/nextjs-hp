import React from 'react'
import styles from "@/styles/lps/pr_a/plan.module.css";
import Image from 'next/image';
import Link from 'next/link';


const Plan = () => {
  return (
    <>
        <div className={styles.wrap}>
            <div className={styles.inner}>
                <h2>登録後の流れ / Flow</h2>
                <div className={styles.boxs}>
                    <h3>for 無料体験</h3>
                    <div className={styles.contents}>
                        <div className={styles.arrow}></div>
                        <div className={styles.box}>
                            <Image src="/lps/pr_a/step1.svg" height={200} width={250} alt='a' />
                            <h4>インスタアカウントのフォロー</h4>
                        </div>
                        <div className={styles.box}>
                            <Image src="/lps/pr_a/step2.svg" height={200} width={250} alt='a' />
                            <h4>ターゲット層の絞り込み</h4>
                        </div>
                        <div className={styles.box}>
                        <Image src="/lps/pr_a/step3.svg" height={200} width={250} alt='a' />
                            <h4>成果の確認</h4>
                        </div>
                    </div>
                    <Link href="instagram://user?username=chrono_office_pr" className={styles.cta}>無料お試し</Link>
                </div>
                <div className={styles.boxs}>
                    <h3>for 新規契約</h3>
                    <div className={styles.contents}>
                        <div className={styles.arrow}></div>
                        <div className={styles.box}>
                            <Image src="/lps/pr_a/main_step1.svg" height={200} width={250} alt='見積もり' />
                            <h4>無料お見積もり</h4>
                        </div>
                        <div className={styles.box}>
                            <Image src="/lps/pr_a/main_step2.svg" height={200} width={250} alt='分析' />
                            <h4>広告の出稿/分析</h4>
                        </div>
                        <div className={styles.box}>
                        <Image src="/lps/pr_a/main_step3.svg" height={200} width={250} alt='成果' />
                            <h4>成果の確認</h4>
                        </div>
                    </div>
                    <Link href="/contact" className={styles.main_cta}>お見積もり</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Plan