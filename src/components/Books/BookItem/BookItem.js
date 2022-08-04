import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./BookItem.module.css";
import BookItemForm from "./BookItemForm";

const BookItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.book}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BookItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;
