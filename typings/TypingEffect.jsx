// Reactから必要な関数をインポートします。
import React, { useCallback, useEffect, useState } from 'react'
// gsapとそのプラグインをインポートします。
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const TextAnimation = (props) => {
    const [height, setHeight] = useState(0);
    const [content, setContent] = useState('');

    const textRef = useCallback((node) => {
        if (node !== null) {
            const text = node.innerHTML;
            const nodeHeight = node.clientHeight;
            setContent(''); // コンテンツをクリア
            setHeight(nodeHeight); // 高さを設定
            setAnimation(text);
        }
    }, []);

    useEffect(() => {
        setContent(props.children);
    }, [props.children]);

    const setAnimation = (text) => {
        const numText = text.length;
        const selector = '#' + props.section;

        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`${selector} .animation-text`, {
            duration: numText * 0.03,
            text: {
                value: text,
            },
            ease: 'none',
            scrollTrigger: {
                trigger: selector,
                start: 'top 40%',
                end: 'bottom 40%',
            },
        });
    };

    return (
        <p 
            ref={textRef} 
            className="animation-text" 
            style={{ height: `${height}px` }} 
            dangerouslySetInnerHTML={{ __html: content }} 
        />
        
    );
}

export default TextAnimation;
