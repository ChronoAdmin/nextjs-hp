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
    gsap.set(text2Ref.current, { opacity: 0 });
    gsap.from(text2Ref.current, {
      y: "-50px",
    });
    gsap.to(text2Ref.current, {
      y: "0px",
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#imgs",
        start: "top 30%",
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
          <h1>Tech Stack</h1>
          <div className={styles.c_scrollleft}>
            <div className={styles.c_line}></div>
          </div>
        </div>        <div className={styles.imgs} ref={textRef} id="imgs">
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
        </div>

      </div>
    </>
  );
};
