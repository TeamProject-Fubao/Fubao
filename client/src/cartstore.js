import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [{ id: 0, name: "", count: 0 }],
  reducers: {
    addCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    downCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count--;
    },
    deleteGoods(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (number !== -1) {
        state.splice(number, 1);
      }
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, downCount, deleteGoods, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
