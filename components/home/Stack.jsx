import styles from "../../src/styles/home/Stack.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Stack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (index) => {
    setSelectedCase(index);
    setIsModalOpen(!isModalOpen);
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const [selectedCase, setSelectedCase] = useState(null);

  const caseDescriptions = [
    "Case 1の説明",
    "Case 2の説明",
    // ...他のケースの説明
  ];

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
              <div className={styles.caseBlock} onClick={() => handleClick(0)}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.01</h3>
                  <p>
                    ブランディングを強化し、現代的なデザインで企業イメージを鮮明にしたい。
                  </p>
                </div>
                <div className={styles.block}></div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock} onClick={() => handleClick(1)}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.02</h3>
                  <p>
                    ウェブサイトの使いやすさを向上させ、訪問者が快適に利用できるようにし、成果を上げたい。
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.03</h3>
                  <p>
                    ターゲット層に合わせたカスタマイズされた情報を提供し、お客様が繰り返し利用したくなるサイトを作りたい。
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.04</h3>
                  <p>
                    検索エンジンで上位に表示されるようになり、集客力を高めたい。
                  </p>
                </div>
              </div>
            </li>
          </ul>
          {/* secondCase */}
          <ul className={styles.secondCase}>
            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.05</h3>
                  <p>
                    ソーシャルメディアと連携し、SNSでの拡散力をアップさせ、知名度を上げたい。
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.06</h3>
                  <p>魅力的なブログや記事で集客力を高め、売上につなげたい。</p>
                </div>
              </div>
            </li>
          </ul>
          {/* thirdCase */}
          <ul className={styles.thirdCase}>
            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.07</h3>
                  <p>誰もがストレスなく利用できるウェブサイトを作りたい。</p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.08</h3>
                  <p>
                    お客様の意見を活用し、ウェブサイトの改善点を見つけ、継続的にクオリティを向上させたい。
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.09</h3>
                  <p>
                    海外の訪問者にもアクセスしやすい、マルチ言語対応のサイトを提供したい。
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.caseBlock}>
                <div className={styles.text}>
                  <h3 className={styles.caseTitle}>Case.10</h3>
                  <p>
                    ウェブサイトの運営を効率化し、運営コストを削減し、利益率を向上させたい。
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div
          onClick={() => handleClick(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            transition: "opacity 0.3s ease, visibility 0.3s ease", // opacity と visibility に対してアニメーションを適用
            zIndex:100000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleContentClick}
            style={{
              opacity: isModalOpen ? 1 : 0, // モーダルの状態に応じて opacity を設定
              transition: "all 0.3s ease",
              left: 0,
              width: "80vw",
              height: "70vh",
              margin: "0 auto",
              backgroundColor: "red",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 100000,
            }}
          >
            <h2 style={{color: "blue"}}>
              {selectedCase !== null && caseDescriptions[selectedCase]}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
