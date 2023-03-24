import { createSlice } from '@reduxjs/toolkit';
import { ProductWithId } from '@/interface';
import { formatterData } from '@/utilities';
import data from '@/data/zapato.json';

interface StateProp {
  products: ProductWithId[];
  error: boolean;
  loading: boolean;
}

const initialState: StateProp = {
  products: formatterData(data),
  error: false,
  loading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addedProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addedProduct } = productsSlice.actions;
