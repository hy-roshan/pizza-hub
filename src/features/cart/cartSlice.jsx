import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 123,
  //     name: "Pizzaaaa",
  //     unitPrice: 16,
  //     quantity: 1,
  //     totalPrice: 16,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearItems(state, action) {
      state.cart = [];
    },

    updateItem(state, action) {},
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItems,
} = cartSlice.actions;

export default cartSlice.reducer;

//Selector functions

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((s, a) => s + a.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((s, a) => s + a.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCartItemById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
