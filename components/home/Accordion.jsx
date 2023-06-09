// import React, { useEffect, useRef, useState } from "react";
// import styles from "@/styles/home/Accordion.module.css";
// import { gsap } from "gsap";

// export const Accordion = () => {
//     const [activeAccordion, setActiveAccordion] = useState(1); // 初期値を1に設定
//     const handleAccordionClick = (id) => {
//       setActiveAccordion(id);
//     };

//     const bg_img_ref = useRef(null);
//   const front_img_ref = useRef(null);
//   const nav_ref = useRef(null);
//   const h2_ref = useRef(null);
//   const h3_ref = useRef(null);
//   const bg_ref = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       bg_img_ref.current,
//       { width: 0 },
//       { width: "100%", duration: 2, ease: "power3.out", delay: 1 }
//     );
//     gsap.fromTo(
//       front_img_ref.current,
//       { width: 0 },
//       { width: "300px", duration: 2.2, ease: "power4.out", delay: 1.2 }
//     );
//     gsap.fromTo(
//       nav_ref.current,
//       { y: "50px", opacity: 0 },
//       { y: 0, duration: 2, ease: "power4.out", delay: 2, opacity: 1 }
//     );
//     gsap.fromTo(
//       h2_ref.current,
//       { y: "50px", opacity: 0 },
//       { y: 0, duration: 2, ease: "power4.out", delay: 2.3, opacity: 1 }
//     );
//     gsap.fromTo(
//       h3_ref.current,
//       { y: "50px", opacity: 0 },
//       { y: 0, duration: 2, ease: "power4.out", delay: 3, opacity: 1 }
//     );
//     gsap.fromTo(
//       bg_ref.current,
//       { width: "100%" },
//       { width: "0%", duration: 2, ease: "power3.out", delay: 1 }
//     );
//   });

//   return (
//     <>
//       <div className={styles.wrap}>
//         <div className={styles.section}>
//           <h1 className={styles.title}>
//             Accordion<span className={styles.stroke}>with Image</span>
//           </h1>

//           <div className={styles.content}>
//             <div className={styles.accordion}>
//               <ul className={styles.accordion_list}>
//                 <li
//                   className={`${styles.accordion_item} ${
//                     activeAccordion === 1 ? styles.active : ""
//                   }`}
//                   data-id="1"
//                   onClick={() => handleAccordionClick(1)}
//                 >
//                   <h3 className={styles.accordion_header}>
//                     <span className={styles.accordion_bl}>
//                       <span className={styles.accordion_bl_line}></span>
//                       <span className={styles.accordion_bl_line}></span>
//                     </span>
//                     <span className={styles.accordion_title}>HomePage</span>
//                   </h3>
//                   <div
//                     className={styles.accordion_body}
//                     style={{
//                       display: activeAccordion === 1 ? "block" : "none",
//                     }}
//                   >
//                     <p className={styles.accordion_desc}>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       At expedita dicta quo, accusamus inventore ipsum placeat
//                       ducimus. Quod, numquam harum?
//                     </p>
//                   </div>
//                 </li>

//                 <li
//                   className={`${styles.accordion_item} ${
//                     activeAccordion === 2 ? styles.active : ""
//                   }`}
//                   data-id="2"
//                   onClick={() => handleAccordionClick(2)}
//                 >
//                   <h3 className={styles.accordion_header}>
//                     <span className={styles.accordion_bl}>
//                       <span className={styles.accordion_bl_line}></span>
//                       <span className={styles.accordion_bl_line}></span>
//                     </span>
//                     <span className={styles.accordion_title}>SEO</span>
//                   </h3>
//                   <div
//                     className={styles.accordion_body}
//                     style={{
//                       display: activeAccordion === 2 ? "block" : "none",
//                     }}
//                   >
//                     <p className={styles.accordion_desc}>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       At expedita dicta quo, accusamus inventore ipsum placeat
//                       ducimus. Quod, numquam harum?
//                     </p>
//                   </div>
//                 </li>

//                 <li
//                   className={`${styles.accordion_item} ${
//                     activeAccordion === 3 ? styles.active : ""
//                   }`}
//                   data-id="3"
//                   onClick={() => handleAccordionClick(3)}
//                 >
//                   <h3 className={styles.accordion_header}>
//                     <span className={styles.accordion_bl}>
//                       <span className={styles.accordion_bl_line}></span>
//                       <span className={styles.accordion_bl_line}></span>
//                     </span>
//                     <span className={styles.accordion_title}>Blog</span>
//                   </h3>
//                   <div
//                     className={styles.accordion_body}
//                     style={{
//                       display: activeAccordion === 3 ? "block" : "none",
//                     }}
//                   >
//                     <p className={styles.accordion_desc}>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       At expedita dicta quo, accusamus inventore ipsum placeat
//                       ducimus. Quod, numquam harum?
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className={styles.accordion_img}>
//             <img
//               src="/images/blog.jpg"
//               alt="1"
//               className={`${styles.accord_img} ${
//                 activeAccordion === 1 ? styles.active : ""
//               }`}
//             />
//             <img
//               src="/images/blog.jpg"
//               alt="2"
//               className={`${styles.accord_img} ${
//                 activeAccordion === 2 ? styles.active : ""
//               }`}
//             />
//             <img
//               src="/hero.jpg"
//               alt="3"
//               className={`${styles.accord_img} ${
//                 activeAccordion === 3 ? styles.active : ""
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
