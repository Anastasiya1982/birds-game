import React from "react";
import { useSelector } from "react-redux";

import styles from "./Button.module.scss";

const Button = ({ label, onClick }) => {
    const win = useSelector((state) => state.birdsData.isWin);
    const isEndGame = useSelector((state) => state.birdsData.isGameOver);

    const btnClasses = !win && !isEndGame ? `${styles.button} ${styles.disabled}` : styles.button;

    return (
        <button className={btnClasses} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
