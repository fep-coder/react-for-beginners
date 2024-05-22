import { useParams } from "react-router-dom";

function ProductDetails() {
    const { name, id } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
        </div>
    );
}

export default ProductDetails;
