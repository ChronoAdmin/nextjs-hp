import React, { useState, useEffect, useRef, useCallback } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [factor, setFactor] = useState(0.05); // この値を変更することで緩急を調整できます（0から1の範囲）
  const targetPosition = useRef({ x: 0, y: 0 });

  const lerp = (start, end, factor) => {
    return (1 - factor) * start + factor * end;
  };

  const handleMouseMove = (event) => {
    targetPosition.current = { x: event.clientX, y: event.clientY };
  };

  const updatePosition = useCallback(() => {
    setPosition((prevPosition) => {
      const newX = lerp(prevPosition.x, targetPosition.current.x, factor);
      const newY = lerp(prevPosition.y, targetPosition.current.y, factor);
      return { x: newX, y: newY };
    });

    requestAnimationFrame(updatePosition);
  }, [factor]); // updatePositionがfactorに依存するように設定

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updatePosition]); // factorが変更されるとupdatePositionが再生成される

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const setupEventListeners = useCallback(() => {
    const clickableElements = document.querySelectorAll(
      'button, a, input[type="submit"], input[type="button"]'
    );

    clickableElements.forEach((element) => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });
  }, []); // setupEventListenersの依存関係がない場合は空の配列を渡す

  useEffect(() => {
    setupEventListeners();

    const observer = new MutationObserver(setupEventListeners);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [setupEventListeners]);


  return (
    <div
    style={{
      position: 'fixed',
      top: position.y,
      left: position.x,
      width: isHovering ? '60px' : '20px', // 大きさを変更
      height: isHovering ? '60px' : '20px', // 大きさを変更
      background: '#b50c45',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: 9999,
      transition: 'width 0.3s, height 0.3s', // 大きさの変更にアニメーションを追加
      opacity: .4,
    }}
  ></div>
  );
};

export default MouseFollower;
