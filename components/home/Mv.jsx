// import Link from "next/link";
// import styles from "../../src/styles/home/mv.module.css";
// import Image from "next/image";
// import { useEffect, useState, useRef, useContext } from "react";
// import { IsPlayingProvider } from "../../libs/context/IsPlayingContext";
// import { ChatBotCanvas } from "../ChatBotCanvas";
// import { TextToSpeech } from "../TextToSpeech";

// export const Mv = () => {
//   const [aiResponse, setAiResponse] = useState("");
//   const [showBubble, setShowBubble] = useState(false);

//   const handleAiResponse = (response) => {
//     setAiResponse(response);
//     setShowBubble(true);
//   };

//   useEffect(() => {
//     if (aiResponse) {
//       setTimeout(() => {
//         setShowBubble(false);
//       }, 300000);
//     }
//   }, [aiResponse]);

//   // タイピング
//   const [typedText, setTypedText] = useState("");
//   const [isFirstTextCompleted, setIsFirstTextCompleted] = useState(false);
//   const [textClass, setTextClass] = useState(styles.english);

//   useEffect(() => {
//     const firstText = "We will support the growth of your business online.";
//     let firstIndex = 0;

//     const intervalId = setInterval(() => {
//       setTypedText(firstText.slice(0, firstIndex + 1));
//       firstIndex++;

//       if (firstIndex === firstText.length) {
//         clearInterval(intervalId);
//         setIsFirstTextCompleted(true);
//         setTextClass(styles.japanese);
//         setTimeout(() => {
//           const targetText = "オンラインであなたのビジネスの成長をサポート";
//           let currentIndex = 0;

//           const intervalId2 = setInterval(() => {
//             setTypedText(targetText.slice(0, currentIndex + 1));
//             currentIndex++;
//           }, 100);
//         });
//       }
//     }, 100);
//   }, []);

//   return (
//     <div className={styles.mv} id="mv">
//       <div className="h-screen">
//         <IsPlayingProvider className={styles.jcc}>
//           <ChatBotCanvas aiResponse={aiResponse} showBubble={showBubble} />
//           <TextToSpeech onAiResponse={handleAiResponse} />
//           {showBubble && (
//             <div className={styles.bubble}>
//               <p className={styles.aiResponseText}>{aiResponse}</p>
//             </div>
//           )}
//         </IsPlayingProvider>
//       </div>
//     </div>
//   );
// };
