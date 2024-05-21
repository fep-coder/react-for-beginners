import { useState } from "react";

function Counter() {
    const [count, setCount] = useState({ title: "Counter", count: 10 });

    function handleIncrement() {
        setCount((prevState) => ({ ...prevState, count: prevState.count + 1 }));
    }

    function handleDecrement() {
        setCount((prevState) => ({ ...prevState, count: prevState.count - 1 }));
    }

    return (
        <div className="row mt-3">
            <div className="col text-center">
                <h4>
                    {count.title}{" "}
                    <span className="text-success">{count.count}</span>
                </h4>

                <button
                    onClick={handleIncrement}
                    className="btn btn-success mx-1"
                >
                    +1
                </button>
                <button
                    onClick={handleDecrement}
                    className="btn btn-danger mx-1"
                >
                    -1
                </button>
            </div>
        </div>
    );
}

export default Counter;
