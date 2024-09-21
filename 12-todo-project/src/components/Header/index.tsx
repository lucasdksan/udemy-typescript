import styles from "./index.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <h1>React + TS TODO</h1>
        </header>
    );
}

export default Header;