import { configureStore } from '@reduxjs/toolkit';
import { cartSlice, detailSlice, productsSlice } from './states';

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
    detail: detailSlice.reducer,
    products: productsSlice.reducer,
  },
});
