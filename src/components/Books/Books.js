import React, { Fragment } from "react";
import AvailableBooks from "./AvailableBooks";
import BooksSummary from "./BooksSummary";

const Books = () => {
  return (
    <Fragment>
      <BooksSummary />
      <AvailableBooks />
    </Fragment>
  );
};

export default Books;
