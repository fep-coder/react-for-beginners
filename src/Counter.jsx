import { useState } from "react";

function Counter() {
    function testState() {
        console.log("Setting the state");
        return 10;
    }

    const [count, setCount] = useState(() => testState());

    function handleDecrement() {
        setCount((prevState) => prevState - 1);
        setCount((prevState) => prevState - 1);
    }

    return (
        <div className="row mt-3">
            <div className="col text-center">
                <h4>
                    Counter <span className="text-success">{count}</span>
                </h4>

                <button
                    onClick={() => setCount(count + 1)}
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
