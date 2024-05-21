// eslint-disable-next-line react/prop-types
function Customer({ id, name, email }) {
    return (
        <div className="row">
            <div className="col-2">
                <img className="img-fluid" src="" />
                Image placeholder
            </div>
            <div className="col-7">
                Id: {id} <br />
                Name: {name} <br />
                E-mail: {email} <br />
            </div>
        </div>
    );
}

export default Customer;
