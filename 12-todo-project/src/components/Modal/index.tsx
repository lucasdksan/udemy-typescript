import styles from "./styles.module.css";

export interface IModal {
    children?: React.ReactNode;
}

function Modal({ children }: IModal) {
    const closeModal = (_: React.MouseEvent)=>{
        const modal = document.querySelector("#modal");
        
        modal?.classList.add("hide");
    }

    return(
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Texto Modal</h2>
                { children }
            </div>
        </div>
    );
}

export default Modal;