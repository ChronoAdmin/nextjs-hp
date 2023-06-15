import React, { useEffect, useRef } from "react";
import styles from "@/styles/lps/pr_a/value.module.css";
import { BsLightbulb } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import Phone from "./Phone";

const Value = () => {

  const contentList = [
    {
      title: "A/Bテストを活用した広告の最適化",
      text: "広告の効果を最大化するために、A/Bテストを積極的に活用します。異なる広告バリエーションを作成し、ターゲットオーディエンスの反応を比較します。メッセージ、画像、キャッチコピー、CTAなどの要素を変化させてテストし、最も効果の高い広告バージョンを特定します。",
      imgPath: "/lps/pr_a/abtest.svg",
    },
    {
      title: "徹底したターゲット調査と人物像の探求",
      text: "広告の効果を最大化するために、A/Bテストを積極的に活用します。異なる広告バリエーションを作成し、ターゲットオーディエンスの反応を比較します。メッセージ、画像、キャッチコピー、CTAなどの要素を変化させてテストし、最も効果の高い広告バージョンを特定します。",
      imgPath: "/lps/pr_a/abtest2.svg",
    },
    {
      title: "配信結果を分かりやすい数値で可視化",
      text: "広告の効果を最大化するために、A/Bテストを積極的に活用します。異なる広告バリエーションを作成し、ターゲットオーディエンスの反応を比較します。メッセージ、画像、キャッチコピー、CTAなどの要素を変化させてテストし、最も効果の高い広告バージョンを特定します。",
      imgPath: "/lps/pr_a/abtest3.svg",
    },
    {
      title: "面倒な投稿作業を代行",
      text: "広告の効果を最大化するために、A/Bテストを積極的に活用します。異なる広告バリエーションを作成し、ターゲットオーディエンスの反応を比較します。メッセージ、画像、キャッチコピー、CTAなどの要素を変化させてテストし、最も効果の高い広告バージョンを特定します。",
      imgPath: "/lps/pr_a/abtest4.svg",
    },
    // 以下、他のリストアイテムを追加...
  ];

  
  const mapRefs = useRef([]);
  const subRef = useRef(null);

  mapRefs.current = new Array(4)
    .fill(null)
    .map((_, i) => mapRefs.current[i] || React.createRef());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    mapRefs.current.forEach((ref, idx) => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, x: idx % 2 === 0 ? "-100%" : "100%" },
        {
          autoAlpha: 1,
          x: "0%",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
        }
      );
    });
    gsap.fromTo(
      subRef.current,
      { y: "-200px", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: subRef.current,
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>
            その悩み、
            <br />
            <span style={{ color: "rgb(255, 0, 85)" }}>Chrono</span>
            が解決致します
          </h2>
        </div>
        <div className={styles.flow}>
          <div className={styles.subtitle}>
            <h2>
              ~<span>4</span>つの施策~
            </h2>
          </div>
          <div className={styles.maps} id="maps">
            {[...Array(4)].map((_, i) => (
              <div className={styles.map} ref={mapRefs.current[i]} key={i}>
                <div className={styles.inner}>
                  <div className={styles.txt}>
                    <div className={styles.map_title}>
                      <span>{`0${i + 1}`}</span>
                      <h3>{contentList[i].title}</h3>
                    </div>
                    {/* <div className={styles.contents}>
                      <p>
                      {contentList[i].text}
                      </p>
                    </div> */}
                  </div>
                  {/* <div className={styles.img}>
                  <Image src={`${contentList[i].imgPath}`} height={300} width={200} />
                  </div> */}
                </div>
              </div>
            ))}
            <div className={styles.cta} ref={subRef}>
              <h2>
                今なら<Link href="instagram://user?username=chrono_office_pr" className={styles.insta_id}>@chrono_office_pr</Link>
                をフォローすると無料で広告を１つ作成！
              </h2>
              <div>
                <Link href="instagram://user?username=chrono_office_pr" className={styles.follow}>
                  <span>
                    <AiOutlineInstagram />
                    無料で作成
                  </span>
                </Link>
                <p>※instagramのプロフィールに遷移します</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;
