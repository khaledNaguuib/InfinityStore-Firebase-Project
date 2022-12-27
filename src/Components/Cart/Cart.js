import React, { useState, Fragment, useContext } from "react";
import CartContext from "../Store/Cart-Context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";

// Here we are loading the stripe script in the browser and then we are storing it in the stripePromise variable.
// This is a promise that will resolve to the stripe object.
let stripePromise;
const getStripe = () => {
  // if stripePromise is not defined then we will load the stripe script in the browser.
  // we call this function right before you redirect the user to the checkout page.
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY); // => we need to pass the publishable key here.
  }

  return stripePromise;
};

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let items = [];
  let ctxItems = cartCtx.items;

  for (const key in ctxItems) {
    items.push({
      price: ctxItems[key].stripePrice,
      quantity: +ctxItems[key].amount,
    });
  }
  console.log("cartCtxItems in Cart component", cartCtx);
  console.log("itemsss", items);

  const checkoutOptions = {
    lineItems: items,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    console.log("redirect to checkout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log(error);
  };

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // wanna check if there are items in cart or not => to show order butoon or not.
  const hasItems = cartCtx.items.length > 0;

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartRemoveHandler.bind(null, item.id)}
          onAdd={cartAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // const orderHandler = () => {
  //   setIsCheckout(true);
  // };

  // const submitOrderHandler = async (userData) => {
  //   setIsSubmitting(true);
  //   const response = await fetch(
  //     "https://react-http-products-default-rtdb.firebaseio.com/orders.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         user: userData,
  //         orderedItems: cartCtx.items,
  //       }),
  //     }
  //   );
  //   setIsSubmitting(false);
  //   setDidSubmit(true);
  //   cartCtx.clearCart();
  // };

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {/* {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Checkout
        </button>
      )} */}
      {hasItems && (
        <button className={styles.button} onClick={redirectToCheckout}>
          Checkout
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={styles.flex}>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        {/* {isCheckout && (
          <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
        )} */}
        {!isCheckout && modalActions}
      </div>
    </Fragment>
  );

  const isSubmittingModalContent = (
    <p className={styles.orderSubmitting}>Sending order data...</p>
  );
  const didSubmitModalContent = (
    <p className={styles.orderSubmited}>
      Order sent successfully. we will be in touch with as you soon as your
      shipment is ready to be shipped.{" "}
    </p>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
