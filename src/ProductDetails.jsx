import { useSelector } from "react-redux";

function ProductDetails() {
    const product = useSelector((state) => state.product.selectedProduct);

    if (!product) {
        return <h4 className="mt-3">Select a product</h4>;
    }

    return (
        <div>
            <h5>ID: {product.id}</h5>
            <h5>Name: {product.name}</h5>
            <h5>Category: {product.category}</h5>
        </div>
    );
}

export default ProductDetails;
