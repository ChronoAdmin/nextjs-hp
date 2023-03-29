import Image from "next/image";
import styles from "../../src/styles/home/Ec.module.css";

export const Ec = ({ ecData }) => {
  return (
    <>
      {/* {ecData.map((ecDatas) => (
        <div key={ecDatas.id}>{ecDatas.attributes.name}hello</div>
      ))} */}
      {/* <div>
        <Image />
        <div className={styles.name}>{ecData[0].attributes.name}</div>
        <div className={styles.name}>{ecData[0].attributes.my_media_field.url}</div>
      </div> */}
    </>
  );
};
