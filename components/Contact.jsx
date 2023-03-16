import styles from "../src/styles/Contact.module.css"
import React, { useEffect, useState } from 'react';



export const Contact = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
      }, []);

  return (
    <>
        <div className={styles.contact}>
            <form className={styles.form} >
                <h1>aaa</h1>
            </form>
            <button onClick={() => setCount(count + 1)}>Click ME {count}</button>
        </div>
    </>
  )
}
