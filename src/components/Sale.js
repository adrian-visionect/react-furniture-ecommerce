import React from 'react';
import styles from './Sale.module.css';
import whiteChair from '../images/whiteChair.png';
const Sale = () => {
  return (
    <div className={styles.Sale}>
      <div className={styles.Info}>
        <h1>30% off</h1>
        <a>Midcentury Modern Occasional Chair</a>
        <div className={styles.Button}>Shop Now</div>
      </div>
      <div className={styles.Chair}>
        <img src={whiteChair}></img>
      </div>
      <hr></hr>
      <div className={styles.Circle}></div>
      <a className={styles.Price}>only $309.99</a>
    </div>
  );
};

export default Sale;
