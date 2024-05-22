import { useState } from "react";
import Counter from "./Counter";

function App() {
    const [number, setNumber] = useState(0);

    return (
        <div className="container">
            {number < 5 && <Counter number={number} setNumber={setNumber} />}
        </div>
    );
}

export default App;
