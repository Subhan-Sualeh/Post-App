import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            state = state.filter((item)=> item.id !== action.payload)
        },
        update(){

        }
    }
})

const {actions, reducer} = postSlice;
// console.log(actions, "action" );
export const {add, remove} = actions;
// console.log(addInput, "sliceinput");
export {reducer as postSlice}
