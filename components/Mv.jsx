import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../src/styles/mv.module.css'
 
export const Mv = () => {
  return (
    <div className={styles.mv}>
        <video autoPlay loop muted src='/images/名称未設定のデザイン.mp4'>
        </video>
        <h1>Chrono Office Design Create</h1>
        <Link href='/contact' className={styles.contact}>
          Contact
        </Link>
    </div>
  )
}
