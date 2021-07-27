import React from "react";
// import {useSelector} from "react-redux";

import styles from "./Game.module.scss";
import Question from "../Question/Quastion";
import AnswerList from "../AnswerList/AnswerList";
import Description from "../Description/Description";
import Button from "../Button/Button";
import {useSelector} from "react-redux";


const Game = ({ section, randomId, selectBird, selectAnswer, label, goToNextLevel, isEndGame}) => {


   const win=useSelector(state => state.birdsData.isWin);
	return (
		<div>
			<Question win={win} section={section} randomId={randomId}/>
			<div className={styles.answer}>
				<AnswerList section={section} selectBird={selectBird} selectAnswer={selectAnswer} randomId={randomId} win={win}/>
				<Description section={section} selectBird={selectBird}/>
			</div>
			<Button label={label} win={win} onClick={goToNextLevel} isEndGame={isEndGame}/>

		</div>
	);
};
export default Game;
