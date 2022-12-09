import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload) 
            console.log(state);   
        },
        remove(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        }
    }
})

const {actions, reducer} = postSlice;
// console.log(reducer);
export const {add, remove} = actions;
export {reducer as postSlice}
