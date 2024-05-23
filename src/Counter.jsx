import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";
import { useState } from "react";

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [startValue, setStartValue] = useState(10);

    return (
        <div className="text-center">
            <h1 className="text-center mt-3">Counter {count} </h1>

            <input
                value={startValue}
                onChange={(e) => setStartValue(e.target.value)}
            />

            <button
                className="btn btn-primary mx-1"
                onClick={() => dispatch(increment(Number(startValue)))}
            >
                +
            </button>
            <button
                className="btn btn-danger mx-1"
                onClick={() => dispatch(decrement(Number(startValue)))}
            >
                -
            </button>
        </div>
    );
}

export default Counter;
