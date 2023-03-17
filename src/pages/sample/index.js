import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Home(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    }, []);
  
    return (
      <div>
        <a href="/#sample1">TOPへ戻る(通常)</a>
        <Link href="/#sample2">TOPへ戻る(Nextjs)</Link>
        <h1>Sample Page</h1>
          <div>
            <p>This is the sample page.</p>
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
            <img src='/images/About/About_image1.jpg' alt='Sample image' />
            <video src='/images/-117.mp4' autoPlay loop muted />
          </div>
      </div>
    );
  };