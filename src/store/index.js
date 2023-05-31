import { configureStore } from "@reduxjs/toolkit";

import cartuiReducer from "./cartui-slice";
import cartproductReducer from "./cartproduct-slice";
const store = configureStore({
  reducer: {
    cartui: cartuiReducer,
    cartproduct: cartproductReducer,
  },
});

export default store;
