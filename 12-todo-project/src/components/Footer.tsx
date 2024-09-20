function Footer() {
    const currentDate = new Date();
    
    return (
        <footer>
            <p>
                <span>React + TS Todo</span> @ {currentDate.getUTCFullYear()}
            </p>
        </footer>
    );
}

export default Footer;