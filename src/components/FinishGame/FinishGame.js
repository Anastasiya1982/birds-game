import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";

import styles from "./FinishGame.module.scss";

const FinishGame = ({ startNewGame }) => {
    const score = useSelector((state) => state.birdsData.score);
    return (
        <div className={styles.finishGameContainer}>
            <h1 className={styles.title}>Поздравлям!</h1>
            <p className={styles.content}>Вы прошли викторину и набрали {score} из возможных 30 баллов!</p>
            <Button label={"Попробовать еще раз"} onClick={startNewGame} />
        </div>
    );
};

export default FinishGame;
