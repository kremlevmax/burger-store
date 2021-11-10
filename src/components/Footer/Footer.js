import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href='https://www.linkedin.com/in/max-kremlev/'>
        <i className={`fab fa-linkedin ${styles.icon}`}></i>
      </a>
      <a href='mailto:kremlevmax1989@gmail.com'>
        <i className={`far fa-envelope-open ${styles.icon}`}></i>
      </a>
      <a href='https://t.me/kremlevmax'>
        <i className={`fas fa-paper-plane ${styles.icon}`}></i>
      </a>
    </div>
  );
}

export default Footer;
