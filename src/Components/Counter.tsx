import React, { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
    const [currentCount, setCurrentCount] = useState(10);
  
    const decreaseCount = () => {
      if (currentCount > 0) {
        setCurrentCount(currentCount - 1);
      } else {
        alert("Ниже не куда");
      }
    };
  
    const increaseCount = () => {
      setCurrentCount(currentCount + 1);
    };
  
    return (
      <div className={styles.container}>
        <button onClick={decreaseCount}>Убавить</button>
        <p className={styles.score}>Ваш счёт: {currentCount}</p>
        <button onClick={increaseCount}>Добавить</button>
      </div>
    );
  }
