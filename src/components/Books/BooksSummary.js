import React from "react";
import classes from "./BooksSummary.module.css";

const BooksSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Wide range of books for You</h2>
      <p>
        Choose your favorite book from our broad selection of available books
        and enjoy a adventure of new world.
      </p>
      <p>We sell and buy used books too!</p>
    </section>
  );
};
export default BooksSummary;
