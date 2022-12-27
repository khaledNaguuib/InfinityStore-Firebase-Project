import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-Context";
import authContext from "../Store/Auth-Context";
import styles from "./HeaderCartButton.module.css";



// the header cart button component will be re-evaluate whenever the cart context changes
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const authCtx = useContext(authContext);


    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return +curNumber + +item.amount;
    },0);

  
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            
            {authCtx.isLoggedIn&&<span className={styles.badge}>{numberOfCartItems}</span>}
        </button>
    )
};

export default HeaderCartButton;
