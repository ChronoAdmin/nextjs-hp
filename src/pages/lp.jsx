import React, { useEffect, useState } from "react";
import styles from "@/styles/lp/index.module.css"
import Top from "../../components/lp/Top";
import Main from "../../components/lp/Main";

const Lp = () => {
  const [showMain, setShowMain] = useState(false);
  useEffect(() => {
    console.log('showMain state in Lp component', showMain);
  }, [showMain]);

  return (
    <>
      <div className={styles.wrap}>
        <Top setShowMain={setShowMain} />
        <Main showMain={showMain} />
      </div>
    </>
  );
};

export default Lp;
