import React, { useState } from "react";
import AvailableBooks from "./components/Books/AvailableBooks";
import BooksSummary from "./components/Books/BooksSummary";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (props) => {
    setCartIsShown(true);
  };
  const hideCartHandler = (props) => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <BooksSummary />
        <AvailableBooks />
      </main>
    </CartProvider>
  );
}

export default App;
