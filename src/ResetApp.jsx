import { useDispatch } from "react-redux";
import { resetAll } from "./actions";

function ResetApp() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                className="btn btn-danger"
                onClick={() => dispatch(resetAll())}
            >
                Reset App
            </button>
        </div>
    );
}

export default ResetApp;
