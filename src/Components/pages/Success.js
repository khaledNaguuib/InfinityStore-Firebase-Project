import React from "react";
import { useEffect, useContext } from "react";
import CartContext from "../Store/Cart-Context";
import SuccessIcon from "../UI/SuccessIcon";
import styles from "./success.module.css";
function Success() {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  console.log("Cart items after success", cartItems);
  // clear the cart
  useEffect(() => {
    cartCtx.clearCart();
  }, []);
  return (
    <>
      <div className={styles.successContainer}>
        <SuccessIcon />
        <div className={styles.successContent}>
          <h1>Payment Successful</h1>
          <h2>Thank you for purchasing at InfinityStore</h2>
        </div>
      </div>
    </>
  );
}

export default Success;
