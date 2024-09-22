import styles from "./index.module.css";

function Footer() {
    const currentDate = new Date();
    
    return (
        <footer className={styles.footer}>
            <p>
                <span>React + TS Todo</span> @ {currentDate.getUTCFullYear()}
            </p>
        </footer>
    );
}

export default Footer;