import { useState } from "react";
import CustomerList from "./CustomerList";
import AddCustomer from "./AddCustomer";

function Customer() {
    const [customers, setCustomers] = useState([
        { id: 1, name: "John", email: "john@gmail.com" },
        { id: 2, name: "Jack", email: "jack@gmail.com" },
    ]);

    return (
        <div className="row">
            <div className="col-8 mx-auto">
                <AddCustomer setCustomers={setCustomers} />
                <CustomerList customers={customers} />
            </div>
        </div>
    );
}

export default Customer;
