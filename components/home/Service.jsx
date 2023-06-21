import React from 'react'
import styles from "../../src/styles/home/Service.module.css";
import Image from 'next/image';


const Service = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.service_row_layout}>
          <h3>green</h3>
          <Image src="/images/About/about.webp" height={500} width={400} />
        </div>
        <div className={styles.service_column_layout}></div>

      </div>
    </>
  )
}

export default Service