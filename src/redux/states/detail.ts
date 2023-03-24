import { createSlice } from '@reduxjs/toolkit';
import { ProductWithId } from '@/interface';

interface StateProp {
  product?: ProductWithId;
  error: boolean;
  loading: boolean;
}

const initialState: StateProp = {
  product: {
    id: 0,
    name: '',
    color: '',
    colorId: '',
    price: 0,
    ref: '',
    src: '',
  },
  error: false,
  loading: false,
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    addedProductDetail: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addedProductDetail } = detailSlice.actions;
