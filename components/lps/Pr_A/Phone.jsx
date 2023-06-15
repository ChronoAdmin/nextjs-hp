import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/lps/pr_a/phone.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Phone = ({x,y,z}) => {
  console.log(x)
  const subRef = useRef(null);

  const [isActive, setIsActive] = useState(false);



  const handleIslandPopupClick = () => {
    setIsActive(!isActive);
  };



  
  useEffect(() => {

    gsap.fromTo(
      subRef.current,
      { y: "-200px", opacity: 0 },
      {
        y: 0,
        transform: `perspective(800px) rotateX(${x ?? 30}deg) rotateY(-20deg) rotateZ(${x ?? 30}deg)`,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, [x]);

  return (
    <>
      <div className={styles.box} ref={subRef}>
        <div className={styles.inner}>
          <video src="/lps/pr_a/fv2.mp4" autoPlay loop muted />
          <div
            className={`${styles.island_popup} ${
              isActive ? styles.active : ""
            }`}
            onClick={handleIslandPopupClick}
          >
            <div></div>
          </div>
        </div>
        <i className={`${styles.btn} ${styles.btn1}`}></i>
        <i className={`${styles.btn} ${styles.btn2}`}></i>
        <i className={`${styles.btn} ${styles.btn3}`}></i>
        <i className={styles.rightSideBtn}></i>
      </div>
    </>
  );
};

export default Phone;
