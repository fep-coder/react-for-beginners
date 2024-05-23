import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <h1 className="text-center mt-3">Counter {count} </h1>

            <button
                className="btn btn-primary mx-1"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <button
                className="btn btn-danger mx-1"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    );
}

export default Counter;
