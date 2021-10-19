import React from "react";
import { useSelector } from "react-redux";

import Question from "../Question/Question";
import AnswerList from "../AnswerList/AnswerList";
import Description from "../Description/Description";
import Button from "../Button/Button";

import styles from "./Game.module.scss";

const Game = ({ randomId, selectAnswer, goToNextLevel }) => {
    const birdsSectionArray = useSelector((state) => state.birdsData.birdsSectionArray);
    let currentSection = useSelector((state) => state.birdsData.section);

    let btnLabel = currentSection === birdsSectionArray.length - 1 ? "Finish Game" : "Next level";
    const isWin = useSelector((state) => state.birdsData.isWin);

    return (
        <div>
            <Question win={isWin} randomId={randomId} />
            <div className={styles.answer}>
                <AnswerList selectAnswer={selectAnswer} randomId={randomId} isPlayerWin={isWin} />
                <Description />
            </div>
            <Button label={btnLabel} win={isWin} onClick={goToNextLevel} />
        </div>
    );
};
export default Game;
