import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: "Apples", category: "fruit" },
        { id: 2, name: "Bananas", category: "fruit" },
        { id: 3, name: "Blue shirt", category: "shirts" },
    ],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
