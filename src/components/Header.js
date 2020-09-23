import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Header_left}>
          <span>E:</span> Odevdesign@gmail.com
          <a className={styles.Circle}>
            <i className="fa fa-circle"></i>
          </a>
          <span>P:</span>
          01-xxx-xxx-xxxx
        </div>

        <ul className={styles.Header_links}>
          <li>
            <i className="fa fa-heart"></i>
            <a href="#">Which List </a>
          </li>
          <li>
            <a className={styles.Circle}>
              <i className="fa fa-circle"></i>
            </a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a className={styles.Circle}>
              <i className="fa fa-circle"></i>
            </a>
          </li>
          <li>
            <a href="#"> Contact US</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
