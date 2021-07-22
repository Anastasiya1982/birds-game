import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import rightAudio from './assets/audio/success.mp3';
import wrongAudio from './assets/audio/fail.mp3';
import FinishGame from "./components/FinishGame/FinishGame";
import Game from "./components/Game/Game";

function App() {
    const [section, setSection] = useState(0);
    const [score, setScore] = useState(0);
    const [randomId, setRandomId] = useState(0);
    const [win, setWin] = useState(false);
    const [mistake, setMistake] = useState(0);
    const [isEndGame, setIsEndGame] = useState(false);
    const [selectBird, setSelectBird] = useState(0);


    useEffect(() => {
        setRandomId(getRandomId())
    }, [section]);
    useEffect(() => {

    })

    function getRandomId() {
        const id = Math.floor((Math.random() * 6));
        console.log(`рандомно проигрывается аудио с id: ${id + 1}`);
        return id;
    }

    const selectAnswer = (id) => {
        let currentId = id - 1
        setSelectBird(currentId);
        checkAnswer(currentId);
    }

    const checkAnswer = (id) => {
        const rightAnswer = new Audio(rightAudio);
        const wrongAnswer = new Audio(wrongAudio);
        if (id === randomId) {
            rightAnswer.play();
            setWin(true);
            setSelectBird(id);
        } else {
            wrongAnswer.play();
            setMistake((mistake) => mistake + 1);
        }
    }

    function goToNextLevel() {
        console.log(section) //TODO: выяснить как правильно прописать условие окончания игры
        if (section === 5 && win) {
            setScore(score => score + 5 - mistake);
            endGame();

        } else {
            setSection(section => section + 1);
            setScore(score => score + 5 - mistake);
            setWin(false);
            setMistake(0);
            setSelectBird(0);
        }
    }

    function endGame() {
        setSection(-1);
        setIsEndGame(true);
        setWin(false);
    }

    const startNewGame = () => {
        setIsEndGame(false);
        setSection(0);
        setWin(0);
        setScore(0);
        setMistake(0);
    }

    let btnLabel = section === 5 ? 'Finish Game' : 'Next level';


    return (
        <div className="game">
            <div className='wrapper'>
                <Header score={score}/>
                <Navbar section={section}/>
                {!isEndGame
                    ? <Game win={win}
                            section={section}
                            randomId={randomId}
                            selectBird={selectBird}
                            selectAnswer={selectAnswer}
                            label={btnLabel}
                            action={goToNextLevel}
                            isEndGame={isEndGame}/>

                    : <FinishGame win={win}
                                  action={startNewGame}
                                  score={score}
                                  isEndGame={isEndGame}
                    />
                }
            </div>
        </div>
    );
}

export default App;
