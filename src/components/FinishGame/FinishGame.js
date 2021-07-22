import React from 'react';
import  s from './FinishGame.module.scss';
import Button from "../Button/Button";


const FinishGame = ({win, action, score, isEndGame}) => {
    return (
        <div className={s.finishGameContainer}>
            <h1 className={s.title}>Поздравлям!</h1>
            <p className={s.content}>Вы прошли викторину и набрали {score} из возможных 30
                баллов!</p>
            <Button win={win} label={'Попробовать еще раз'} action={action} isEndGame={isEndGame}/>
        </div>
    );
};

export default FinishGame;
