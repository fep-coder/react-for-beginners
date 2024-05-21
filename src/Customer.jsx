import CustomerList from "./CustomerList";

function Customer() {
    const customers = [
        { id: 1, name: "John", email: "john@gmail.com" },
        { id: 2, name: "Jack", email: "jack@gmail.com" },
    ];

    return (
        <div className="row">
            <div className="col-8 mx-auto">
                <CustomerList customers={customers} />
            </div>
        </div>
    );
}

export default Customer;
