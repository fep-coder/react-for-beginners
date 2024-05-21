function Header() {
    return (
        <header>
            <h1 className="text-center">React for beginners</h1>
        </header>
    );
}

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
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <h1 className="text-center">&copy; {new Date().getFullYear()}</h1>
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <MainBody />
            <Footer />
        </div>
    );
}

export default App;
