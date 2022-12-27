import React, { useState, useEffect, useContext } from "react";
import styles from "./AddToCartBtn.module.css";
import CartContext from "../Store/Cart-Context";

const AddToCartBtn = React.forwardRef((props, ref) => {
  const cartCtx = useContext(CartContext);
  const [isHighlight, setIsHighlight] = useState(false);
  const { items } = cartCtx;

  const handleSubmit = () => {
    setIsHighlight(true);
  };
  useEffect(() => {
    if (!isHighlight) {
      return;
    }
    const timer = setTimeout(() => {
      setIsHighlight(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isHighlight]);

  return (
    <div className={styles.ButtonContainer} key={props.id}>
      <button
        aria-label="Add to cart button"
        className={`${styles["cart-button"]} ${
          !items.length ? "" : isHighlight ? styles.clicked : ""
        }`}
        onClick={handleSubmit}
      >
        <span className={styles["add-to-cart"]}>Add to cart</span>
        <i className={styles["fa-shopping-cart"]}>
          <i className="fa-solid fa-cart-arrow-down"></i>
        </i>
        <span className={styles.added}>Added</span>

        <i className={styles["fas fa-box"]}></i>
      </button>
    </div>
  );
});

export default AddToCartBtn;
