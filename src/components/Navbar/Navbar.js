import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";

function Navbar() {
  const history = useHistory();

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        iBurger
        <span className={styles.burgerPic}>
          <i className='fas fa-hamburger'></i>
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={() => history.push("/login")} label='Sign Up' />
      </div>
    </div>
  );
}

export default Navbar;
