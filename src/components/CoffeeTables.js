import React from 'react';
import styles from './CoffeeTables.module.css';

import Table from '../images/Table.png';
import GloboChair from '../images/GloboChair.png';
import Armchair from '../images/Armchair.png';
import Sofast from '../images/Sofas.png';

const CoffeeTables = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Items}>
        <div className={styles.Table}>
          <img src={Table} alt="table"></img>
          <div className={styles.Info}>
            <a>Clearence</a>
            <h1>Coffee Tables</h1>
            <a>from $19.99</a>
            <button>Shop Now</button>
          </div>
        </div>
        <div className={styles.Chair}>
          <div className={styles.Info}>
            <a>Clearence</a>
            <h1>Coffee Tables</h1>
            <a>from $19.99</a>
            <button>Shop Now</button>
            <button></button>
          </div>
          <img src={GloboChair} alt="globo"></img>
        </div>
        <div className={styles.Rest}>
          <div className={styles.ArmChair}>
            <div className={styles.Info}>
              <a>Clearence</a>
              <h1>Coffee Tables</h1>
              <a>from $19.99</a>
              <button>Shop Now</button>
            </div>
            <img src={Armchair} alt="armchair" />
          </div>
          <div className={styles.Sofas}>
            <div className={styles.Info}>
              <a>Clearence</a>
              <h1>Coffee Tables</h1>
              <a>from $19.99</a>
              <button>Shop Now</button>
            </div>
            <img src={Sofast} alt="sofas"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTables;
