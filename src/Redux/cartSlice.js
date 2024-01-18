// cartSlice.js
import { createSlice, current } from "@reduxjs/toolkit";
const foodItems = [
  {
    id: 1,
    checked: true,
    title: "গাছ চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 460,
    priceInBd: "৪৬০",
    quantity: 1,
    photo:
      "/ecoeats/product/product-gach-chui.jpg",
    
  },
  {
    id: 2,
    checked: false,
    title: "গাছ চুইঝাল",
    weight: "১ কেজি",
    price: 920,
    priceInBd: "৯২০",
    quantity: 1,
    photo:
      "/ecoeats/product/product-gach-chui.jpg",
  },
  {
    id: 3,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 600,
    priceInBd: "৬০০",
    quantity: 1,
    photo:
      "/ecoeats/product/product-eto-chui.jpg",
    
  },
  {
    id: 4,
    checked: false,
    title: "এটো চুইঝাল",
    weight: "১ কেজি",
    price: 1150,
    priceInBd: "১১৫০",
    quantity: 1,
    photo:
    "/ecoeats/product/product-eto-chui.jpg",
    
  },
  {
    id: 5,
    checked: false,
    title: "মিক্সড চুইঝাল",
    weight: "৫০০ গ্রাম",
    price: 550,
    priceInBd: "৫৫০",
    quantity: 1,
    photo:
      "/ecoeats/product/product-mixed-chui.jpg",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: JSON.parse(localStorage.getItem("foods"))
    //   ? JSON.parse(localStorage.getItem("foods"))
    //   : foodItems,
    items: foodItems,
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.checked) {
        existingItem.checked = false;
      } else {
        existingItem.checked = true;
      }
      // let foodData = JSON.stringify(current(state.items));
      // localStorage.setItem("foods", foodData);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = parseInt(quantity);
      }
      // let foodData = JSON.stringify(current(state.items));
      // localStorage.setItem("foods", foodData);
    },
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
