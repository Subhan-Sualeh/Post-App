import { configureStore } from "@reduxjs/toolkit";
import { indexnumSlice } from "./Slices/indexNumSlice";
import { postSlice } from "./Slices/postSlice";

const store = configureStore({
    reducer:{
        postSlice: postSlice,
        indexnumSlice: indexnumSlice,
    }
})

export default store