import { createSlice } from '@reduxjs/toolkit';
import { ProductWithId } from '@/interface';

interface CartProp {
  products: ProductWithId[];
  quantity: number;
  total: number;
}

const initialState: CartProp = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    onCleanCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProductToCart, onCleanCart } = cartSlice.actions;
