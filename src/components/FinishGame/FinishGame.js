import React from 'react';
import './FinishGame.scss';
import Button from "../Button/Button";


const FinishGame = ({win, action, score, isEndGame}) => {
    return (
        <div className='finishGame-container'>
            <h1 className='finishGame-container__title'>Поздравлям!</h1>
            <p className='finishGame-container__content'>Вы прошли викторину и набрали {score} из возможных 30
                баллов!</p>
            <Button win={win} label={'Попробовать еще раз'} action={action} isEndGame={isEndGame}/>
        </div>
    );
};

export default FinishGame;
