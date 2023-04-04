import styles from "../../src/styles/home/Roll.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import {AiOutlineMail} from "react-icons/ai"

gsap.registerPlugin(ScrollTrigger);

export const Roll = () => {
  // gsap
  const textRef = useRef(null);
  const corporateRef = useRef(null)

  useEffect(() => {
    // textRef
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
        trigger: "#Roll",
        start: "top 10%",
        end: "bottom center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
    gsap.set(corporateRef.current, { opacity: 0 });
    gsap.from(corporateRef.current, {
      y: "-50px",
    });
    gsap.to(corporateRef.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#Corporate",
        start: "top 10%",
        end: "bottom center",
        // toggleActions: "play reverse play reverse",
        // scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className={styles.Roll} id="Roll">
        <video
          src="/images/roll.mp4"
          autoPlay
          loop
          muted
          playsInline
          alt="roll video"
        />
        <div className={styles.box}>
          <div>
            <span>
              <video
                src="/images/roll.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="roll video"
              />
            </span>
            <span>
              <video
                src="/images/roll.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="roll video"
              />
            </span>
            <span>
              <video
                src="/images/roll.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="roll video"
              />
            </span>
          </div>
        </div>
        <h2 ref={textRef}>High Quality Site</h2>
      </div>
      <div className={styles.corporate} id="Corporate">
      <h2 ref={corporateRef}>Corporate Site</h2>
        <Image
          className={styles.back}
          src="/images/corporate.webp"
          width={1920}
          height={1080}
          alt="corporate img"
        />
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image
              src="/HatchfulExport-All/logo_transparent.png"
              width={200}
              height={200}
            />
          </div>
          <ul className={styles.navi}>
            <li>Chrono建築について</li>
            <li>施工事例</li>
            <li>SDGsへの取り組み</li>
            <li>会社概要</li>
            <div className={styles.contacts}>
              <AiOutlineMail className={styles.icon}/>
              <div className={styles.contact}>contact</div>
            </div>
          </ul>
        </div>
        <div className={styles.widthBack}>
          <p>町を作り、未来を作る</p>
        </div>
      </div>
      <div className={styles.ec}>

      </div>
    </>
  );
};
