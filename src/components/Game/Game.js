import React from "react";
import styles from "./Game.module.scss";
import Question from "../Question/Quastion";
import AnswerList from "../AnswerList/AnswerList";
import Description from "../Description/Description";
import Button from "../Button/Button";

const Game = ({win, section, randomId, selectBird, selectAnswer, label, goToNextLevel, isEndGame}) => {

	return (
		<div>
			<Question win={win} section={section} randomId={randomId}/>
			<div className={styles.answer}>
				<AnswerList section={section} selectBird={selectBird} selectAnswer={selectAnswer} randomId={randomId} win={win}/>
				<Description section={section} selected={selectBird}/>
			</div>
			<Button label={label} win={win} onClick={goToNextLevel} isEndGame={isEndGame}/>

		</div>
	);
};
export default Game;
