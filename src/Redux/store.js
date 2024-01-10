// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers as needed
  },
});

export default store;
