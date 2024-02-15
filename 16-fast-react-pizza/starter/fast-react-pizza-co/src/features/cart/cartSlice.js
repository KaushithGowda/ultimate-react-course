import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
    {
      pizzaId: 12,
      name: "Spinach",
      quantity: 2,
      unitPrice: 20,
      totalPrice: 20,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //addItem to cart
      state.cart.push(action.payload);
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
      state.cart.totalPrice =
        state.cart.item.quantity * state.cart.item.unitPrice;
    },
    decreaseItem(state, action) {
      //dec item
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      state.cart.totalPrice =
        state.cart.item.quantity * state.cart.item.unitPrice;
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
