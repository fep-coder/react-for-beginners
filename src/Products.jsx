import { useSelector } from "react-redux";

function Products() {
    const products = useSelector((state) => state.product.products);

    return (
        <div className="text-center mt-3">
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id} className="mt-2">
                    <h3>{product.name}</h3>
                    <button className="btn btn-info">Details</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
