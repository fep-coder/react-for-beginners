import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ResetApp from "./ResetApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="container text-center">
                <ResetApp />
                <Counter />
                <Products />
                <ProductDetails />
            </div>
        </Provider>
    </React.StrictMode>
);
