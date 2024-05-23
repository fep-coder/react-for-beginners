import { createSlice } from "@reduxjs/toolkit";
import { resetProduct } from "./productSlice";

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase("product/resetProduct", (state) => {
        builder.addCase(resetProduct, (state) => {
            state.count = 0;
        });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
