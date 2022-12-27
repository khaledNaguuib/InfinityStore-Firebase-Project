import { useReducer, useEffect } from "react";
import CartContext from "./Cart-Context";

const getLocalStorageItems = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
};
const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  CLEAR: "clear",
};
let defaultCurrentState = {
  items: getLocalStorageItems(),
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === ACTIONS.ADD) {
    // const updatedProductsArray = state.items.concat(action.item);
    const updatedTotalAmount =
      +state.totalAmount + +(action.item.price * action.item.amount);

    // to see if the item is already in the cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // this will work if we have an item already in the cart
    const existingItem = state.items[existingItemIndex];

    // now we wanna update the existing item and items
    let updatedItems;

    // now we are going to checl if we have an existing item , so if yes => we will update the existing item
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount + +action.item.amount,
      };
      updatedItems = [...state.items]; // we need to copy the items array first , so we dont mutate the original state
      updatedItems[existingItemIndex] = updatedItem; // now we can update the existing item
    }
    // so else => we will add a new item to the cart for the first time
    else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === ACTIONS.REMOVE) {
    // if we have an item with amount 2x => we will remove 1x ,
    // if we have an item with amount 1x => we will remove the item completely.

    // step 1-) find the item in the cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    // Calculate the new amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    // if we have an item with amount 1x => we will remove the item completely.
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id); // only action.Id because we pass only the id not the whole item
    } else {
      // if its bigger than 1x => we will remove 1x.

      // now we update the existing Item.
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      // then we update all the items.
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === ACTIONS.CLEAR) {
    return defaultCurrentState ={
      items: [],
      totalAmount: 0,
    };
  }

  return defaultCurrentState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCurrentState
  );

  /*  EXPLAINING WHAT IS HAPPENING HERE::

  - so basically i wanna check if item is already part of the cart ,
  - so if we already have an item in the cart  => then i will update the existing item
  - if not => Add a new item to the cart
  - ofc we wanna manage this as state , so we need to use the useState/useReducer hook
    so any component affected by the context will be re-evaluated whenever the context changes

  */
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ACTIONS.ADD, item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: ACTIONS.REMOVE, id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: ACTIONS.CLEAR });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.items));
  }, [cartState.items]);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
