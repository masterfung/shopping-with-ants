import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, decrementItemQuantityFromCart, incrementItemQuantityFromCart } from "./cart.utils";

const initialState = {
  cartItems: [],
  hidden: true,
  count: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden
    },
    addCartItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    },
    decrementCartItemQuantity: (state, action) => {
      state.cartItems = decrementItemQuantityFromCart(state.cartItems, action.payload)
    },
    incrementCartItemQuantity: (state, action) => {
      state.cartItems = incrementItemQuantityFromCart(state.cartItems, action.payload)
    },
    getTotalCartCount: (state) => {
      state.count = state.cartItems.length
    }
  }
});

export const { 
  addCartItem, 
  toggleCartHidden, 
  getTotalCartCount, 
  removeCartItem , 
  decrementCartItemQuantity,
  incrementCartItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;