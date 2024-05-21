/* eslint-disable react/prop-types */
function CustomerList({ customers }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subscribed if else</th>
                    <th>Subscribed if</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.subscribed ? "Yes" : "No"}</td>
                        <td>{customer.subscribed && "Yes"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CustomerList;
