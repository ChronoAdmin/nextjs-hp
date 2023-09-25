import React from "react";
import styles from "@/styles/ads/achievement.module.css";
import Image from "next/image";

const images = [
  {
    src: "/ads/achieve1.webp",
    title: "⚪︎⚪︎県⚪︎⚪︎市 飲食店様",
    subTitle: "1日予算：3000円",
  },
  {
    src: "/ads/achieve1.webp",
    title: "⚪︎⚪︎県⚪︎⚪︎市 飲食店様",
    subTitle: "1日予算：3000円",
  },
  {
    src: "/ads/achieve1.webp",
    title: "⚪︎⚪︎県⚪︎⚪︎市 飲食店様",
    subTitle: "1日予算：3000円",
  },
  {
    src: "/ads/achieve1.webp",
    title: "⚪︎⚪︎県⚪︎⚪︎市 飲食店様",
    subTitle: "1日予算：3000円",
  },
];

function GalleryItem({ src, title, subTitle, updateActiveImage, index }) {
  return (
    <div className={styles.gallery_item_wrapper}>
      <div />
      <div className={styles.gallery_item}>
        <div className={styles.gallery_item_info}>
          <h3 className={styles.gallery_info_title}>{title}</h3>
          <h4 className={styles.gallery_info_subTitle}>{subTitle}</h4>
        </div>
        <div className={styles.gallery_item_image}>
          <Image src={src} height={1080} width={1920} alt={title} />
        </div>
      </div>
      <div />
    </div>
  );
}

const Achievement = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <h2>実績紹介</h2>
          <span>Actual Introduction</span>
        </div>
        <div className={styles.text}>
          <p>
            自社用のSNSアカウントを作成したが、集客に繋げる方法がわからずに放置状態だった飲食店様。
          </p>
          <p>弊社に広告を依頼した結果、来店予約が約20%増加。</p>
        </div>

        <div className={styles.galleryWrap}>
          <div className={styles.gallery}>

            {images.map((image, index) => (
              <GalleryItem
                key={image.src}
                index={index}
                {...image}
                updateActiveImage={(index) => setActiveImage(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
