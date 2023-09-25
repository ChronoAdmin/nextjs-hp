import React from 'react'
import styles from "@/styles/hp/service.module.css";
import Image from 'next/image';


const Service = () => {
  return (
    <>
        <div className={styles.wrap}>
            <div>
                <Image src="/images/10.png" height={1080} width={1920} alt='プラン内容の画像' />
            </div>
        </div>
    </>
  )
}

export default Service