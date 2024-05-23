import { useDispatch } from "react-redux";
import { resetProduct } from "./slices/productSlice";

function ResetApp() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                className="btn btn-danger"
                onClick={() => dispatch(resetProduct())}
            >
                Reset App
            </button>
        </div>
    );
}

export default ResetApp;
