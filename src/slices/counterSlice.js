import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../actions";

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
        builder.addCase(resetAll, (state) => {
            state.count = 0;
        });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
