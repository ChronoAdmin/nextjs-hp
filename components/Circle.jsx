import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Circle = ({loading}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    if (!loading) {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: '999',
          padding: '5px',
        }}
        className="circle"
      >
        <Image src="/circle.png" width={300} height={300} alt='a' />
        <div>{Math.round(scrollPercentage)}%</div>
      </div>

      <style jsx>
        {`
          .circle img {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            
          }
          .circle div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
          }
          .circle {
            animation: rotation 12s infinite linear;
          }

          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default Circle;
