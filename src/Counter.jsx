import { useSelector } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.counter.count);

    return (
        <div>
            <h1 className="text-center mt-3">Counter {count} </h1>
        </div>
    );
}

export default Counter;
