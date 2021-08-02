import React from "react";
import {useSelector} from "react-redux";

import Question from "../Question/Quastion";
import AnswerList from "../AnswerList/AnswerList";
import Description from "../Description/Description";
import Button from "../Button/Button";

import styles from "./Game.module.scss";



const Game = ({randomId, selectAnswer,  goToNextLevel}) => {
	const birdsSectionArray=useSelector(state => state.birdsData.birdsSectionArray);
	let currentSection=useSelector(state => state.birdsData.section);

	let btnLabel = currentSection === birdsSectionArray.length-1 ? "Finish Game" : "Next level";
   const win=useSelector(state => state.birdsData.isWin);

	return (
		<div>
			<Question win={win}  randomId={randomId}/>
			<div className={styles.answer}>
				<AnswerList  selectAnswer={selectAnswer} randomId={randomId} win={win}/>
				<Description  />
			</div>
			<Button label={btnLabel} win={win} onClick={goToNextLevel} />

		</div>
	);
};
export default Game;
