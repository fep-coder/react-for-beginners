import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products">
                        <Route path="" element={<Products />} />
                        <Route
                            path="details/:name?/:id?"
                            element={<ProductDetails />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
