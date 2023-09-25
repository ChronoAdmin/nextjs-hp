// import Head from "next/head";
// import { useState, useEffect, useRef } from "react";
// import Header from "../../../components/ec/Header";

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [hidden, setHidden] = useState(false);
//   const prevScrollPos = useRef(0);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setHidden(
//         prevScrollPos.current > currentScrollPos || currentScrollPos <= 0
//       );
//       prevScrollPos.current = currentScrollPos;
//     };

//     // ページ読み込み時にヘッダーを表示
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>EC page</title>
//       </Head>
//       <div className={styles.wrap}>
//         <Header />
//         <main className={styles.main}>
//           <div>
//             <h1>リニューアル中です...</h1>
//             <h2>技術担当が頑張ってくれています...</h2>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
// // getInitialPropsを使用してnavPositionを指定
// Home.getInitialProps = async () => {
//   return { navPosition: "none" };
// };

import React from "react";
import styles from "@/styles/ads/index.module.css";
import Fv from "../../../components/ads/Fv";
import About from "../../../components/ads/About";
import Measures from "../../../components/ads/Measures";
import Achievement from "../../../components/ads/Achievement";
import Flow from "../../../components/ads/Flow";
import Plan from "../../../components/ads/Plan";
import PlanSimulation from "../../../components/ads/PlanSimulation";
import Contact from "../../../components/Contact";

const Ads = () => {
  return (
    <>
      <Fv />
      <div className={styles.main}>
        <div className={styles.container}>
          <About />
          <Measures />
          <Achievement />
        </div>
        <Plan />
        <PlanSimulation />
        <Contact />
      </div>
    </>
  );
};

export default Ads;
