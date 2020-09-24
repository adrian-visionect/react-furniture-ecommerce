import React from 'react';
import styles from './Slider.module.css';
import LongChair from '../images/LongChair.png';
const Slider = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.LongChair}>
        <img src={LongChair} alt="long chair"></img>
      </div>
      <div className={styles.Desc}>
        <a>New Collection 2020</a>
        <h1>Chair With Style</h1>
        <a>
          FROM <span>$183.76</span>
        </a>
        <div className={styles.Button}>Shop Now</div>
      </div>
    </div>
  );
};

export default Slider;
