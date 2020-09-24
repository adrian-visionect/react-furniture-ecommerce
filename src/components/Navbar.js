import React from 'react';
import styles from './Navbar.module.css';

import logo from '../images/logo.png';
import Account from '../images/Account.png';
import Search from '../images/Search.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.Logo}>
          <a>Dev Furniture Mart</a>
        </div>

        <ul className={styles.Menu}>
          <li>
            <a className={styles.Active} href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>

        <ul className={styles.Items}>
          <li>
            <img src={Search} alt="search"></img>
          </li>
          <li>
            <img src={Account} alt="account"></img>
          </li>
          <li>
            <img src={logo} alt="logo"></img>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
