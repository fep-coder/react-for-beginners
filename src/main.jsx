import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="container">
                <Counter />
            </div>
        </Provider>
    </React.StrictMode>
);
