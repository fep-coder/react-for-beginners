import Customer from "./Customer";

function MainBody() {
    return (
        <main>
            <p>Learn react</p>
            <ul>
                <li>Components</li>
                <li>States</li>
                <li>Hooks</li>
                <li>Routing</li>
                <li>Redux</li>
            </ul>

            <div className="mb-3">
                <h2>Customers</h2>
                <Customer id={1} name="John" email="john@gmail.com" />
                <Customer id={2} name="Jane" email="jane@gmail.com" />
                <Customer id={3} name="Bob" email="bob@gmail.com" />
            </div>
        </main>
    );
}

export default MainBody;
