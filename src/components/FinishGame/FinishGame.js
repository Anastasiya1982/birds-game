import React from "react";
import  styles from "./FinishGame.module.scss";
import Button from "../Button/Button";
import {useSelector} from "react-redux";


const FinishGame = ({ startNewGame,  isEndGame}) => {
	const score=useSelector(state => state.birdsData.score);
	return (
		<div className={styles.finishGameContainer}>
			<h1 className={styles.title}>Поздравлям!</h1>
			<p className={styles.content}>Вы прошли викторину и набрали {score} из возможных 30
                баллов!</p>
			<Button  label={"Попробовать еще раз"} onClick={startNewGame} isEndGame={isEndGame}/>
		</div>
	);
};

export default FinishGame;
