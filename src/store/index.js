import { configureStore } from "@reduxjs/toolkit";
import { ModalSlice } from "./Slices/modalSlice";
import { postSlice } from "./Slices/postSlice";

const store = configureStore({
    reducer:{
        postSlice: postSlice,
        ModalSlice: ModalSlice,
    }
})

export default store