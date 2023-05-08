// import React from "react";
// import styles from "@/styles/blog/Category.module.css";
// import Link from "next/link";
// import Image from "next/image";

// export const Category = ({ categories }) => {
//   const imgArrayCategory = [
//     "/images/blog/event_category.jpg",
//     "/images/blog/blog_category.jpg",
//     "/images/blog/code_category.jpg",
//   ];

//   return (
//     <div className={styles.box}>
//       <div className={styles.title}>
//         <div className={styles.titleJa}>カテゴリー一覧</div>
//         <div className={styles.titleEn}>Category</div>
//       </div>
//       <ul>
//         {categories.map((categorie, index) => (
//           <li key={categorie.id}>
//             <Link href={`/blog/categories/${categorie.id}`}>
//               <div className={styles.catImg}>
//                 <Image src={imgArrayCategory[index % imgArrayCategory.length]} alt="a" width={1920} height={1080} />
//               </div>
//               <div className={styles.categoryName}>{categorie.name}</div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
