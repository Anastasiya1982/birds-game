import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./App.module.scss";

import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import rightAudio from "./assets/audio/success.mp3";
import wrongAudio from "./assets/audio/fail.mp3";
import FinishGame from "./components/FinishGame/FinishGame";
import Game from "./components/Game/Game";
import {setMistake, resetMistakes, setScore, resetScore, setIsWin, getBirdsData} from "./store/birdGameSlice";



function App() {
    const [section, setSection] = useState(0);
    const [randomId, setRandomId] = useState(0);
    const [isEndGame, setIsEndGame] = useState(false);
    const [selectBird, setSelectBird] = useState(null);
    const win = useSelector(state => state.birdsData.isWin);
    const isLoading =useSelector(state => state.birdsData.isLoading);
    const dispatch = useDispatch();

    // if (!isInit) {
    // 	return <h1>loading..</h1>
	// }

    useEffect(() => {
		dispatch(getBirdsData());
    }, [dispatch]);

    const data=useSelector(state => state.birdsData.birdsData);
    console.log("data from state: ", data);
    console.log(isLoading);

    useEffect(() => {
        setRandomId(getRandomId());
    }, [section]);

    function getRandomId() {
        const id = Math.floor((Math.random() * 6));
        // eslint-disable-next-line no-console
        console.log(`рандомно проигрывается аудио с id: ${id + 1}`);
        return id;
    }

    const setNewMistake = () => dispatch(setMistake());
    const resetAllMistakes = () => dispatch(resetMistakes());
    const getScore = () => dispatch(setScore());
    const resetAllScore = () => dispatch(resetScore());
    const setIsUserWin = ({value}) => dispatch(setIsWin({value}));

    const selectAnswer = (id) => {
        let currentId = id - 1;
        setSelectBird(currentId);
        checkAnswer(currentId);
    };

    const checkAnswer = (id) => {
        const rightAnswer = new Audio(rightAudio);
        const wrongAnswer = new Audio(wrongAudio);
        if (id === randomId) {
            rightAnswer.play();
            setIsUserWin({value: true});
            setSelectBird(id);
            getScore();
        } else {
            wrongAnswer.play();
            setNewMistake();
        }
    };

    function goToNextLevel() {
        if (section === 5 && win) {
            endGame();
        } else {
            setSection(section => section + 1);
            resetAllMistakes();
            setIsUserWin({value: false});
            setSelectBird(null);
        }
    }

    function endGame() {
        setSection(-1);
        setIsEndGame(true);
        setIsUserWin({value: false});
        resetAllMistakes();
    }

    const startNewGame = () => {
        setIsEndGame(false);
        setSection(0);
        setIsUserWin({value: false});
        resetAllScore();
        resetAllMistakes();
        setSelectBird(null);
    };

    let btnLabel = section === 5 ? "Finish Game" : "Next level";


    return (
        isLoading ? <div>LOADING....</div> :
        <div className={styles.game}>
            <div className={styles.wrapper}>
                <Header/>
                <Navbar section={section}/>
                {!isEndGame
                    ? <Game
                        section={section}
                        randomId={randomId}
                        selectBird={selectBird}
                        selectAnswer={selectAnswer}
                        label={btnLabel}
                        goToNextLevel={goToNextLevel}
                        isEndGame={isEndGame}/>

                    : <FinishGame
                        startNewGame={startNewGame}
                        isEndGame={isEndGame}
                    />
                }
            </div>
        </div>
    );
}

export default App;
