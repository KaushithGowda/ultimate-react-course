import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //addItem to cart
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) item.quantity++;
      else state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //deleteItem from the cart
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearItem(state, action) {
      //clear cart array
      state.cart = [];
    },
    increaseItem(state, action) {
      //inc item
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItem(state, action) {
      //dec item
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity === 1) cartSlice.caseReducers.deleteItem(state, action);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
  },
});

export const { addItem, deleteItem, clearItem, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalPizzas = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPizzaPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getQuantity = (id) => (state) =>
  state.cart.cart.find((i) => i.pizzaId === id)?.quantity ?? 0;
