function Footer() {
    return (
        <footer>
            <h1 className="text-center">
                &copy; {new Date().getFullYear()}&nbsp;
                <span
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "5px",
                    }}
                >
                    React
                </span>
            </h1>
        </footer>
    );
}

export default Footer;
