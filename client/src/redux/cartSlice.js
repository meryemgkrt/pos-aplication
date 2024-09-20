import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState : {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).cartItems || []
      : [],
    total: localStorage.getItem("cart")
      ? Math.max(0, JSON.parse(localStorage.getItem("cart")).total || 0)  // Negatif değer varsa sıfırla
      : 0,
    tax: 20,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartItems = Array.isArray(state.cartItems) ? state.cartItems : [];
    
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
    
      if (findCartItem) {
        findCartItem.quantity += 1;
        state.total += findCartItem.price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
    
     
      state.total = Math.max(0, state.total);
    
      
      localStorage.setItem("cart", JSON.stringify({
        cartItems: state.cartItems,
        total: state.total,
      }));
    },
    

    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    
      
      state.total = Math.max(0, state.total);
    
     
      localStorage.setItem("cart", JSON.stringify({
        cartItems: state.cartItems,
        total: state.total,
      }));
    },

    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (cartItem) {
        cartItem.quantity += 1;
        state.total += cartItem.price;
      }
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
        state.total -= cartItem.price;
      }
    },

    reset: (state) => {
      state.cartItems = [];
      state.total = 0;
      localStorage.removeItem('cart');
    },
  },
});

export const { addProduct, deleteCart, increase, decrease, reset } =
  cartSlice.actions;
export default cartSlice.reducer;
