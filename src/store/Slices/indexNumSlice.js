import { createSlice } from "@reduxjs/toolkit";

const indexnumSlice = createSlice({
    name: "indexNumber",
    initialState: "",
    reducers:{
        indexNum(state, action){
            state = action.payload
        }
    }
})

const {actions, reducer} = indexnumSlice
export const {indexNum} = actions
console.log(indexNum, "payload");
export {reducer as indexnumSlice}