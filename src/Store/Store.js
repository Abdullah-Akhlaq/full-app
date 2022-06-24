import { configureStore, createSlice } from "@reduxjs/toolkit";


const toggleSlice=createSlice({
    name:'toggle',
    initialState:{toggleValue:false},
    reducer:{
        toggleSlice(state){
            state.toggleValue=true
        }
    }
})
const store=configureStore(
   { reducer:{
     toggle:toggleSlice.reducer
    }}
)
export default store