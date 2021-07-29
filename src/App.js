import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./App.module.scss";

import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import rightAudio from "./assets/audio/success.mp3";
import wrongAudio from "./assets/audio/fail.mp3";
import FinishGame from "./components/FinishGame/FinishGame";
import Game from "./components/Game/Game";
import {setMistake, resetMistakes, setScore, resetScore,setSelectedBird,
    setIsWin, getBirdsData,setSection, resetCurrentSection,setIsGameOver} from "./store/birdGameSlice";
import {Route, Switch} from "react-router";
import LogIn from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";



function App() {
    const [randomId, setRandomId] = useState(0);
    const win = useSelector(state => state.birdsData.isWin);
    const isInit=useSelector(state => state.birdsData.isInit);
    const section=useSelector(state => state.birdsData.section);
    const isEndGame=useSelector(state => state.birdsData.isGameOver);

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getBirdsData());
    }, [dispatch]);


    useEffect(() => {
        setRandomId(getRandomId());
    }, [section]);

    function getRandomId() {
        const id = Math.floor((Math.random() * 6));
        console.log(`рандомно проигрывается аудио с id: ${id + 1}`);
        return id;
    }

    const setNewMistake = () => dispatch(setMistake());
    const resetAllMistakes = () => dispatch(resetMistakes());
    const getScore = () => dispatch(setScore());
    const resetAllScore = () => dispatch(resetScore());
    const setIsUserWin = ({value}) => dispatch(setIsWin({value}));
    const setCurrentSection=()=>dispatch(setSection());
    const resetSection=()=>dispatch(resetCurrentSection());
    const setIsEndGame=({value})=>dispatch(setIsGameOver({value}));
    const setSelectBird=({id})=>dispatch(setSelectedBird({id}));

    const selectAnswer = (id) => {
        let currentId = id - 1;
        setSelectBird({id:currentId});
        checkAnswer(currentId);
    };

    const checkAnswer = (id) => {
        const rightAnswer = new Audio(rightAudio);
        const wrongAnswer = new Audio(wrongAudio);
        if (id === randomId) {
            rightAnswer.play();
            setIsUserWin({value: true});
            setSelectBird({id:id});
            getScore();
        } else {
            wrongAnswer.play();
            setNewMistake();
        }
    };

    function goToNextLevel() {
        if (section === 5 && win) {
            endGame();
        } else if (win) {
            setCurrentSection();
            resetAllMistakes();
            setIsUserWin({value: false});
            setSelectBird({id:null});
        }
    }

    function endGame() {
        setCurrentSection();
        setIsEndGame({value:true});
        setIsUserWin({value: false});
        resetAllMistakes();
    }

    const startNewGame = () => {
        setIsEndGame({value:false});
        resetSection();
        setIsUserWin({value: false});
        resetAllScore();
        resetAllMistakes();
        setSelectBird({id:null});
    };

    return (
        <Switch>
            <div className={styles.game}>
                <div className={styles.wrapper}>
                    <Header/>
                    <Route path="/login" render={()=><LogIn/>}/>
                    <Route path="/signup" render={()=><SignUp/>}/>
                    {!isInit ? <h2>LOADING....</h2> :
                        <Route exact path="/" render={() =>
                            <>
                                <Navbar/>
                                {!isEndGame
                                    ? <Game
                                        randomId={randomId}
                                        selectAnswer={selectAnswer}
                                        goToNextLevel={goToNextLevel}
                                    />
                                    : <FinishGame
                                        startNewGame={startNewGame}
                                    />
                                }
                            </>
                        }/>
                    }

                </div>
            </div>
        </Switch>
    );
}

export default App;
