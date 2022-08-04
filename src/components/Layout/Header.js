import React, { Fragment } from "react";
import bookShelfImage from "../../assets/book-shelf1.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>Book Store</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img
          className={styles.img}
          src={bookShelfImage}
          alt="Book store in pune!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
