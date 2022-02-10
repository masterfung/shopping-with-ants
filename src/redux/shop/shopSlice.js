import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: null,
  loading: true
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections: (state, action) => {
      state.collections = action.payload
    }
  },
});

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;