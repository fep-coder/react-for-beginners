import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Counter({ number, setNumber }) {
    const [count, setCount] = useState({ title: "Counter", count: 0 });

    function handleIncrement() {
        setCount((prevState) => ({ ...prevState, count: prevState.count + 1 }));
        // setNumber((prevState) => prevState + 1);
    }

    function handleDecrement() {
        setCount((prevState) => ({ ...prevState, count: prevState.count - 1 }));
        // setNumber((prevState) => prevState - 1);
    }

    // useEffect(() => {
    //     setNumber(count.count);
    // }); // runs on each render

    useEffect(() => {
        setNumber(count.count);

        document.title = "Component mounted";
        return () => {
            document.title = "Component UNMOUNTED";
        };
    }, [count, setNumber]);

    return (
        <div className="row mt-3">
            <div className="col text-center">
                <h4>
                    {count.title}{" "}
                    <span className="text-success">{count.count}</span>
                </h4>

                <p>
                    <span className="text-bg-primary p-2">
                        You clicked {number} times.
                    </span>
                </p>

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
