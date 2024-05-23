import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: "Apples", category: "fruit" },
        { id: 2, name: "Bananas", category: "fruit" },
        { id: 3, name: "Blue shirt", category: "shirts" },
    ],
    selectedProduct: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        resetProduct: (state) => {
            state.selectedProduct = null;
        },
    },
});

export const { selectProduct, resetProduct } = productSlice.actions;
export default productSlice.reducer;
