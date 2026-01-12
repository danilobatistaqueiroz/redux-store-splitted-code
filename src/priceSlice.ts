import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'BRL',
  value: 0,
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    }
  },
  selectors: {
    getCurrency: (state) => state.currency,
    getValue: (state) => state.value,
    getPrice: (state) => state.currency + " " + state.value,
  }
});


export const { setCurrency, setValue } = priceSlice.actions;

export const { getCurrency, getValue, getPrice } = priceSlice.selectors;

export default priceSlice.reducer;