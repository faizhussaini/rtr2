import React, {useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import AvailableMeals from "./component/Meal/AvailableMeals";
import Meals from "./component/Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  };

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals />
      <AvailableMeals />
      

      </main>
    </CartProvider>
  );
}

export default App;
