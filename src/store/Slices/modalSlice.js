import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: "Modal",
    initialState:{
        open: false,
    },
    reducers:{
        open(state, action){
            state = !state.open
        }
    },
    
})
// console.log(initialState);

const {actions, reducer} = ModalSlice
export const {open} = actions 
export {reducer as ModalSlice} 