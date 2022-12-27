import React, { useContext } from "react";
import CartContext from "../Store/Cart-Context";
import ProductItemForm from "./ProductItemForm";
import styles from "./productItem.module.css";
const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
      stripePrice: props.stripePrice,
    });
  };

  return (
    
    <li className={styles.cardItemList}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.cardImage}
          src={props.image}
          alt="simple nike shoe"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.titleDiv}>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <div className={styles.genderDiv}>
          <h3 className={styles.genderTitle}>{props.gender}'s Shoes</h3>
        </div>
        <div className={styles.priceDiv}>
          <h3 className={styles.price}>${props.price}</h3>
        </div>
        <div className={styles.descDiv}>

        <p className={styles.desc}>{props.desc}</p>
        </div>
      </div>
      <div className={styles.cardAction}>
        {/* <div className="small">{props.stripePrice}</div> */}
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
