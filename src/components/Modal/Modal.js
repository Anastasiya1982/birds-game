import React from "react";

import styles from "./Modal.module.scss";

export default function Modal({ open, setOpen, children }) {
    const closeModal = () => {
        setOpen(false);
    };

    return (
        <div className={open ? styles.modalOpen : styles.modal} onClick={closeModal}>
            <div className={styles.modalContent}>{children}</div>
        </div>
    );
}
