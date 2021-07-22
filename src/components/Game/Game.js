import React from 'react';
import s from './Game.module.scss';
import Quastion from "../Quastion/Quastion";
import AnswerList from "../AnswerList/AnswerList";
import Description from "../Description/Description";
import Button from "../Button/Button";

const Game = ({win, section, randomId, selectBird, selectAnswer, label, action, isEndGame}) => {
    return (
        <div className={s.gameField}>
            <Quastion win={win} section={section} randomId={randomId}/>
            <div className={s.answer}>
                <AnswerList section={section} selectAnswer={selectAnswer} randomId={randomId} win={win}/>
                <Description section={section} selected={selectBird}/>
            </div>
            <Button label={label} win={win} action={action} isEndGame={isEndGame}/>

        </div>
    )
}
export default Game;
