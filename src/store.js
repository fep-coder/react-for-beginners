import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        product: productSlice,
    },
});
