import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductItemForm.module.css";
import Input from "../UI/Input";
import AddToCartBtn from "../UI/AddToCartBtn";
import authContext from "../Store/Auth-Context";

const MealItemForm = (props) => {
  const navigate = useNavigate();
  const amountInputRef = useRef();
  const authCtx = useContext(authContext);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    // if the user is not logged in, alert him to log in then redirect him to the login page
    if (!authCtx.isLoggedIn) {
      alert("You must be logged in to add items to your cart!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      return;
    } else {
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        setAmountIsValid(false);
        return;
      }
      props.onAddToCart(enteredAmount);
      setAmountIsValid(true);
    }
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.formControl}>
        <AddToCartBtn />

        {/* Explain what is happening here:: 
            - Cuz <Input/> is a custom component so ref will not work, at least not out of the box.
            - to make refs work in custom components => go to the component and add the forwardRef() function.
        */}
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount" + props.id, // so every input has a unique id
            type: "number",
            min: "0",
            max: "7",
            step: "1",
            defaultValue: "0",
          }}
        />
        {!amountIsValid && (
          <p className={styles.validationMSG}>
            Please enter a valid amount (1-5).
          </p>
        )}
      </div>
    </form>
  );
};

export default MealItemForm;
