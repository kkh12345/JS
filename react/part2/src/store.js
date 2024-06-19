import { configureStore, createSlice, current } from '@reduxjs/toolkit';
import user from './store/userslice';

let cartItem = createSlice({
  name: 'item',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    setCount(state, action) {
      let findIndex = state.findIndex((a) => {
        return action.payload == a.id;
      });
      state[findIndex].count++;
    },
    addItem(state, action) {
      let filter = state.filter((a) => {
        return action.payload.id == a.id;
      });
      filter.length > 0 ? console.log('not add') : state.push(action.payload);
      console.log(current(state));
    },
    deleteItem(state, action) {
      let index = state.findIndex((a) => action.payload == a.id);
      state.splice(index, 1);
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cartItem: cartItem.reducer,
  },
});

export let { setCount, addItem, deleteItem } = cartItem.actions;
