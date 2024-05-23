import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // actions
    },
});

export default counterSlice.reducer;
