import React from 'react'
import styles from '@/styles/Maintenance.module.css'
import Image from 'next/image'

const Maintenance = () => {
  return (
    <div className={styles.wrap}>
        <h1>リニューアル中です...</h1>
        <div className={styles.svg1}><Image src="/1.svg" height={500} width={500} /></div>
        <div className={styles.svg2}><Image src="/2.svg" height={500} width={500} /></div>
        <div className={styles.svg3}><Image src="/3.svg" height={500} width={500} /></div>
        <div className={styles.svg4}><Image src="/4.svg" height={500} width={500} /></div>
    </div>
  )
}

export default Maintenance