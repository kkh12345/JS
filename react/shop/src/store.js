import { configureStore, createSlice, current } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'kim',
});

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, title: 'White and Black', count: 2 },
    { id: 2, title: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    deleteProducts(state, a) {
      let index = state.findIndex((b) => {
        return a.payload.id == b.id;
      });
      state.splice(0, 1);
    },
    addCount(state, a) {
      console.log(current(state));
      state.map((b, i) => {
        if (a.payload.id == b.id) {
          b.count += 1;
          return b;
        }
      });
    },
    addProducts(state, a) {
      let find = state.find((b) => {
        return b.id == a.payload.id;
      });

      if (!find) {
        state.push(a.payload);
      } else {
        state.map((b, i) => {
          if (a.payload.id == b.id) {
            b.count += 1;
            return b;
          }
        });
      }
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
export let { addCount, addProducts, deleteProducts } = cart.actions;
