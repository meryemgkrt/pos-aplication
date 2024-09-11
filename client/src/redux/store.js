import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

// Store'u oluşturun ve sadece bir kez export edin
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
