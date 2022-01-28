import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

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
    getTotalCartCount: (state) => {
      state.count = state.cartItems.length
    }
  }
});

export const { addCartItem, toggleCartHidden, getTotalCartCount } = cartSlice.actions;

export default cartSlice.reducer;