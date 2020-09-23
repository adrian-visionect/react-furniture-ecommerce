import React from 'react';
import styles from './Navbar.module.css';

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
            <a className={styles.Item}>
              <i class="fa fa-search"></i>
            </a>
            <a href="#">Search</a>
          </li>
          <li>
            <a>
              <i class="fa fa-user"></i>
            </a>
            <a href="#">Account</a>
          </li>
          <li className={styles.Cart}></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
