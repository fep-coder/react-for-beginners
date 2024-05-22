import { useNavigate, useSearchParams } from "react-router-dom";

function Products() {
    let [searchParams] = useSearchParams();
    const p = searchParams.get("p");
    const color = searchParams.get("color");

    const navigate = useNavigate();

    return (
        <div>
            <h1>Products</h1>
            <p>Page: {p}</p>
            <p>color: {color}</p>
            <br />
            <button
                className="btn btn-primary"
                onClick={() => navigate("/products/details/apples/4")}
            >
                Apples
            </button>
        </div>
    );
}

export default Products;
