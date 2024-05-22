import { useSearchParams } from "react-router-dom";

function Products() {
    let [searchParams] = useSearchParams();
    const p = searchParams.get("p");
    const color = searchParams.get("color");

    return (
        <div>
            <h1>Products</h1>
            <p>Page: {p}</p>
            <p>color: {color}</p>
        </div>
    );
}

export default Products;
