import { configureStore } from "@reduxjs/toolkit";
import tooggleSlice from "./Toggle";
import userDataSlice from "./userDataSlice";

const store=configureStore({ 
    reducer:{
     toggle:tooggleSlice.reducer,
     userData:userDataSlice.reducer
    }}
)
export default store
