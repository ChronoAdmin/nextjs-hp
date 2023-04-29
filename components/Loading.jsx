import React from 'react'
import styles from "../src/styles/Hp/Hp.module.css";


export const Loading = ({title}) => {
  return (
<div className={styles.loaderContainer}>
      <h1>{title}</h1>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>  )
}
