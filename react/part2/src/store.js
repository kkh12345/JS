import { configureStore, createSlice } from '@reduxjs/toolkit';

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    setCount(state) {
      console.log(state);
    },
  },
});

export let { setCount } = cartItem.actions;
export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});
