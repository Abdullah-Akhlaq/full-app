import { createSlice } from "@reduxjs/toolkit";

const tooggleSlice=createSlice({
    name:'toggle',
    initialState:{toggle:false},
    reducers:{
        toggleAdmin(state,action){
            state.toggle=!state.toggle
        }
    }
})
export const toggleAction=tooggleSlice.actions
export default tooggleSlice