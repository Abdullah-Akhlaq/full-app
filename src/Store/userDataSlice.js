import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: { users: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    userData(state, action) {
      const newItem = action.payload;
      const findItems = state.users.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!findItems) {
        state.users.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        findItems.quantity = findItems.quantity + 1;
        findItems.totalPrice = findItems.totalPrice + newItem.price;
      }
      console.log(newItem);
    },
    removeItems(state, action) {
        const id = action.payload;
        console.log(id);
        state.totalQuantity--;
      const findItems = state.users.find((item) => item.id === id);

      if (findItems.quantity === 1) {
        state.users=state.users.filter((obj) => obj.id !== id);
      } else {
        findItems.quantity--;
        findItems.totalPrice = findItems.totalPrice-findItems.price;

      }
    },
  },
});
export const userDataAction = userDataSlice.actions;
export default userDataSlice;
