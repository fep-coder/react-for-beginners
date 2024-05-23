import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "./slices/productSlice";

function Products() {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    return (
        <div className="text-center mt-3">
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id} className="mt-2">
                    <h3>{product.name}</h3>
                    <button
                        className="btn btn-info"
                        onClick={() => dispatch(selectProduct(product))}
                    >
                        Details
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;
