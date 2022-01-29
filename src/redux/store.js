import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";

import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import directoryReducer from "./directory/directorySlice";
import shopReducer from "./shop/shopSlice";

const middlewares = [logger];

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
  },
  middleware: middlewares,
});