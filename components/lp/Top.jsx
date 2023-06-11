import React, { useState, useEffect, useRef } from 'react';
import styles from "@/styles/lp/Top.module.css"
// importする代わりに、publicディレクトリからのパスを直接指定します
const musicFile = "/Jinx.mp3";  

const Top = ({ setShowMain }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHidden, setIsHidden] = useState(false);  // 非表示制御
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const handlePlay = () => {
    console.log('handlePlay is called');
    setIsPlaying(true);
    setIsHidden(true);
    setShowMain(true);
    console.log('setShowMain function was called');
  };

  const handlePause = () => {
    console.log('handlePlay is called');
    setIsPlaying(false);
    setIsHidden(true);  // "OFF"ボタンがクリックされたら非表示にする
    setShowMain(true);
    console.log('setShowMain function was called');


  };

  return (
    <div className={`${styles.wrap} ${isHidden ? styles.hide : ''}`}>  
      <div className={styles.box}>
        <h2>このサイトは音楽が流れます</h2>
        <div className={styles.check}>
        <div className={styles.yes} onClick={handlePlay}>ON</div>
          <div className={styles.no} onClick={handlePause}>OFF</div>
        </div>
      </div>
      <audio src={musicFile} ref={audioRef} loop />  
    </div>
  );
};

export default Top;
