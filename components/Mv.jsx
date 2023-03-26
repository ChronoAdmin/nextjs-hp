import Link from "next/link";
import styles from "../src/styles/mv.module.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export const Mv = () => {
  const listRef = useRef(null);

  // navi
  const handleItemClick = (event) => {
    const currentItem = event.currentTarget;
    const items = Array.from(listRef.current.children);
    items.forEach((item) => item.classList.remove(styles.active));
    currentItem.classList.add(styles.active);
  };

  // gsap
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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
    });
  }, []);

  // タイピング
  const [typedText, setTypedText] = useState("");
  const [isFirstTextCompleted, setIsFirstTextCompleted] = useState(false);
  const [textClass, setTextClass] = useState(styles.english);

  useEffect(() => {
    const firstText = "We will support the growth of your business online.";
    let firstIndex = 0;

    const intervalId = setInterval(() => {
      setTypedText(firstText.slice(0, firstIndex + 1));
      firstIndex++;

      if (firstIndex === firstText.length) {
        clearInterval(intervalId);
        setIsFirstTextCompleted(true);
        setTextClass(styles.japanese);
        setTimeout(() => {
          const targetText = "オンラインであなたのビジネスの成長をサポート";
          let currentIndex = 0;

          const intervalId2 = setInterval(() => {
            setTypedText(targetText.slice(0, currentIndex + 1));
            currentIndex++;
          }, 100);
        });
      }
    }, 100);
  }, []);

  return (
    <div className={styles.mv} id="mv">
      <Image
        src="/images/mv.webp"
        width={1920}
        height={1080}
        className={styles.bg}
        alt="MVの画像(1920*1080)"
        priority
      />
      <div className={styles.txtBox} ref={textRef}>
        <p className={textClass}>{typedText}</p>
      </div>
      <div className="scroll">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      <style jsx>{`
        .japanese {
          font-family: "Shippori Mincho", serif;
        }

        .english {
          font-family: Oswald, sans-serif;
        }
      `}</style>
      
    </div>
  );
};
