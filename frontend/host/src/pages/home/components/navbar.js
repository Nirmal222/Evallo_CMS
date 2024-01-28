import React from 'react';
import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css';
import {token} from "../../../utils/constants.js"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <p className={styles.logoTitle}>
          Evallo
        </p>

        <div>
          <button className={styles.menuItem}>
            {
              token !== "" ? <Link to="/manage-content" style={{ textDecoration: "none", color: "white" }}>Manage Your Content</Link> :
                <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>Manage Your Content</Link>}
          </button>
          <button className={styles.menuItem}>
            <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>Signin</Link>
          </button>
          <button className={styles.menuItem}>
            <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>Singup</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
