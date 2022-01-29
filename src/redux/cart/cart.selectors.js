import { createSelector } from "@reduxjs/toolkit"

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, val) => acc + (val.price * val.quantity), 0)
)