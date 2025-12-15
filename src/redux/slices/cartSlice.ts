import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface CartItem extends Item {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  history: CartItem[][]; 
  coupon: string | null;
}

const initialState: CartState = {
  cart: [],
  history: [],
  coupon: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
   
      state.history.push(JSON.parse(JSON.stringify(state.cart)));

      const existingItem = state.cart.find(i => i.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      
      state.history.push(JSON.parse(JSON.stringify(state.cart)));

      const index = state.cart.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
    },

    deleteItemCompletely(state, action: PayloadAction<number>) {
      state.history.push(JSON.parse(JSON.stringify(state.cart)));
      state.cart = state.cart.filter(i => i.id !== action.payload);
    },

    // Optional: Directly set quantity
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      state.history.push(JSON.parse(JSON.stringify(state.cart)));
      const item = state.cart.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(0, action.payload.quantity);
        if (item.quantity === 0) {
          state.cart = state.cart.filter(i => i.id !== action.payload.id);
        }
      }
    },

    applyCoupon(state, action: PayloadAction<string>) {
      state.coupon = action.payload;
    },

    undo(state) {
      if (state.history.length > 0) {
        const previousCart = state.history.pop();
        if (previousCart) state.cart = previousCart;
      }
    },

    hydrateCart(state, action: PayloadAction<CartItem[]>) {
      state.cart = action.payload;
    },

    clearCart(state) {
      state.history.push([...state.cart]);
      state.cart = [];
    }
  },
});

export const {
  addItem,
  removeItem,
  deleteItemCompletely,
  updateQuantity,
  applyCoupon,
  undo,
  hydrateCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
