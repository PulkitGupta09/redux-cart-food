import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false, notification: null };
const cartuiSlice = createSlice({
  name: "cartui",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartuiActions = cartuiSlice.actions;
export default cartuiSlice.reducer;
