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
                <input
                    maxLength={5}
                    readOnly={true}
                    placeholder="Enter your name"
                />
            </div>
        </main>
    );
}

export default MainBody;
