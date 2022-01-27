import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  hidden: true
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartCount: (state, action) => {
      state.count = action.payload
    },
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden
    }
  }
});

export const { increaseCartCount, toggleCartHidden } = cartSlice.actions;

export default cartSlice.reducer;