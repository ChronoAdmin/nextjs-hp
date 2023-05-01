import styles from "../../src/styles/home/Stack.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Stack = () => {
  const textRef = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.set(textRef.current, { opacity: 0 });
    gsap.from(textRef.current, {
      y: "-50px",
    });
    gsap.to(textRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "center center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className={styles.contact} id="contact">
        <div className={styles.title}>
          <h2>Case Study</h2>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>
        {/* <div className={styles.imgs} ref={textRef} id="imgs">
          <div className={styles.nextImg}>
            <Image
              src="/images/stack/nextjs-1024x512.webp"
              width={1024}
              height={512}
              alt="Nextjsの素材画像"
              priority
            />
          </div>
          <div className={styles.otherImg}>
            <Image
              src="/images/stack/micro.webp"
              width={1024}
              height={512}
              alt="microCMSの素材画像"
              priority
            />
          </div>
        </div> */}

        <div className={styles.case}>
          {/* firstCase */}
          <ul className={styles.firstCase}>
            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.01</h3>
                  <p>
                    ブランディングを強化し、現代的なデザインで企業イメージを鮮明にしたい。{" "}
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.02</h3>
                  <p>
                    ウェブサイトの使いやすさを向上させ、訪問者が快適に利用できるようにし、成果を上げたい。
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.03</h3>
                  <p>
                    ターゲット層に合わせたカスタマイズされた情報を提供し、お客様が繰り返し利用したくなるサイトを作りたい。
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.04</h3>
                  <p>
                    検索エンジンで上位に表示されるようになり、集客力を高めたい。
                  </p>
                </div>
              </Link>
            </li>
          </ul>
          {/* secondCase */}
          <ul className={styles.secondCase}>
            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.05</h3>
                  <p>
                    ソーシャルメディアと連携し、SNSでの拡散力をアップさせ、知名度を上げたい。
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.06</h3>
                  <p>魅力的なブログや記事で集客力を高め、売上につなげたい。</p>
                </div>
              </Link>
            </li>
          </ul>
          {/* thirdCase */}
          <ul className={styles.thirdCase}>
            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.07</h3>
                  <p>誰もがストレスなく利用できるウェブサイトを作りたい。</p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.08</h3>
                  <p>
                    お客様の意見を活用し、ウェブサイトの改善点を見つけ、継続的にクオリティを向上させたい。
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.09</h3>
                  <p>
                    海外の訪問者にもアクセスしやすい、マルチ言語対応のサイトを提供したい。
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/">
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.10</h3>
                  <p>
                    ウェブサイトの運営を効率化し、運営コストを削減し、利益率を向上させたい。
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
