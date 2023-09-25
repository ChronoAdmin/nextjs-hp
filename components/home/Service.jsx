import React, { useState } from "react";
import styles from "../../src/styles/home/Service.module.css";
import Image from "next/image";

const images = [
  {
    src: "/images/Service/7.mp4",
    title: "HP作成",
    subTitle: "Chrono Create HomePage",
  },
  {
    src: "/images/Service/8.mp4",
    title: "Instagram広告代行",
    subTitle: "Chrono Advertising agency",
  },
  {
    src: "/images/Service/9.mp4",
    title: "MEO対策",
    subTitle: "Chrono MEO measures",
  },
  {
    src: "/images/Service/10.mp4",
    title: "Event企画",
    subTitle: "Chrono event planning",
  },

]

function GalleryItem({src,title,subTitle,updateActiveImage,index}) {
  return (
    <div className={styles.gallery_item_wrapper}>
      <div />
      <div className={styles.gallery_item}>
        <div className={styles.gallery_item_info}>
          <h3 className={styles.gallery_info_title}>{title}</h3>
          <h4 className={styles.gallery_info_subTitle}>{subTitle}</h4>
        </div>
        <div className={styles.gallery_item_image}>
          <video src={src} loop muted autoPlay></video>
        </div>
      </div>
      <div />
    </div>
  )
}


const Service = () => {

  

  const [activeImage, setActiveImage] = useState(1)

  return (
    <>
      <div className={styles.wrap}>

        <div className={styles.gallery}>

          <div className={styles.gallery_counter}>
            <span>Service</span>
            <h2>業務内容</h2>
          </div>

          {images.map((image, index) => (
            <GalleryItem 
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={index=>setActiveImage(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
