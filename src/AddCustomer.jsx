import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddCustomer({ setCustomers }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(id, name, email);
        setCustomers((prevCustomers) => [
            ...prevCustomers,
            { id, name, email, subscribed: false },
        ]);
    }

    return (
        <div className="col-6 mx-auto text-center">
            <h1 className="mt-3">Add Customer</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id">ID</label>
                    <input
                        className="form-control"
                        id="id"
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className="form-control"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddCustomer;
